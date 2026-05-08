export type Prestation = {
  slug: string;
  title: string;
  short: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  /**
   * Lien Cal.com vers le créneau correspondant. Format attendu :
   *   "https://cal.com/florence-debattice/{event-slug}"
   * (ou ce que ta mère choisira comme username Cal.com)
   *
   * Quand le compte Cal.com est créé, remplace simplement chaque URL ci-dessous.
   * Pour le moment, le lien renvoie vers /prendre-rdv?service=slug.
   */
  bookingUrl: string;
};

// 👉 PLACEHOLDER : remplacer par les vrais liens Cal.com une fois le compte créé.
// Voir le README pour la marche à suivre (création compte, event types, etc.).
const CAL_USER = "d-b-concept-pv3owe";

export const prestations: Prestation[] = [
  {
    slug: "rendez-vous-informatif",
    title: "Rendez-vous informatif",
    short:
      "Premier échange gratuit pour faire connaissance et répondre à vos questions.",
    description:
      "Vous hésitez à franchir le pas ? Vous avez des questions sur la naturopathie ou sur ma façon de travailler ? Ce rendez-vous informatif gratuit est fait pour vous. En 30 minutes, nous prenons le temps de faire connaissance, de discuter de votre situation et de voir ensemble si un accompagnement vous correspondrait. Aucun engagement, juste un moment d'échange.",
    price: "Gratuit",
    duration: "30 min",
    image: "/presta-rdv-informatif.png",
    bookingUrl: `https://cal.com/${CAL_USER}/rdv-informatif`,
  },
  {
    slug: "consultation-initiale-en-ligne",
    title: "Consultation initiale en ligne",
    short:
      "Premier rendez-vous en visioconférence pour un bilan global et des conseils personnalisés.",
    description:
      "Lors de cette première consultation à distance, je vous accompagne pendant 1h30 en visioconférence. Nous prenons le temps d'explorer ensemble votre santé, vos habitudes de vie, votre alimentation, votre sommeil et vos émotions. À l'issue de cet échange, je vous propose un programme personnalisé reposant sur trois piliers : hygiène vitale, alimentation et régulateurs naturels si besoin. Idéal si vous habitez loin du cabinet ou si vous préférez le confort de chez vous.",
    price: "80 €",
    duration: "90 min",
    image: "/presta-online-initiale.png",
    bookingUrl: `https://cal.com/${CAL_USER}/consultation-initiale-en-ligne`,
  },
  {
    slug: "consultation-suivi-en-ligne",
    title: "Consultation de suivi en ligne",
    short:
      "Rendez-vous de suivi en visioconférence pour ajuster votre programme.",
    description:
      "Cette consultation de suivi en ligne permet de faire le point sur la mise en place de vos conseils, d'ajuster votre programme en fonction de votre évolution et de répondre à vos questions. Un moment précieux pour ancrer les changements dans votre quotidien et continuer à avancer sur le chemin de votre santé.",
    price: "65 €",
    duration: "60 min",
    image: "/presta-online-suivi.png",
    bookingUrl: `https://cal.com/${CAL_USER}/consultation-suivi-en-ligne`,
  },
  {
    slug: "consultation-initiale-cabinet",
    title: "Consultation initiale au cabinet",
    short:
      "Premier rendez-vous au cabinet pour un bilan global en présentiel.",
    description:
      "Au cabinet, nous prenons le temps d'un échange humain et chaleureux. Pendant 1h30, je réalise une anamnèse complète : santé, événements clés de vie, sommeil, alimentation, émotions. Vous repartez avec un programme personnalisé et concret à mettre en œuvre, organisé autour de l'hygiène vitale, l'alimentation et les régulateurs naturels.",
    price: "80 €",
    duration: "90 min",
    image: "/presta-cabinet-initiale.png",
    bookingUrl: `https://cal.com/${CAL_USER}/consultation-initiale-cabinet`,
  },
  {
    slug: "consultation-suivi-cabinet",
    title: "Consultation de suivi au cabinet",
    short:
      "Rendez-vous de suivi au cabinet pour ajuster votre accompagnement.",
    description:
      "Au cabinet, nous faisons le point sur la mise en place des conseils du précédent rendez-vous. J'ajuste votre programme en fonction de votre évolution, de vos sensations et de l'évolution de votre terrain. C'est aussi un moment pour aborder de nouveaux sujets si besoin et continuer l'accompagnement en profondeur.",
    price: "65 €",
    duration: "60 min",
    image: "/presta-cabinet-suivi.png",
    bookingUrl: `https://cal.com/${CAL_USER}/consultation-suivi-cabinet`,
  },
];

export function getPrestation(slug: string): Prestation | undefined {
  return prestations.find((p) => p.slug === slug);
}
