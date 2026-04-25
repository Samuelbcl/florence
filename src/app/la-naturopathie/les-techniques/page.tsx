import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Les techniques de la naturopathie — Florence Debattice",
  description:
    "Les 10 techniques naturopathiques : alimentation, exercice, gestion du stress, hydrologie, plantes, et plus.",
};

const techniques = [
  {
    title: "Alimentation",
    text: "Première médecine selon Hippocrate. L'analyse de vos habitudes alimentaires permet d'identifier des leviers concrets pour soutenir votre vitalité.",
  },
  {
    title: "Exercice physique",
    text: "Mouvement adapté à votre tempérament et à votre énergie pour favoriser la circulation, l'oxygénation et l'élimination.",
  },
  {
    title: "Psychologie",
    text: "Gestion du stress et des émotions, techniques de respiration, relaxation et reconnexion à soi.",
  },
  {
    title: "Hydrologie",
    text: "L'eau sous toutes ses formes — interne et externe — pour drainer et tonifier l'organisme.",
  },
  {
    title: "Phytologie",
    text: "Usage des plantes : phytothérapie, aromathérapie, gemmothérapie. Des alliées précieuses pour rééquilibrer votre terrain.",
  },
  {
    title: "Réflexologie",
    text: "Stimulation des zones réflexes (plantaire principalement) pour agir sur les organes correspondants.",
  },
  {
    title: "Techniques manuelles",
    text: "Massages bien-être, drainage lymphatique, mobilisations douces.",
  },
  {
    title: "Techniques respiratoires",
    text: "Pratiques de respiration consciente pour oxygéner et apaiser le système nerveux.",
  },
  {
    title: "Techniques énergétiques",
    text: "Magnétisme, lithothérapie, accompagnement énergétique selon les besoins.",
  },
  {
    title: "Techniques vibratoires",
    text: "Lumière, couleurs, sons : leur influence sur l'équilibre global de la personne.",
  },
];

export default function LesTechniques() {
  return (
    <>
      <section className="bg-primary-light/30 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary-dark mb-6">
            La naturopathie
          </p>
          <h1 className="font-display text-5xl md:text-6xl">Les techniques</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-lg text-muted leading-relaxed text-center max-w-3xl mx-auto mb-16">
          La naturopathie s&apos;appuie sur 10 grandes techniques. Le
          naturopathe les associe selon vos besoins, votre terrain et votre
          motif de consultation pour construire un accompagnement
          véritablement personnalisé.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {techniques.map((t, i) => (
            <article
              key={t.title}
              className="bg-card border border-border p-8 flex gap-5"
            >
              <span className="font-display text-3xl text-primary shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl text-primary-dark mb-2">
                  {t.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{t.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
