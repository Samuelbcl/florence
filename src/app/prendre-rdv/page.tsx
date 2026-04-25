import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prendre rendez-vous — Florence Debattice",
  description:
    "Réservez votre consultation de naturopathie ou séance de réflexologie plantaire avec Florence Debattice.",
};

export default function PrendreRDV() {
  return (
    <>
      <section className="bg-primary-light/30 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary-dark mb-6">
            Réservation en ligne
          </p>
          <h1 className="font-display text-5xl md:text-6xl">
            Prendre rendez-vous
          </h1>
          <p className="text-lg text-muted mt-6 max-w-2xl mx-auto">
            Réservez en ligne votre consultation ou contactez-moi directement
            pour toute question.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-8 border border-border">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
              En ligne
            </p>
            <h2 className="font-display text-2xl text-primary-dark mb-4">
              Réservez sur Resalib
            </h2>
            <p className="text-muted text-sm mb-6 leading-relaxed">
              Choisissez votre créneau directement en ligne, 24h/24.
              Confirmation immédiate par email.
            </p>
            <a
              href="https://www.resalib.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 bg-primary text-white text-xs tracking-[0.2em] uppercase hover:bg-primary-dark transition-colors"
            >
              Voir les créneaux
            </a>
          </div>

          <div className="bg-card p-8 border border-border">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
              Contact direct
            </p>
            <h2 className="font-display text-2xl text-primary-dark mb-4">
              Une question ?
            </h2>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <span className="text-xs tracking-wider uppercase block text-foreground/60 mb-1">
                  Téléphone
                </span>
                <a href="tel:0600000000" className="hover:text-primary">
                  06 00 00 00 00
                </a>
              </li>
              <li>
                <span className="text-xs tracking-wider uppercase block text-foreground/60 mb-1">
                  Email
                </span>
                <a
                  href="mailto:contact@florence-debattice.fr"
                  className="hover:text-primary break-all"
                >
                  contact@florence-debattice.fr
                </a>
              </li>
              <li>
                <span className="text-xs tracking-wider uppercase block text-foreground/60 mb-1">
                  Cabinet
                </span>
                Adresse à compléter
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-background border border-dashed border-border p-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Widget de réservation
          </p>
          <h3 className="font-display text-2xl text-foreground mb-3">
            Calendrier de prise de rendez-vous à intégrer
          </h3>
          <p className="text-muted text-sm max-w-xl mx-auto">
            À cet endroit sera intégré le widget Resalib (ou Calendly /
            autre solution choisie) afin de réserver directement sans quitter
            le site.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="font-script text-5xl md:text-6xl text-center mb-10 leading-none text-foreground">
          avant votre première consultation
        </h2>
        <ul className="space-y-4 text-muted">
          <li className="pl-6 border-l-2 border-primary">
            <strong className="text-foreground block mb-1">Durée</strong>
            Comptez environ 1h30 pour la première séance.
          </li>
          <li className="pl-6 border-l-2 border-primary">
            <strong className="text-foreground block mb-1">À apporter</strong>
            Vos derniers bilans sanguins ou médicaux si vous en avez, ainsi
            qu&apos;un cahier pour noter les conseils.
          </li>
          <li className="pl-6 border-l-2 border-primary">
            <strong className="text-foreground block mb-1">Tarifs</strong>
            70€ la première consultation. Règlement par chèque ou espèces.
          </li>
          <li className="pl-6 border-l-2 border-primary">
            <strong className="text-foreground block mb-1">Annulation</strong>
            Merci de prévenir au moins 24h à l&apos;avance en cas
            d&apos;empêchement.
          </li>
        </ul>
      </section>
    </>
  );
}
