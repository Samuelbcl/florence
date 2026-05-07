"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Merci d'entrer une adresse email valide.");
      return;
    }
    // TODO : brancher à un service de newsletter (Mailchimp, Brevo, Resend…).
    // Pour l'instant on simule la soumission côté client.
    setSubmitted(true);
    setEmail("");
  };

  return (
    <>
      {/* HEADER de page */}
      <section className="bg-primary-light/20 py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.5em] uppercase text-accent font-medium mb-4">
            Contact
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-primary-dark leading-[1.05] mb-3">
            Restons en contact
          </h1>
          <p className="font-script text-3xl md:text-4xl text-accent leading-none">
            une question, un échange ?
          </p>
        </div>
      </section>

      {/* BLOC INFO + NEWSLETTER */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16">
        {/* Coordonnées */}
        <div>
          <h2 className="font-script text-4xl md:text-5xl text-primary-dark mb-6 leading-none">
            le cabinet
          </h2>
          <div className="space-y-4 text-foreground/85 leading-[1.8]">
            <p>
              <span className="block text-xs tracking-[0.3em] uppercase text-muted mb-1">
                Adresse
              </span>
              Rue de Beaufays 17b
              <br />
              4870 Trooz, Belgique
            </p>
            <p>
              <span className="block text-xs tracking-[0.3em] uppercase text-muted mb-1">
                Email
              </span>
              <a
                href="mailto:contact@florence-debattice.be"
                className="text-primary-dark hover:text-primary border-b border-primary-dark/40 hover:border-primary"
              >
                contact@florence-debattice.be
              </a>
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-card border border-border rounded-xl p-8 md:p-10">
          <h2 className="font-script text-4xl md:text-5xl text-accent mb-3 leading-none">
            la newsletter
          </h2>
          <p className="text-foreground/85 leading-[1.7] mb-6">
            Recevez chaque mois mes articles, conseils et inspirations
            naturopathiques directement par mail. Aucune publicité, aucun
            spam — uniquement du contenu choisi pour vous.
          </p>

          {submitted ? (
            <div className="bg-primary-light/30 border-l-[4px] border-primary-dark rounded-r-lg px-5 py-4">
              <p className="text-base italic text-primary-dark leading-[1.7] m-0">
                Merci ! Votre inscription est bien enregistrée. Vous recevrez
                bientôt mon prochain article.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
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
              {error && (
                <p className="text-xs text-red-700">{error}</p>
              )}
              <button
                type="submit"
                className="w-full bg-primary-dark text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-primary transition-colors"
              >
                Je m&apos;inscris à la newsletter
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
