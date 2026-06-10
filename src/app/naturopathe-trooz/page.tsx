import type { Metadata } from "next";
import Link from "next/link";
import GoogleMap from "../../components/GoogleMap";

const SITE_URL = "https://flonaturopathie.com";

export const metadata: Metadata = {
  title: "Naturopathe à Trooz — Florence Debattice",
  description:
    "Naturopathe à Trooz (4870). Florence Debattice vous reçoit Rue de Beaufays 17b — bilan vital, hygiène de vie, conseils naturels. Consultations en cabinet ou en visio.",
  alternates: { canonical: "/naturopathe-trooz" },
};

const FAQ = [
  {
    question: "Où se trouve exactement votre cabinet à Trooz ?",
    answer:
      "Le cabinet de naturopathie est situé Rue de Beaufays 17b, 4870 Trooz, en province de Liège. Vous pouvez vous y rendre facilement depuis le centre de Liège (15 min), Chaudfontaine, Fléron, Esneux, Pepinster ou Verviers.",
  },
  {
    question: "Y a-t-il un parking à proximité du cabinet ?",
    answer:
      "Oui, du stationnement gratuit est disponible aux abords directs du cabinet. L'accès est simple, sans difficulté pour se garer.",
  },
  {
    question: "Quels sont les horaires de consultation à Trooz ?",
    answer:
      "Je reçois en cabinet le lundi et le mercredi, de 11h00 à 19h30. Pour les autres jours ou les personnes éloignées, des consultations en visioconférence sont disponibles avec les mêmes horaires.",
  },
  {
    question: "Acceptez-vous les patients d'autres communes que Trooz ?",
    answer:
      "Bien sûr. J'accompagne des personnes venant de toute la province de Liège — Liège-ville, Verviers, Chaudfontaine, Fléron, Soumagne, Esneux, Pepinster, Aywaille, Spa — ainsi que toute la Wallonie pour les consultations en visioconférence.",
  },
  {
    question: "Comment se passe le premier rendez-vous au cabinet ?",
    answer:
      "Le premier rendez-vous d'information dure 30 minutes et est gratuit. C'est l'occasion de faire connaissance, de discuter de vos attentes et de voir ensemble si la naturopathie vous correspond. Aucun engagement n'est requis à l'issue de cet échange.",
  },
];

export default function NaturopatheTroozPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Naturopathe à Trooz",
        item: `${SITE_URL}/naturopathe-trooz`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* BREADCRUMB */}
      <nav className="bg-background pt-6 md:pt-8" aria-label="Fil d'Ariane">
        <div className="max-w-5xl mx-auto px-5 md:px-6">
          <ol className="flex items-center gap-2 text-xs md:text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-primary-dark">
                Accueil
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="text-foreground/85">Naturopathe à Trooz</li>
          </ol>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-primary-light/20 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-6 text-center">
          <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-primary-dark font-medium mb-3 md:mb-4">
            Rue de Beaufays 17b, 4870 Trooz
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl text-primary-dark leading-[1.05] mb-4">
            Naturopathe à Trooz
          </h1>
          <p className="font-script text-2xl sm:text-3xl md:text-4xl text-accent leading-none mb-6">
            Florence Debattice
          </p>
          <p className="text-base md:text-lg text-foreground/85 leading-relaxed max-w-2xl mx-auto">
            Cabinet de naturopathie au cœur de <strong>Trooz</strong>, à
            quelques minutes de Liège, Chaudfontaine et Verviers.
          </p>
          <div className="mt-7">
            <Link
              href="/prendre-rdv"
              className="inline-block px-7 py-3 bg-primary-dark text-white text-xs tracking-[0.25em] uppercase hover:bg-primary transition-colors"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-6 space-y-5 md:space-y-6 text-base md:text-lg text-foreground/85 leading-[1.75]">
          <p>
            Vous cherchez une <strong>naturopathe à Trooz</strong> ou dans les
            environs ? Bienvenue. Je m&apos;appelle Florence Debattice et je
            vous reçois dans mon cabinet, Rue de Beaufays 17b, pour des
            consultations de naturopathie en toute simplicité, près de chez
            vous.
          </p>
          <p>
            Trooz, c&apos;est ma région — celle où j&apos;ai posé mon cabinet
            pour être au plus près des habitants de la commune et des villages
            voisins : Beaufays, Forêt, La Brouck, Fraipont, Nessonvaux,
            Pepinster, Chaudfontaine ou Fléron. La naturopathie a sa place ici
            comme partout : pour vous aider à mieux dormir, mieux digérer,
            mieux gérer le stress, mieux vivre vos cycles hormonaux et
            retrouver l&apos;énergie qui vous manque.
          </p>
        </div>
      </section>

      {/* CABINET — CARTE */}
      <section className="bg-primary-light/15 py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-5 md:px-6">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-primary-dark leading-none mb-4">
              Le cabinet, à Trooz
            </h2>
            <p className="text-base md:text-lg text-foreground/85 max-w-2xl mx-auto leading-relaxed">
              Rue de Beaufays 17b, 4870 Trooz · parking gratuit aux abords
            </p>
          </div>
          <GoogleMap className="aspect-[16/10] md:aspect-[21/9]" />
        </div>
      </section>

      {/* COMMUNES DESSERVIES */}
      <section className="bg-background py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-6">
          <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-primary-dark text-center leading-none mb-8 md:mb-10">
            Je reçois aussi depuis…
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 text-center text-sm md:text-base text-foreground/85">
            {[
              "Liège (15 min)",
              "Chaudfontaine (10 min)",
              "Fléron (15 min)",
              "Verviers (20 min)",
              "Pepinster (10 min)",
              "Esneux (15 min)",
              "Soumagne (20 min)",
              "Aywaille (25 min)",
              "Spa (25 min)",
              "Beaufays (5 min)",
              "Nessonvaux (5 min)",
              "Fraipont (5 min)",
            ].map((commune) => (
              <div
                key={commune}
                className="bg-card border border-border p-3 md:p-4"
              >
                {commune}
              </div>
            ))}
          </div>
          <p className="text-center text-xs md:text-sm text-muted mt-6">
            Les temps de trajet sont indicatifs depuis le centre de chaque
            commune en voiture.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-primary-light/15 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-primary-dark text-center leading-none mb-10 md:mb-12">
            Questions fréquentes
          </h2>
          <dl className="space-y-6 md:space-y-8">
            {FAQ.map((item) => (
              <div
                key={item.question}
                className="border-l-2 border-primary pl-5 md:pl-6"
              >
                <dt className="font-display text-lg md:text-xl text-primary-dark mb-2 leading-snug">
                  {item.question}
                </dt>
                <dd className="text-sm md:text-base text-foreground/85 leading-[1.7]">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-primary-dark text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-6 text-center">
          <p className="font-script text-3xl sm:text-4xl md:text-5xl text-accent leading-none mb-4">
            Près de chez vous, à Trooz
          </p>
          <p className="text-base md:text-lg text-white/85 leading-relaxed mb-7 max-w-xl mx-auto">
            Réservez votre premier appel découverte gratuit — 30 minutes pour
            faire connaissance et voir si la naturopathie vous correspond.
          </p>
          <Link
            href="/prendre-rdv?service=rendez-vous-informatif"
            className="inline-block px-10 py-4 bg-accent text-primary-dark text-xs tracking-[0.3em] uppercase hover:bg-white transition-colors"
          >
            Réserver mon appel gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
