import type { Metadata } from "next";
import Link from "next/link";
import GoogleMap from "../../components/GoogleMap";

const SITE_URL = "https://flonaturopathie.com";

export const metadata: Metadata = {
  title: "Naturopathe à Liège — Florence Debattice",
  description:
    "Naturopathe à Liège : Florence Debattice vous accompagne depuis son cabinet à Trooz, à 15 min du centre. Consultations en cabinet ou en visio pour toute la Wallonie.",
  alternates: { canonical: "/naturopathe-liege" },
};

const FAQ = [
  {
    question: "Comment se déroule une première consultation de naturopathie à Liège ?",
    answer:
      "La première consultation dure environ 1h30. Elle commence par un bilan global de votre vitalité : antécédents, alimentation, sommeil, gestion du stress, digestion, cycle hormonal, énergie au quotidien. À l'issue, je vous remets un programme personnalisé en hygiène de vie, nutrition et, si besoin, en phytothérapie ou aromathérapie. Le cabinet est à Trooz, à 15 minutes du centre de Liège.",
  },
  {
    question: "La naturopathie est-elle remboursée par les mutuelles belges ?",
    answer:
      "Plusieurs mutuelles belges (Mutualité chrétienne, Solidaris, Partenamut, Mutualia, Mutualité libérale...) proposent un remboursement partiel des séances de naturopathie dans le cadre de leur assurance complémentaire. Le montant et les conditions varient selon votre mutuelle et votre formule. Je vous remets une attestation de soins après chaque consultation à présenter à votre mutuelle.",
  },
  {
    question: "Quelle est la différence entre un naturopathe et un nutritionniste ou un diététicien ?",
    answer:
      "Le diététicien est un professionnel paramédical reconnu qui élabore des plans alimentaires, souvent dans un cadre pathologique précis. La naturopathie est une approche globale : elle inclut l'alimentation mais aussi l'hygiène de vie, la gestion du stress, le sommeil, la phytothérapie, le terrain énergétique de la personne. Le naturopathe agit en prévention et en complément de la médecine conventionnelle, jamais en remplacement.",
  },
  {
    question: "Puis-je consulter une naturopathe à Liège en visio si je ne peux pas me déplacer à Trooz ?",
    answer:
      "Oui. Je propose des consultations en visioconférence pour les personnes situées dans toute la Wallonie et la Belgique qui ne peuvent pas se déplacer au cabinet de Trooz. Le déroulé est identique à une consultation en cabinet, avec les mêmes outils de bilan et de suivi.",
  },
  {
    question: "Quels motifs de consultation traitez-vous ?",
    answer:
      "Stress, burn-out, troubles du sommeil, digestion difficile, intolérances alimentaires, allergies, migraines, perturbations hormonales (cycle, ménopause, SOPK), endométriose, fatigue chronique, problèmes de peau, perte de cheveux, surpoids, immunité fragile, troubles ORL, accompagnement préconceptionnel et grossesse... La naturopathie agit sur le terrain de la personne, pas sur un symptôme isolé.",
  },
  {
    question: "Combien coûte une consultation de naturopathie à Liège ?",
    answer:
      "Le premier rendez-vous d'information (30 min) est gratuit pour faire connaissance et déterminer si la naturopathie correspond à vos attentes. La consultation initiale (1h30) est à 80 €. Les consultations de suivi (1h) sont à 65 €. Tarifs identiques en cabinet à Trooz et en visio.",
  },
];

