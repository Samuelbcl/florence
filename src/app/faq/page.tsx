import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://flonaturopathie.com";

export const metadata: Metadata = {
  title: "FAQ — Naturopathie à Liège",
  description:
    "Questions fréquentes sur les consultations de naturopathie à Liège : tarifs, remboursement mutuelles belges, déroulé, visio, enfants, grossesse, mutualités.",
  alternates: { canonical: "/faq" },
};

type QA = { question: string; answer: string };
type Category = { title: string; items: QA[] };

const CATEGORIES: Category[] = [
  {
    title: "Avant le rendez-vous",
    items: [
      {
        question: "Comment se déroule un premier rendez-vous de naturopathie ?",
        answer:
          "Le premier rendez-vous d'information est gratuit et dure 30 minutes. C'est l'occasion de faire connaissance, de discuter de vos attentes et de voir si la naturopathie correspond à votre situation. La consultation initiale (payante) dure ensuite environ 1h30 et inclut un bilan vital complet.",
      },
      {
        question: "Faut-il préparer quelque chose avant la consultation ?",
        answer:
          "Idéalement, notez vos antécédents médicaux, les traitements ou compléments que vous prenez, vos habitudes alimentaires et de sommeil sur quelques jours. Apportez aussi vos dernières analyses sanguines si vous en avez. Cela permet d'optimiser le temps de bilan.",
      },
      {
        question: "Combien coûte une consultation à Trooz (Liège) ?",
        answer:
          "Le premier rendez-vous d'information de 30 min est gratuit. La consultation initiale (1h30) est à 80 €. Les consultations de suivi (1h) sont à 65 €. Tarifs identiques en cabinet à Trooz et en visio.",
      },
      {
        question: "Puis-je annuler ou reporter un rendez-vous ?",
        answer:
          "Oui, sans frais, à condition de prévenir au moins 24h à l'avance. Au-delà, la séance reste due.",
      },
    ],
  },
  {
    title: "Naturopathie & médecine",
    items: [
      {
        question: "Quelle est la différence entre naturopathe, nutritionniste et diététicien ?",
        answer:
          "Le diététicien est un professionnel paramédical reconnu, axé principalement sur la nutrition dans un cadre pathologique. Le nutritionniste est généralement un médecin spécialisé. Le naturopathe propose une approche globale : alimentation, hygiène de vie, gestion du stress, sommeil, phytothérapie, terrain énergétique. La naturopathie agit en prévention et en accompagnement, jamais en remplacement de la médecine conventionnelle.",
      },
      {
        question: "Puis-je consulter en complément d'un suivi médical ?",
        answer:
          "Tout à fait, c'est même fortement recommandé. La naturopathie s'intègre en complément de votre suivi médical traditionnel. Elle ne remplace ni un diagnostic, ni un traitement médical. Continuez vos traitements et tenez-moi informée des évolutions.",
      },
      {
        question: "La naturopathie peut-elle aider en cas de maladie chronique ?",
        answer:
          "Oui, en complément du suivi médical, la naturopathie peut soutenir le terrain et améliorer la qualité de vie dans le cadre de pathologies chroniques (fatigue chronique, troubles digestifs, endométriose, SOPK, etc.). Toujours en concertation avec votre médecin traitant.",
      },
      {
        question: "La naturopathie a-t-elle des contre-indications ?",
        answer:
          "Certaines plantes ou approches peuvent interagir avec des traitements médicaux ou être déconseillées dans certaines pathologies (grossesse, troubles thyroïdiens, troubles cardiaques...). Je tiens toujours compte de vos antécédents et de vos traitements avant toute recommandation.",
      },
    ],
  },
  {
    title: "Mutuelles & remboursement en Belgique",
    items: [
      {
        question: "La naturopathie est-elle remboursée par les mutuelles belges ?",
        answer:
          "Plusieurs mutuelles belges proposent un remboursement partiel des consultations de naturopathie via leur assurance complémentaire. Les conditions et montants varient. Renseignez-vous auprès de votre mutuelle (Mutualité chrétienne, Solidaris, Partenamut, Mutualia, Mutualité libérale, etc.).",
      },
      {
        question: "Recevez-vous une attestation pour la mutuelle ?",
        answer:
          "Oui, je remets une attestation de soins après chaque consultation. Vous la transmettez à votre mutuelle qui appliquera le remboursement prévu par votre formule d'assurance complémentaire.",
      },
      {
        question: "Mon assurance hospitalisation couvre-t-elle la naturopathie ?",
        answer:
          "Non. La naturopathie relève généralement de l'assurance complémentaire santé et non de l'assurance hospitalisation. Vérifiez les conditions de votre mutuelle.",
      },
    ],
  },
  {
    title: "Pour qui ?",
    items: [
      {
        question: "Recevez-vous les enfants et les adolescents ?",
        answer:
          "Oui. La naturopathie est adaptée aux enfants et adolescents (alimentation, sommeil, croissance, immunité, troubles ORL à répétition, gestion du stress scolaire). La consultation se fait avec l'accord et la présence d'un parent.",
      },
      {
        question: "Puis-je consulter pendant la grossesse ou en allaitement ?",
        answer:
          "Oui, mais avec des précautions particulières (certaines plantes, huiles essentielles et compléments sont contre-indiqués). Je suis formée pour adapter mes recommandations à ces périodes physiologiques particulières.",
      },
      {
        question: "La naturopathie convient-elle pour la périménopause et la ménopause ?",
        answer:
          "Absolument. C'est une période où la naturopathie a beaucoup à offrir : équilibre hormonal, gestion des bouffées de chaleur, sommeil, humeur, vitalité, prévention de l'ostéoporose. Approche globale, sans hormones de substitution.",
      },
      {
        question: "Accompagnez-vous les troubles du cycle féminin (SOPK, endométriose) ?",
        answer:
          "Oui, c'est une de mes spécialisations. Cycle irrégulier, syndrome prémenstruel important, SOPK, endométriose, désir d'enfant : la naturopathie apporte des outils complémentaires concrets pour soutenir l'équilibre hormonal et la qualité de vie.",
      },
    ],
  },
  {
    title: "Cabinet & visio",
    items: [
      {
        question: "Où se trouve votre cabinet ?",
        answer:
          "Rue de Beaufays 17b, 4870 Trooz, en province de Liège — à 15 minutes du centre de Liège, facilement accessible depuis Verviers, Chaudfontaine, Fléron, Pepinster et Esneux.",
      },
      {
        question: "Y a-t-il du parking ?",
        answer:
          "Oui, stationnement gratuit aux abords directs du cabinet.",
      },
      {
        question: "Quels sont les horaires du cabinet ?",
        answer:
          "Le cabinet est ouvert le lundi et le mercredi de 11h à 19h30. Pour les autres jours, des consultations en visioconférence sont possibles.",
      },
      {
        question: "Comment se passe une consultation en visio ?",
        answer:
          "La consultation en visio se déroule comme en cabinet, par lien sécurisé (Zoom, Google Meet ou autre selon votre préférence). Vous recevez le lien à l'avance par email. Mêmes outils de bilan, mêmes recommandations, à distance.",
      },
    ],
  },
  {
    title: "Paiement & pratique",
    items: [
      {
        question: "Quels moyens de paiement acceptez-vous ?",
        answer:
          "Espèces, Bancontact en cabinet, et virement bancaire pour les consultations en visio. Une attestation de soins vous est remise pour votre mutuelle.",
      },
      {
        question: "Faut-il acheter des compléments alimentaires ?",
        answer:
          "Non, ce n'est jamais obligatoire. Mes recommandations portent d'abord sur l'alimentation et l'hygiène de vie. Si des compléments alimentaires ou des plantes sont pertinents pour votre situation, je vous oriente vers des produits de qualité, sans intérêt commercial de ma part.",
      },
      {
        question: "Combien de séances de suivi sont nécessaires ?",
        answer:
          "Cela dépend de votre situation. En général, on prévoit une consultation de suivi 4 à 6 semaines après le bilan initial pour ajuster les conseils. Ensuite, le rythme est libre — certaines personnes reviennent une fois par trimestre, d'autres ponctuellement.",
      },
      {
        question: "Comment prendre rendez-vous ?",
        answer:
          "Directement en ligne via la page Prendre rendez-vous du site, qui vous permet de choisir le créneau qui vous convient le mieux. Ou par email à contact@flonaturopathie.com pour toute question préalable.",
      },
    ],
  },
];

