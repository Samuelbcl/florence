import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pourquoi consulter ? — Florence Debattice",
  description:
    "La naturopathie agit en préventif comme en accompagnement. Découvrez pourquoi et quand consulter une naturopathe.",
};

export default function PourquoiConsulter() {
  return (
    <>
      <section className="bg-primary-light/30 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary-dark mb-6">
            Parce que la naturopathie
          </p>
          <h1 className="font-display text-5xl md:text-6xl mb-4">
            Pourquoi consulter ?
          </h1>
          <p className="text-lg text-muted mt-4">
            Agit en préventif comme en accompagnement
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-lg text-muted leading-relaxed">
          Tout le monde peut consulter un naturopathe, que ce soit pour
          recevoir des conseils en hygiène de vie et en alimentation afin de
          rester en bonne santé, pour accompagner certains troubles chroniques
          de santé ou par simple curiosité. Il n&apos;y a pas de motif de
          consultation plus valable qu&apos;un autre. La naturopathie est une
          approche de terrain qui s&apos;adapte à chaque personne et qui
          procure des conseils totalement individualisés.{" "}
          <strong className="text-foreground">
            N&apos;attendez pas que votre santé se dégrade pour consulter !
          </strong>
        </p>
      </section>

      <section className="bg-card py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-4xl text-center mb-12">
            Un accompagnement pour tous
          </h2>

          <div className="mb-12 bg-background p-8 border border-border">
            <h3 className="font-display text-xl text-primary-dark mb-4">
              Troubles fréquemment accompagnés
            </h3>
            <p className="text-muted leading-relaxed">
              Troubles du sommeil, digestion perturbée, intolérances
              alimentaires, perturbation du bilan sanguin, surpoids, allergies
              respiratoires et alimentaires, migraines, problèmes de peau,
              chutes de cheveux, perturbation hormonale, stress, burn-out,
              dépression, chocs émotionnels, douleurs articulaires, système
              immunitaire fragile, troubles ORL à répétition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Femmes",
                text: "Cycle féminin perturbé, désir d'enfant, grossesse, allaitement, accompagnement de la ménopause.",
              },
              {
                title: "Hommes",
                text: "Désir d'enfant, troubles prostatiques.",
              },
              {
                title: "Personnes âgées",
                text: "Rhumatisme, douleurs articulaires, conseils en alimentation adaptée aux besoins de la personne âgée.",
              },
              {
                title: "Enfants & adolescents",
                text: "Conseils en alimentation équilibrée adaptée à chaque âge, carences, croissance/puberté, allergies.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-background p-6 border border-border"
              >
                <h3 className="font-display text-xl text-primary-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20 space-y-6 text-lg text-muted leading-relaxed">
        <h2 className="font-display text-4xl text-center text-foreground mb-8">
          Pourquoi me consulter ?
        </h2>
        <p>
          À votre écoute pendant plus d&apos;une heure lors de notre première
          consultation, je réalise un bilan global de vitalité dont découle des
          conseils naturopathiques adaptés à votre personnalité, à votre vie
          actuelle, à vos envies et à votre motif de consultation.
        </p>
        <p>
          En tant que naturopathe certifiée par la FENA, je suis soumise au
          secret professionnel et à la confidentialité.
        </p>
        <p>
          Je suis plus particulièrement spécialisée sur l&apos;accompagnement
          des allergies respiratoires et des dérèglements hormonaux chez la
          femme.
        </p>
        <p>
          À votre écoute avec douceur et bienveillance, mon rôle peut
          s&apos;apparenter à un éducateur de santé qui élabore des conseils
          simples et naturels à mettre en œuvre dont le but est de soutenir
          votre santé et votre bien-être. Nous élaborons ensemble un programme
          personnalisé qui porte sur votre alimentation, votre hygiène de vie
          et éventuellement des régulateurs de terrain (compléments
          alimentaires, phytothérapie…).
        </p>
        <p>
          Si nécessaire, je vous proposerai un deuxième RDV dans le cadre
          d&apos;un suivi naturopathique afin de faire le point sur la mise en
          place des conseils, d&apos;ajuster certains et de vous en donner de
          nouveaux en fonction de l&apos;évolution de votre terrain.
        </p>
      </section>

      <section className="bg-primary-light/30 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl text-center mb-8">
            La force vitale
          </h2>
          <div className="space-y-5 text-lg text-muted leading-relaxed">
            <p>
              C&apos;est le capital énergétique dont dispose l&apos;être vivant
              pour maintenir un équilibre propice à la vie. Dans d&apos;autres
              cultures, on parle de Chi (Chine), de Prana (Inde) ou de Pneuma
              chez les Grecs.
            </p>
            <p>
              Il s&apos;agit d&apos;une force vitale qui peut évoluer dans le
              temps et qui dépend de facteurs innés et acquis : hérédité,
              environnement, tempérament hippocratique, hygiène de vie. Nous
              avons tous en nous des capacités d&apos;auto-guérison que nous
              pouvons activer plus ou moins efficacement selon notre terrain.
            </p>
            <p>
              Cette force vitale est sollicitée en permanence dans les
              processus de guérison et d&apos;adaptation. Le naturopathe
              cherche à appréhender le niveau de cette force afin
              d&apos;orienter ses conseils de manière individualisée pour
              chaque personne.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-display text-4xl text-center mb-12">
          Réflexologie plantaire : pour qui ? pourquoi ?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-8 border border-border">
            <h3 className="font-display text-2xl text-primary-dark mb-5">
              Indications
            </h3>
            <ul className="space-y-2 text-muted">
              {[
                "Améliorer un état de stress",
                "Relâcher les tensions nerveuses et musculaires",
                "Apaiser ou activer la sphère digestive",
                "Soutenir le système immunitaire",
                "Réguler les hormones",
                "Éliminer les toxines",
                "Activer la circulation sanguine et lymphatique",
                "Apporter de la détente",
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card p-8 border border-border">
            <h3 className="font-display text-2xl text-primary-dark mb-5">
              Contre-indications
            </h3>
            <ul className="space-y-2 text-muted">
              {[
                "Phlébite ou artérite en phase aigüe",
                "Pied blessé : coupure, foulure, fracture, ecchymose",
                "Premier trimestre de grossesse",
                "Problèmes cardiaques",
                "Maladies dégénératives et immunodépressives",
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-4xl text-center mb-12">
            Témoignages
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Olivia, 45 ans",
                role: "Professeur des Écoles",
                quote:
                  "Sa passion pour son métier et son approche globale et humaine m'ont énormément aidée. Elle a su prendre en compte ma personne dans son ensemble et trouver des solutions personnalisées et efficaces.",
              },
              {
                name: "Michel, 73 ans",
                role: "Retraité",
                quote:
                  "J'avais beaucoup de problèmes digestifs liés à une alimentation pas très adéquate. C'est à présent du passé. À 73 ans, j'ai retrouvé ma forme et un bon sommeil.",
              },
              {
                name: "Soizick, 46 ans",
                role: "Webdesigner",
                quote:
                  "Les plantes, l'alimentation et les bonnes astuces nature n'ont pas de secret. En seulement une séance et en suivant ses conseils, j'ai amélioré mon sommeil et ma digestion.",
              },
            ].map((t) => (
              <blockquote
                key={t.name}
                className="bg-background p-8 border border-border flex flex-col"
              >
                <p className="text-muted italic leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 pt-4 border-t border-border">
                  <p className="font-display text-lg text-primary-dark">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted tracking-wider">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Et vous, quelle sera votre raison de consulter ?
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
