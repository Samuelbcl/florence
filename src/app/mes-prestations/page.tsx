import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mes prestations — Florence Debattice",
  description:
    "Consultation naturopathie, réflexologie plantaire, ateliers et naturopathie en entreprise. Tarifs et descriptions.",
};

export default function MesPrestations() {
  return (
    <>
      <section className="bg-primary-light/30 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary-dark mb-6">
            Mes prestations
          </p>
          <h1 className="font-display text-5xl md:text-6xl">
            Prestations & tarifs
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-16">
        <article className="grid md:grid-cols-[1fr,1.5fr] gap-10 items-start pb-16 border-b border-border">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
              01
            </p>
            <h2 className="font-display text-3xl text-primary-dark mb-2">
              Consultation naturopathie
            </h2>
          </div>
          <div>
            <p className="text-muted leading-relaxed mb-6">
              Lors de la première consultation d&apos;une durée d&apos;environ
              1h30, le naturopathe suit une anamnèse précise portant sur la
              santé, les événements clés de vie, le sommeil, l&apos;alimentation,
              l&apos;élimination et les émotions. Un bilan d&apos;iridologie
              peut compléter l&apos;analyse. Les conseils s&apos;organisent en
              trois parties : hygiène vitale, alimentation et régulateurs de
              terrain si besoin.
            </p>
            <ul className="space-y-2">
              {[
                { label: "1ère séance (1h30)", price: "70€" },
                { label: "Consultation suivi (1h)", price: "55€" },
                { label: "Pack SOPK (3 RDV)", price: "160€" },
              ].map((p) => (
                <li
                  key={p.label}
                  className="flex justify-between items-baseline py-2 border-b border-border last:border-0"
                >
                  <span className="text-muted">{p.label}</span>
                  <span className="font-display text-xl text-primary-dark">
                    {p.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="grid md:grid-cols-[1fr,1.5fr] gap-10 items-start pb-16 border-b border-border">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
              02
            </p>
            <h2 className="font-display text-3xl text-primary-dark mb-2">
              Réflexologie plantaire
            </h2>
          </div>
          <div>
            <p className="text-muted leading-relaxed mb-6">
              Après un entretien sur le motif, vous êtes confortablement
              allongé pieds nus dans un relax. Par pressions sur les zones
              réflexes des pieds, sollicitation des organes correspondants.
              Durée : environ 45 minutes. Agit à titre curatif et préventif.
              Conseil : 3 séances rapprochées initialement, puis une par mois
              pour le maintien.
            </p>
            <ul className="space-y-2">
              {[
                { label: "Séance (1h)", price: "55€" },
                { label: "Forfait 3 séances", price: "150€", note: "(50€/séance)" },
                { label: "Forfait 5 séances", price: "240€", note: "(48€/séance)" },
              ].map((p) => (
                <li
                  key={p.label}
                  className="flex justify-between items-baseline py-2 border-b border-border last:border-0"
                >
                  <span className="text-muted">
                    {p.label}{" "}
                    {p.note && (
                      <span className="text-xs text-muted/70">{p.note}</span>
                    )}
                  </span>
                  <span className="font-display text-xl text-primary-dark">
                    {p.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="grid md:grid-cols-[1fr,1.5fr] gap-10 items-start pb-16 border-b border-border">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
              03
            </p>
            <h2 className="font-display text-3xl text-primary-dark mb-2">
              Ateliers & conférences
            </h2>
          </div>
          <div>
            <p className="text-muted leading-relaxed mb-6">
              Mensuels, sur des thèmes naturopathiques : ateliers culinaires,
              fabrication de cosmétiques naturels, hygiène vitale,
              aromathérapie, conférences thématiques.
            </p>
            <p className="text-muted mb-6">
              <strong className="text-foreground">Prochains ateliers :</strong>
              <br />
              — Huiles essentielles et petits maux de l&apos;hiver
              <br />— Graines germées : super aliment facile à faire à la maison
            </p>
            <div className="flex justify-between items-baseline py-2 border-b border-border">
              <span className="text-muted">Groupe 6–12 personnes</span>
              <span className="font-display text-xl text-primary-dark">
                10–20€
              </span>
            </div>
          </div>
        </article>

        <article className="grid md:grid-cols-[1fr,1.5fr] gap-10 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
              04
            </p>
            <h2 className="font-display text-3xl text-primary-dark mb-2">
              La naturopathie en entreprise
            </h2>
          </div>
          <div>
            <p className="text-muted leading-relaxed mb-6">
              Services adaptés pour entreprises : ateliers gestion du
              stress/émotions, conférences sommeil, réflexologie plantaire,
              consultations individuelles sur le lieu de travail.
            </p>
            <div className="flex justify-between items-baseline py-2 border-b border-border">
              <span className="text-muted">Devis personnalisé</span>
              <span className="font-display text-xl text-primary-dark">
                Sur demande
              </span>
            </div>
          </div>
        </article>
      </section>

      <section className="bg-card py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-2xl text-center mb-6">
            Informations pratiques
          </h2>
          <ul className="space-y-3 text-muted text-center">
            <li>Paiements acceptés : chèques et espèces.</li>
            <li>
              Non remboursé par la Sécurité Sociale, mais possibles
              remboursements partiels ou totaux par les mutuelles.
            </li>
            <li>
              Liste des mutuelles remboursant la naturopathie disponible sur
              demande.
            </li>
            <li className="italic pt-2 text-foreground">
              Le prix ne doit pas être un frein, parlez-en avec votre
              naturopathe.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-primary text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Réservez votre prochain rendez-vous
          </h2>
          <Link
            href="/prendre-rdv"
            className="inline-block px-8 py-4 bg-white text-primary-dark text-xs tracking-[0.2em] uppercase hover:bg-accent hover:text-white transition-colors"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </>
  );
}
