/**
 * Route API : POST /api/newsletter
 * Inscrit un email à la liste Brevo "Newsletter Florence Naturopathe" (id 2).
 *
 * Variable d'env requise sur Vercel : `brevo` = clé API Brevo (xkeysib-...)
 */

const BREVO_LIST_ID = 2;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email: unknown = body?.email;

    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: "Email invalide." },
        { status: 400 }
      );
    }

    const apiKey = process.env.brevo;
    if (!apiKey) {
      console.error("[newsletter] Variable d'env `brevo` manquante");
      return Response.json(
        { error: "Configuration serveur manquante." },
        { status: 500 }
      );
    }

    const brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
      }),
    });

    if (!brevoRes.ok) {
      // Brevo renvoie 400 quand le contact existe déjà mais qu'on n'a pas
      // updateEnabled — on a updateEnabled donc ça devrait passer en 204.
      // Cas réels d'erreur : email invalide selon Brevo, quotas, etc.
      const errBody = await brevoRes.text();
      console.error("[newsletter] Brevo error:", brevoRes.status, errBody);

      // On reste générique côté client
      return Response.json(
        { error: "Impossible d'inscrire pour le moment." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (e) {
    console.error("[newsletter] Unexpected error:", e);
    return Response.json(
      { error: "Erreur inattendue." },
      { status: 500 }
    );
  }
}
