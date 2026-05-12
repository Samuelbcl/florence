"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import type { SiteSettings } from "../../lib/settings";

export default function ContactClient({
  settings,
}: {
  settings: SiteSettings;
}) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Merci d'entrer une adresse email valide.");
      return;
    }
    if (!consent) {
      setError("Merci d'accepter la réception de la newsletter.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Impossible d'inscrire pour le moment.");
        return;
      }
      setSubmitted(true);
      setEmail("");
      setConsent(false);
    } catch {
      setError("Erreur réseau. Réessayez dans un instant.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HEADER de page */}
      <section className="bg-primary-light/20 py-14 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-6 text-center">
          <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-accent font-medium mb-3 md:mb-4">
            Contact
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl text-primary-dark leading-[1.05] mb-3">
            Restons en contact
          </h1>
          <p className="font-script text-2xl sm:text-3xl md:text-4xl text-accent leading-none">
            une question, un échange ?
          </p>
        </div>
      </section>

      {/* BLOC INFO + NEWSLETTER */}
      <section className="max-w-5xl mx-auto px-5 md:px-6 py-12 md:py-24 grid md:grid-cols-2 gap-8 md:gap-16">
        {/* Coordonnées */}
        <div className="text-center md:text-left">
          <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-primary-dark mb-5 md:mb-6 leading-none">
            Le cabinet
          </h2>
          <div className="space-y-4 text-sm md:text-base text-foreground/85 leading-[1.7] md:leading-[1.8]">
            <p>
              <span className="block text-xs tracking-[0.3em] uppercase text-muted mb-1">
                Adresse
              </span>
              <span className="whitespace-pre-line">{settings.address}</span>
            </p>
            <p>
              <span className="block text-xs tracking-[0.3em] uppercase text-muted mb-1">
                Email
              </span>
              <a
                href={`mailto:${settings.email}`}
                className="text-primary-dark hover:text-primary border-b border-primary-dark/40 hover:border-primary"
              >
                {settings.email}
              </a>
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-card border border-border rounded-xl p-6 sm:p-8 md:p-10">
          <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-accent mb-3 leading-none">
            La newsletter
          </h2>
          <p className="text-sm md:text-base text-foreground/85 leading-[1.7] mb-5 md:mb-6">
            Recevez chaque mois mes articles, conseils et inspirations
            naturopathiques directement par mail. Aucune publicité, aucun
            spam — uniquement du contenu choisi pour vous.
          </p>

          {submitted ? (
            <div className="bg-primary-light/30 border-l-[4px] border-primary-dark rounded-r-lg px-5 py-4">
              <p className="text-base italic text-primary-dark leading-[1.7] m-0">
                Merci ! Votre inscription est bien enregistrée. Vous recevrez
                bientôt mes prochains articles directement dans votre boîte
                mail.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="text-xs tracking-[0.3em] uppercase text-muted mb-2 block">
                  Adresse email
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vous@exemple.com"
                  className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-primary-dark text-foreground"
                  required
                />
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-primary-dark cursor-pointer shrink-0"
                />
                <span className="text-xs text-foreground/75 leading-relaxed">
                  J&apos;accepte de recevoir la newsletter de {settings.siteName}.
                  Je peux me désinscrire à tout moment via le lien de
                  désinscription présent dans chaque email.
                </span>
              </label>

              {error && (
                <p className="text-xs text-red-700">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-dark text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-primary transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Inscription en cours…" : "Je m'inscris à la newsletter"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