export default function FAQPage() {
  const allQAs = CATEGORIES.flatMap((c) => c.items);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allQAs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav className="bg-background pt-6 md:pt-8" aria-label="Fil d'Ariane">
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          <ol className="flex items-center gap-2 text-xs md:text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-primary-dark">
                Accueil
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="text-foreground/85">FAQ</li>
          </ol>
        </div>
      </nav>

      <section className="bg-primary-light/20 py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-6 text-center">
          <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-primary-dark font-medium mb-3 md:mb-4">
            Toutes les réponses
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl text-primary-dark leading-[1.05] mb-3">
            Questions fréquentes
          </h1>
          <p className="font-script text-2xl sm:text-3xl md:text-4xl text-accent leading-none mb-6">
            tout savoir avant de venir
          </p>
          <p className="text-base md:text-lg text-foreground/85 leading-relaxed max-w-2xl mx-auto">
            Les réponses aux questions les plus fréquentes sur les
            consultations de naturopathie à Trooz et en visio.
          </p>
        </div>
      </section>

      <section className="bg-background py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-6 space-y-12 md:space-y-16">
          {CATEGORIES.map((cat) => (
            <div key={cat.title}>
              <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-primary-dark mb-6 md:mb-8 leading-none">
                {cat.title}
              </h2>
              <dl className="space-y-6 md:space-y-7">
                {cat.items.map((item) => (
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
          ))}
        </div>
      </section>

      <section className="bg-primary-dark text-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-6 text-center">
          <p className="font-script text-3xl sm:text-4xl md:text-5xl text-accent leading-none mb-3">
            Une question pas dans la liste ?
          </p>
          <p className="text-base md:text-lg text-white/85 leading-relaxed mb-7 max-w-md mx-auto">
            Réservez votre premier appel découverte gratuit ou écrivez-moi.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/prendre-rdv?service=rendez-vous-informatif"
              className="inline-block px-8 py-4 bg-accent text-primary-dark text-xs tracking-[0.3em] uppercase hover:bg-white transition-colors"
            >
              Appel découverte gratuit
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 border border-white/30 text-white text-xs tracking-[0.3em] uppercase hover:bg-white/10 transition-colors"
            >
              M&apos;écrire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
