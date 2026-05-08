/**
 * Route API : POST /api/newsletter
 * Inscrit un email à la newsletter via Systeme.io.
 *
 * Variables d'env requises sur Vercel :
 *   - systeme_api_key : clé API Systeme.io
 *   - systeme_tag_id  : ID numérique du tag "Newsletter Florence Naturopathe"
 */

const SYSTEME_API = "https://api.systeme.io/api";
const FETCH_TIMEOUT_MS = 5000;

async function fetchTimed(url: string, init?: RequestInit) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
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

    const headers = {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
      accept: "application/json",
    };

    // 1. Création du contact
    const createRes = await fetchTimed(`${SYSTEME_API}/contacts`, {
      method: "POST",
      headers,
      body: JSON.stringify({ email, locale: "fr" }),
    });

    // Email déjà inscrit → succès silencieux
    if (createRes.status === 422) {
      console.log("[newsletter] email déjà existant");
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

    // 2. Attachement du tag
    const tagRes = await fetchTimed(
      `${SYSTEME_API}/contacts/${contactId}/tags`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({ tagId }),
      }
    );

    if (!tagRes.ok && tagRes.status !== 204) {
      const errBody = await tagRes.text().catch(() => "");
      console.warn(
        "[newsletter] tag attachment failed",
        tagRes.status,
        errBody.slice(0, 200)
      );
      // Ne bloque pas le user : contact créé même sans tag
    }

    return Response.json({ ok: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "?";
    console.error("[newsletter] Unexpected error:", msg);
    return Response.json({ error: "Erreur inattendue." }, { status: 500 });
  }
}
