/**
 * Route API : POST /api/newsletter
 * Inscrit un email à la newsletter via Systeme.io.
 *
 * Variables d'env requises sur Vercel :
 *   - systeme_api_key : clé API Systeme.io (Settings → Public API Keys)
 *   - systeme_tag_id  : ID numérique du tag "Newsletter Florence Naturopathe"
 *
 * Stratégie :
 *   1. POST /api/contacts pour créer le contact
 *      - 200/201 : contact créé, on récupère son id
 *      - 422 / autre code "déjà existant" : on cherche le contact par email
 *   2. Tentative d'attachement du tag avec plusieurs formats (Systeme.io
 *      a parfois des variations entre comptes/versions). On loggue celui
 *      qui marche pour pouvoir simplifier après.
 */

const SYSTEME_API = "https://api.systeme.io/api";
const FETCH_TIMEOUT_MS = 5000;

async function fetchJson(url: string, init?: RequestInit) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

async function findContactIdByEmail(
  email: string,
  apiKey: string
): Promise<number | undefined> {
  try {
    const res = await fetchJson(
      `${SYSTEME_API}/contacts?email=${encodeURIComponent(email)}`,
      {
        headers: {
          "X-API-Key": apiKey,
          accept: "application/json",
        },
      }
    );
    if (!res.ok) return undefined;
    const data = await res.json();
    return data?.items?.[0]?.id ?? data?.[0]?.id;
  } catch {
    return undefined;
  }
}

/**
 * Tente plusieurs formats d'attachement de tag connus pour Systeme.io.
 * Retourne true si l'un a fonctionné.
 */
async function attachTag(
  contactId: number,
  tagId: number,
  apiKey: string
): Promise<boolean> {
  const baseHeaders = {
    "X-API-Key": apiKey,
    "Content-Type": "application/json",
    accept: "application/json",
  };

  const attempts: { label: string; req: () => Promise<Response> }[] = [
    {
      label: "POST /contacts/{id}/tags { tagId }",
      req: () =>
        fetchJson(`${SYSTEME_API}/contacts/${contactId}/tags`, {
          method: "POST",
          headers: baseHeaders,
          body: JSON.stringify({ tagId }),
        }),
    },
    {
      label: "POST /contacts/{id}/tags { id }",
      req: () =>
        fetchJson(`${SYSTEME_API}/contacts/${contactId}/tags`, {
          method: "POST",
          headers: baseHeaders,
          body: JSON.stringify({ id: tagId }),
        }),
    },
    {
      label: "PATCH /contacts/{id} { tags: [tagId] }",
      req: () =>
        fetchJson(`${SYSTEME_API}/contacts/${contactId}`, {
          method: "PATCH",
          headers: baseHeaders,
          body: JSON.stringify({ tags: [tagId] }),
        }),
    },
  ];

  for (const a of attempts) {
    try {
      const res = await a.req();
      if (res.ok || res.status === 204) {
        console.log(`[newsletter] tag attached via: ${a.label}`);
        return true;
      } else {
        const txt = await res.text().catch(() => "");
        console.warn(
          `[newsletter] ${a.label} → ${res.status}`,
          txt.slice(0, 200)
        );
      }
    } catch (e) {
      console.warn(`[newsletter] ${a.label} → exception`, e);
    }
  }

  return false;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email: unknown = body?.email;

    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Email invalide." }, { status: 400 });
    }

    const apiKey = process.env.systeme_api_key;
    const tagIdStr = process.env.systeme_tag_id;
    const tagId = tagIdStr ? Number(tagIdStr) : NaN;

    if (!apiKey || !tagIdStr || Number.isNaN(tagId)) {
      console.error(
        "[newsletter] Variables d'env Systeme.io manquantes ou invalides"
      );
      return Response.json(
        { error: "Configuration serveur manquante." },
        { status: 500 }
      );
    }

    // 1. Créer le contact (ou récupérer son ID s'il existe déjà)
    let contactId: number | undefined;

    const createRes = await fetchJson(`${SYSTEME_API}/contacts`, {
      method: "POST",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ email, locale: "fr" }),
    });

    if (createRes.ok) {
      const created = await createRes.json();
      contactId = created?.id;
      console.log("[newsletter] contact created", contactId);
    } else {
      // Souvent 422 si déjà existant. On cherche son ID.
      const errBody = await createRes.text().catch(() => "");
      console.warn(
        "[newsletter] create returned",
        createRes.status,
        errBody.slice(0, 200)
      );
      contactId = await findContactIdByEmail(email, apiKey);
      if (contactId) {
        console.log("[newsletter] contact already existed, id=", contactId);
      }
    }

    if (!contactId) {
      console.error("[newsletter] impossible de récupérer le contact");
      return Response.json(
        { error: "Impossible d'inscrire pour le moment." },
        { status: 502 }
      );
    }

    // 2. Attacher le tag
    const tagged = await attachTag(contactId, tagId, apiKey);
    if (!tagged) {
      console.error(
        "[newsletter] AUCUN format d'attachement de tag n'a fonctionné — vérifier l'API ou l'ID du tag"
      );
      // On ne retourne pas d'erreur au user : son contact est créé.
      // Ta mère pourra l'ajouter manuellement au tag dans Systeme.io.
    }

    return Response.json({ ok: true });
  } catch (e) {
    console.error("[newsletter] Unexpected error:", e);
    return Response.json({ error: "Erreur inattendue." }, { status: 500 });
  }
}
