import type { Metadata } from "next";
import Link from "next/link";
import { getSiteSettings } from "../../lib/settings";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site flonaturopathie.com — Florence Debattice, naturopathe à Trooz, province de Liège, Belgique.",
  alternates: { canonical: "/mentions-legales" },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function MentionsLegales() {
  const settings = await getSiteSettings();

  return (
    <>
      <nav className="bg-background pt-6 md:pt-8" aria-label="Fil d'Ariane">
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          <ol className="flex items-center gap-2 text-xs md:text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-primary-dark">
                Accueil
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="text-foreground/85">Mentions légales</li>
          </ol>
        </div>
      </nav>

      <section className="bg-background py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          <h1 className="font-display text-3xl md:text-5xl text-primary-dark leading-tight mb-8 md:mb-10">
            Mentions légales
          </h1>

          <p className="text-sm text-muted mb-10">
            Dernière mise à jour : 2026.
          </p>

          <article className="space-y-10 text-base text-foreground/85 leading-[1.75]">
            {/* ÉDITEUR */}
            <section>
              <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3">
                Éditeur du site
              </h2>
              <p>
                Le site <strong>flonaturopathie.com</strong> est édité par :
              </p>
              <ul className="mt-3 space-y-1 list-none">
                <li>
                  <strong>Florence Debattice</strong>, naturopathe
                </li>
                <li className="whitespace-pre-line">{settings.address}</li>
                <li>Belgique</li>
                <li>Email : {settings.email}</li>
                {settings.phone && (
                  <li>
                    Téléphone :{" "}
                    {settings.phoneDisplay || settings.phone}
                  </li>
                )}
              </ul>
              <p className="mt-4 text-sm text-muted">
                Numéro d&apos;entreprise (BCE) : <em>à compléter par Florence</em>
                . Statut : indépendante à titre principal / complémentaire — <em>à préciser</em>.
              </p>
            </section>

            {/* RESPONSABLE PUBLICATION */}
            <section>
              <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3">
                Responsable de la publication
              </h2>
              <p>Florence Debattice, en qualité d&apos;éditrice du site.</p>
            </section>

            {/* HÉBERGEMENT */}
            <section>
              <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3">
                Hébergement
              </h2>
              <p>
                Le site est hébergé par{" "}
                <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA
                91789, USA — <a href="https://vercel.com" className="text-primary-dark underline">vercel.com</a>.
              </p>
              <p className="mt-3">
                Le nom de domaine est enregistré chez{" "}
                <strong>Hostinger International Ltd.</strong>
              </p>
            </section>

            {/* CONCEPTION */}
            <section>
              <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3">
                Conception et développement
              </h2>
              <p>
                Site conçu et développé par{" "}
                <strong>Biancola Studio</strong>.
              </p>
            </section>

            {/* PROPRIÉTÉ INTELLECTUELLE */}
            <section>
              <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3">
                Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble du contenu du site (textes, articles, images,
                graphismes, logo, illustrations, ebook) est la propriété
                exclusive de Florence Debattice, sauf mention contraire. Toute
                reproduction, représentation, modification, publication,
                transmission ou exploitation, totale ou partielle, sans
                autorisation écrite préalable est interdite et constituerait
                une contrefaçon sanctionnée par le Code de droit économique
                belge.
              </p>
            </section>

            {/* LIMITATION DE RESPONSABILITÉ */}
            <section>
              <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3">
                Limitation de responsabilité
              </h2>
              <p>
                Les contenus publiés sur ce site ont une vocation
                informative et pédagogique. Ils ne se substituent en aucun
                cas à un diagnostic médical, à un traitement médical ou à
                l&apos;avis d&apos;un professionnel de santé. La naturopathie
                ne dispense pas du suivi médical conventionnel ; elle
                s&apos;inscrit en complément, jamais en remplacement.
              </p>
              <p className="mt-3">
                Florence Debattice met tout en œuvre pour fournir des
                informations exactes et à jour. Toutefois, elle ne saurait
                garantir l&apos;exactitude, l&apos;exhaustivité ou
                l&apos;actualité des informations diffusées sur le site, ni
                être tenue responsable d&apos;une utilisation faite par un
                tiers de ces informations.
              </p>
            </section>

            {/* LIENS EXTERNES */}
            <section>
              <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3">
                Liens externes
              </h2>
              <p>
                Le site peut contenir des liens vers des sites tiers
                (Cal.com pour la prise de rendez-vous, Systeme.io pour la
                newsletter, Etsy pour la vente de l&apos;ebook). Florence
                Debattice n&apos;exerce aucun contrôle sur ces sites et ne
                saurait être tenue responsable de leur contenu, de leur
                politique de confidentialité ou de leurs pratiques
                commerciales.
              </p>
            </section>

            {/* DONNÉES PERSONNELLES */}
            <section>
              <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3">
                Données personnelles
              </h2>
              <p>
                Les modalités de collecte et de traitement de vos données
                personnelles sont détaillées dans notre{" "}
                <Link
                  href="/politique-de-confidentialite"
                  className="text-primary-dark underline hover:text-primary"
                >
                  politique de confidentialité
                </Link>
                .
              </p>
            </section>

            {/* DROIT APPLICABLE */}
            <section>
              <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3">
                Droit applicable
              </h2>
              <p>
                Les présentes mentions légales sont régies par le droit belge.
                Tout litige relatif à l&apos;utilisation du site sera de la
                compétence exclusive des tribunaux belges, sauf disposition
                impérative contraire.
              </p>
            </section>

            {/* CONTACT */}
            <section>
              <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3">
                Contact
              </h2>
              <p>
                Pour toute question relative au site ou à son contenu,
                contactez-nous par email à{" "}
                <a
                  href={`mailto:${settings.email}`}
                  className="text-primary-dark underline hover:text-primary"
                >
                  {settings.email}
                </a>
                .
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
