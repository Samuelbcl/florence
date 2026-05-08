/**
 * Route API : POST /api/newsletter
 * Inscrit un email à la newsletter via Systeme.io.
 *
 * Variables d'env requises sur Vercel :
 *   - systeme_api_key : clé API Systeme.io (Settings → Public API Keys)
 *   - systeme_tag_id  : ID numérique du tag/liste "Newsletter Florence Naturopathe"
 *
 * Étape 1 — création du contact
 *   POST https://api.systeme.io/api/contacts
 * Étape 2 — assignation du tag (= ajout à la liste)
 *   POST https://api.systeme.io/api/contacts/{contactId}/tags
 */

const SYSTEME_API = "https://api.systeme.io/api";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email: unknown = body?.email;

    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Email invalide." }, { status: 400 });
    }

    const apiKey = process.env.systeme_api_key;
    const tagId = process.env.systeme_tag_id;

    if (!apiKey || !tagId) {
      console.error("[newsletter] Variables d'env Systeme.io manquantes");
      return Response.json(
        { error: "Configuration serveur manquante." },
        { status: 500 }
      );
    }

    // 1. Créer le contact (ou le récupérer s'il existe déjà)
    const createRes = await fetch(`${SYSTEME_API}/contacts`, {
      method: "POST",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ email, locale: "fr" }),
    });

    let contactId: number | undefined;

    if (createRes.ok) {
      const created = await createRes.json();
      contactId = created?.id;
    } else if (createRes.status === 422) {
      // Email déjà existant : on récupère son ID via le endpoint search
      const searchRes = await fetch(
        `${SYSTEME_API}/contacts?email=${encodeURIComponent(email)}`,
        {
          headers: {
            "X-API-Key": apiKey,
            accept: "application/json",
          },
        }
      );
      if (searchRes.ok) {
        const data = await searchRes.json();
        contactId = data?.items?.[0]?.id;
      }
    } else {
      const errBody = await createRes.text();
      console.error(
        "[newsletter] Systeme.io create error:",
        createRes.status,
        errBody
      );
      return Response.json(
        { error: "Impossible d'inscrire pour le moment." },
        { status: 502 }
      );
    }

    if (!contactId) {
      console.error("[newsletter] Pas d'ID de contact retourné");
      return Response.json(
        { error: "Impossible d'inscrire pour le moment." },
        { status: 502 }
      );
    }

    // 2. Assigner le tag (= ajouter à la liste)
    const tagRes = await fetch(
      `${SYSTEME_API}/contacts/${contactId}/tags`,
      {
        method: "POST",
        headers: {
          "X-API-Key": apiKey,
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({ tagId: Number(tagId) }),
      }
    );

    // 204 = tag ajouté, ou déjà présent (selon le SDK). On accepte tout 2xx.
    if (!tagRes.ok && tagRes.status !== 204) {
      const errBody = await tagRes.text();
      console.error(
        "[newsletter] Systeme.io tag error:",
        tagRes.status,
        errBody
      );
      // On ne bloque pas le user, le contact est créé. Tag éventuel à ajouter
      // plus tard manuellement.
    }

    return Response.json({ ok: true });
  } catch (e) {
    console.error("[newsletter] Unexpected error:", e);
    return Response.json({ error: "Erreur inattendue." }, { status: 500 });
  }
}
