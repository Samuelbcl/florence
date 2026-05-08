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
 *      - Succès → on récupère son id, on attache le tag
 *      - 422 → email déjà existant : on renvoie simplement succès
 *        (la personne est déjà dans la liste, taguée à la 1ʳᵉ inscription)
 *   2. Pour l'attachement de tag, on tente 3 formats connus de
 *      l'API Systeme.io. Le premier qui marche gagne.
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

/**
 * Tente plusieurs formats d'attachement de tag.
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

    // Création du contact
    const createRes = await fetchJson(`${SYSTEME_API}/contacts`, {
      method: "POST",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ email, locale: "fr" }),
    });

    if (createRes.status === 422) {
      // Email déjà inscrit → succès silencieux
      // (en production, la personne est déjà taguée depuis sa 1ʳᵉ inscription)
      console.log(
        "[newsletter] email déjà existant, on renvoie succès"
      );
      return Response.json({ ok: true, alreadyExists: true });
    }

    if (!createRes.ok) {
      const errBody = await createRes.text().catch(() => "");
      console.error(
        "[newsletter] create error",
        createRes.status,
        errBody.slice(0, 300)
      );
      return Response.json(
        { error: "Impossible d'inscrire pour le moment." },
        { status: 502 }
      );
    }

    const created = await createRes.json();
    const contactId: number | undefined = created?.id;

    if (!contactId) {
      console.error("[newsletter] pas d'ID retourné", created);
      return Response.json(
        { error: "Impossible d'inscrire pour le moment." },
        { status: 502 }
      );
    }

    console.log("[newsletter] contact created", contactId);

    // Attachement du tag
    const tagged = await attachTag(contactId, tagId, apiKey);
    if (!tagged) {
      console.error(
        "[newsletter] AUCUN format d'attachement de tag n'a fonctionné"
      );
      // On ne bloque pas le user : son contact est créé.
    }

    return Response.json({ ok: true });
  } catch (e) {
    console.error("[newsletter] Unexpected error:", e);
    return Response.json({ error: "Erreur inattendue." }, { status: 500 });
  }
}