export default function NaturopatheLiegePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Naturopathe à Liège",
        item: `${SITE_URL}/naturopathe-liege`,
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

      {/* BREADCRUMB visuel */}
      <nav className="bg-background pt-6 md:pt-8" aria-label="Fil d'Ariane">
        <div className="max-w-5xl mx-auto px-5 md:px-6">
          <ol className="flex items-center gap-2 text-xs md:text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-primary-dark">
                Accueil
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="text-foreground/85">Naturopathe à Liège</li>
          </ol>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-primary-light/20 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-6 text-center">
          <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-primary-dark font-medium mb-3 md:mb-4">
            Province de Liège · Wallonie
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl text-primary-dark leading-[1.05] mb-4">
            Naturopathe à Liège
          </h1>
          <p className="font-script text-2xl sm:text-3xl md:text-4xl text-accent leading-none mb-6">
            Florence Debattice
          </p>
          <p className="text-base md:text-lg text-foreground/85 leading-relaxed max-w-2xl mx-auto">
            Cabinet à <strong>Trooz</strong> (à 15 min du centre de{" "}
            <strong>Liège</strong>), consultations en cabinet ou en visio pour
            toute la <strong>Wallonie</strong> et la Belgique.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/prendre-rdv"
              className="inline-block px-7 py-3 bg-primary-dark text-white text-xs tracking-[0.25em] uppercase hover:bg-primary transition-colors"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="/prendre-rdv?service=rendez-vous-informatif"
              className="inline-block px-7 py-3 border border-primary-dark text-primary-dark text-xs tracking-[0.25em] uppercase hover:bg-primary-dark hover:text-white transition-colors"
            >
              Appel découverte gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-6 space-y-5 md:space-y-6 text-base md:text-lg text-foreground/85 leading-[1.75]">
          <p>
            Vous cherchez une <strong>naturopathe à Liège</strong> pour
            retrouver votre équilibre, soutenir votre vitalité et reprendre
            confiance dans votre corps ? Vous êtes au bon endroit. Je
            m&apos;appelle Florence Debattice, je suis naturopathe certifiée et
            j&apos;accompagne depuis mon cabinet à <strong>Trooz</strong> les
            femmes, les hommes, les enfants et les adolescents de la{" "}
            <strong>province de Liège</strong> qui souhaitent prendre soin
            d&apos;eux autrement.
          </p>
          <p>
            La naturopathie est une approche globale et naturelle de la santé,
            fondée sur les principes hippocratiques. Elle considère
            l&apos;être humain dans sa totalité — physique, émotionnel,
            environnemental — pour soutenir ses capacités naturelles
            d&apos;équilibre et d&apos;auto-régulation. À Liège comme ailleurs,
            la naturopathie agit toujours en <strong>prévention</strong> et en{" "}
            <strong>complément</strong> de la médecine conventionnelle, jamais
            en remplacement.
          </p>
        </div>
      </section>

      {/* MOTIFS DE CONSULTATION */}
      <section className="bg-primary-light/15 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-6">
          <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-primary-dark mb-8 md:mb-10 text-center leading-none">
            Pour quels motifs me consulter à Liège ?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 text-sm md:text-base text-foreground/85">
            {[
              ["Stress, burn-out, anxiété", "Cortisol, sommeil, hygiène mentale, plantes adaptogènes."],
              ["Sommeil perturbé", "Difficultés d'endormissement, réveils nocturnes, fatigue au réveil."],
              ["Digestion difficile", "Ballonnements, transit, intolérances, microbiote."],
              ["Santé hormonale féminine", "Cycle, SOPK, endométriose, périménopause, ménopause, fertilité."],
              ["Fatigue chronique", "Soutien des surrénales, micronutrition, terrain énergétique."],
              ["Immunité fragile", "Infections ORL à répétition, allergies saisonnières."],
              ["Perte de poids durable", "Approche métabolique sans frustration ni régime restrictif."],
              ["Accompagnement préconceptionnel", "Préparation à la grossesse, qualité ovocytaire et spermatique."],
            ].map(([titre, desc]) => (
              <div
                key={titre}
                className="bg-card p-5 md:p-6 border border-border"
              >
                <h3 className="font-display text-lg md:text-xl text-primary-dark mb-2 leading-snug">
                  {titre}
                </h3>
                <p className="leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROCHE */}
      <section className="bg-background py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-6 space-y-5 text-base md:text-lg text-foreground/85 leading-[1.75]">
          <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-primary-dark mb-6 leading-none text-center">
            Mon approche naturopathique
          </h2>
          <p>
            Ma pratique repose sur deux piliers :{" "}
            <strong>l&apos;empathie</strong> — comprendre comment votre corps
            et votre esprit interagissent, sans jugement — et{" "}
            <strong>la bienveillance</strong> — vous proposer des solutions
            concrètes et adaptées pour améliorer votre vitalité durablement.
          </p>
          <p>
            Lors de notre première rencontre, je prends plus d&apos;une heure
            pour réaliser votre <strong>bilan vital</strong> : antécédents,
            alimentation, sommeil, stress, hygiène de vie, terrain énergétique.
            À partir de ce bilan, j&apos;élabore avec vous un programme
            personnalisé qui peut inclure des conseils en nutrition, en
            hygiène de vie, en phytothérapie, en aromathérapie ou en
            micronutrition. Le but : que vous repartiez avec des outils
            concrets, simples à mettre en place, et qui font sens pour vous.
          </p>
          <blockquote className="font-display text-xl md:text-2xl text-accent italic text-center my-8">
            « La santé est un voyage universel, propre à chacun. »
          </blockquote>
        </div>
      </section>

      {/* CABINET TROOZ — CARTE */}
      <section className="bg-primary-light/15 py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-5 md:px-6">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary-dark font-medium mb-3">
              Le cabinet
            </p>
            <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-primary-dark leading-none mb-4">
              À Trooz, à 15 min du centre de Liège
            </h2>
            <p className="text-base md:text-lg text-foreground/85 max-w-2xl mx-auto leading-relaxed">
              Le cabinet est situé Rue de Beaufays 17b, 4870 Trooz —
              facilement accessible depuis Liège, Verviers, Chaudfontaine,
              Fléron et Esneux.
            </p>
          </div>
          <GoogleMap className="aspect-[16/10] md:aspect-[21/9]" />
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mt-8 text-sm md:text-base text-foreground/85">
            <div className="bg-card p-5 border border-border">
              <h3 className="font-display text-base text-primary-dark mb-2">
                Depuis Liège-centre
              </h3>
              <p>
                15 min en voiture via la N61 ou la E25 (sortie Chaudfontaine).
              </p>
            </div>
            <div className="bg-card p-5 border border-border">
              <h3 className="font-display text-base text-primary-dark mb-2">
                Depuis Verviers
              </h3>
              <p>20 min via la E42, sortie Pepinster ou Chaudfontaine.</p>
            </div>
            <div className="bg-card p-5 border border-border">
              <h3 className="font-display text-base text-primary-dark mb-2">
                Horaires
              </h3>
              <p>Lundi et mercredi, de 11h à 19h30.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-14 md:py-20">
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
            Prête à reprendre votre vitalité ?
          </p>
          <p className="text-base md:text-lg text-white/85 leading-relaxed mb-7 max-w-xl mx-auto">
            Le premier rendez-vous d&apos;information (30 min) est gratuit.
            On fait connaissance, on parle de vos attentes et on voit si la
            naturopathie vous correspond — sans engagement.
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
