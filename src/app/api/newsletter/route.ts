/**
 * Route API : POST /api/newsletter
 * Inscrit un email à la newsletter via Systeme.io.
 *
 * Variables d'env requises sur Vercel :
 *   - systeme_api_key : clé API Systeme.io
 *   - systeme_tag_id  : ID numérique du tag "Newsletter Florence Naturopathe"
 */

const SYSTEME_API = "https://api.systeme.io/api";
const FETCH_TIMEOUT_MS = 2500;

async function fetchTimed(
  url: string,
  init?: RequestInit,
  timeoutMs = FETCH_TIMEOUT_MS
) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Tente plusieurs endpoints/formats connus de Systeme.io pour attacher
 * un tag à un contact. Retourne true au premier qui réussit.
 */
async function attachTag(
  contactId: number,
  tagId: number,
  apiKey: string
): Promise<{ ok: boolean; tried: string[] }> {
  const baseHeaders = {
    "X-API-Key": apiKey,
    "Content-Type": "application/json",
    accept: "application/json",
  };

  const attempts: { label: string; req: () => Promise<Response> }[] = [
    {
      label: "POST /contacts/{id}/tags { tagId }",
      req: () =>
        fetchTimed(`${SYSTEME_API}/contacts/${contactId}/tags`, {
          method: "POST",
          headers: baseHeaders,
          body: JSON.stringify({ tagId }),
        }),
    },
    {
      label: "POST /contacts/{id}/tags { id }",
      req: () =>
        fetchTimed(`${SYSTEME_API}/contacts/${contactId}/tags`, {
          method: "POST",
          headers: baseHeaders,
          body: JSON.stringify({ id: tagId }),
        }),
    },
    {
      label: "POST /tags/{tagId}/contacts { contactId }",
      req: () =>
        fetchTimed(`${SYSTEME_API}/tags/${tagId}/contacts`, {
          method: "POST",
          headers: baseHeaders,
          body: JSON.stringify({ contactId }),
        }),
    },
    {
      label: "POST /tags/{tagId}/contacts { id: contactId }",
      req: () =>
        fetchTimed(`${SYSTEME_API}/tags/${tagId}/contacts`, {
          method: "POST",
          headers: baseHeaders,
          body: JSON.stringify({ id: contactId }),
        }),
    },
    {
      label: "PATCH /contacts/{id} { tags: [tagId] }",
      req: () =>
        fetchTimed(`${SYSTEME_API}/contacts/${contactId}`, {
          method: "PATCH",
          headers: baseHeaders,
          body: JSON.stringify({ tags: [tagId] }),
        }),
    },
  ];

  const tried: string[] = [];
  for (const a of attempts) {
    try {
      const res = await a.req();
      const status = res.status;
      const txt = await res.text().catch(() => "");
      tried.push(`${a.label} → ${status}`);
      if (res.ok || status === 204) {
        console.log(`[newsletter] ✓ tag attached via: ${a.label}`);
        return { ok: true, tried };
      } else {
        console.warn(
          `[newsletter] ✗ ${a.label} → ${status} ${txt.slice(0, 200)}`
        );
      }
    } catch (e) {
      const msg = e instanceof Error ? e.message : "?";
      tried.push(`${a.label} → exception ${msg}`);
      console.warn(`[newsletter] ✗ ${a.label} → exception`, msg);
    }
  }

  return { ok: false, tried };
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
      console.error("[newsletter] Variables d'env manquantes");
      return Response.json(
        { error: "Configuration serveur manquante." },
        { status: 500 }
      );
    }

    // Tentative 1 : créer le contact avec le tag dans le body (le plus
    // efficace si Systeme.io accepte ce format)
    const createWithTagsRes = await fetchTimed(`${SYSTEME_API}/contacts`, {
      method: "POST",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ email, locale: "fr", tags: [tagId] }),
    });

    if (createWithTagsRes.ok) {
      const created = await createWithTagsRes.json().catch(() => null);
      const id = created?.id;
      const responseTags = created?.tags;
      console.log(
        "[newsletter] contact créé avec tags dans body, id=",
        id,
        "tags=",
        responseTags
      );

      // Vérifie si le tag a bien été appliqué (selon le retour API)
      // Si on a bien le tag dans la réponse, c'est gagné en 1 appel
      const hasTag =
        Array.isArray(responseTags) &&
        responseTags.some(
          (t: unknown) =>
            typeof t === "number"
              ? t === tagId
              : (t as { id?: number })?.id === tagId
        );

      if (hasTag) {
        return Response.json({ ok: true });
      }

      // Sinon on attache via un endpoint séparé
      if (id) {
        const result = await attachTag(id, tagId, apiKey);
        return Response.json({
          ok: true,
          tagAttached: result.ok,
          tried: result.tried,
        });
      }
    } else if (createWithTagsRes.status === 422) {
      // Email déjà inscrit
      console.log("[newsletter] email déjà existant");
      return Response.json({ ok: true, alreadyExists: true });
    } else {
      const errBody = await createWithTagsRes.text().catch(() => "");
      console.error(
        "[newsletter] create error",
        createWithTagsRes.status,
        errBody.slice(0, 300)
      );
      return Response.json(
        { error: "Impossible d'inscrire pour le moment." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "?";
    console.error("[newsletter] Unexpected error:", msg);
    return Response.json({ error: "Erreur inattendue." }, { status: 500 });
  }
}
