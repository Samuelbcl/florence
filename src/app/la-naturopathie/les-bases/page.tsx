import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Les bases de la naturopathie — Florence Debattice",
  description:
    "Définition, principes fondamentaux et concepts clés de la naturopathie.",
};

export default function LesBases() {
  return (
    <>
      <section className="bg-primary-light/30 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary-dark mb-6">
            La naturopathie
          </p>
          <h1 className="font-display text-5xl md:text-6xl">Les bases</h1>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-6 py-20 space-y-10 text-muted leading-relaxed text-lg">
        <section>
          <h2 className="font-display text-3xl text-foreground mb-4">
            Définition
          </h2>
          <p>
            La naturopathie est une médecine traditionnelle reconnue par
            l&apos;Organisation Mondiale de la Santé. Elle vise à préserver et
            optimiser la santé globale de l&apos;individu par des moyens
            naturels. Ce n&apos;est pas une médecine de la maladie, mais une
            médecine de la santé : elle agit en complément de la médecine
            allopathique, jamais en substitution.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-foreground mb-4">
            Une vision holistique
          </h2>
          <p>
            Le naturopathe considère la personne dans sa globalité — physique,
            émotionnelle, énergétique, environnementale. Il cherche à
            comprendre les causes profondes des déséquilibres plutôt que de
            traiter uniquement les symptômes. Chaque accompagnement est donc
            unique, élaboré sur-mesure à partir d&apos;un bilan complet de
            votre vitalité.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-foreground mb-4">
            La force vitale
          </h2>
          <p>
            C&apos;est le capital énergétique dont dispose l&apos;être vivant
            pour maintenir un équilibre propice à la vie. Dans d&apos;autres
            cultures, on parle de Chi (Chine), de Prana (Inde) ou de Pneuma
            chez les Grecs. Cette force vitale peut évoluer dans le temps et
            dépend de facteurs innés et acquis : hérédité, environnement,
            tempérament, hygiène de vie.
          </p>
          <p>
            Nous avons tous en nous des capacités d&apos;auto-guérison. Le
            naturopathe cherche à appréhender le niveau de votre force vitale
            afin d&apos;orienter ses conseils de manière individualisée.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-foreground mb-4">
            Les principes hippocratiques
          </h2>
          <ul className="space-y-3 list-none">
            {[
              { t: "Primum non nocere", d: "D'abord ne pas nuire." },
              { t: "Vis medicatrix naturae", d: "La nature est guérisseuse." },
              { t: "Tolle causam", d: "Identifier et traiter la cause." },
              { t: "Deinde purgare", d: "Détoxifier et purifier l'organisme." },
              { t: "Docere", d: "Le naturopathe est un éducateur de santé." },
            ].map((p) => (
              <li key={p.t} className="pl-6 border-l-2 border-primary">
                <strong className="text-foreground font-display text-xl block">
                  {p.t}
                </strong>
                <span className="text-base">{p.d}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
