import type { Metadata } from "next";
import Link from "next/link";
import {
  IconChild,
  IconCouple,
  IconElderly,
  IconMan,
  IconWoman,
} from "../../components/PersonIcons";

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
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <IconCouple className="w-16 h-16 mx-auto mb-6" />
            <h2 className="font-script text-5xl md:text-6xl text-foreground leading-none">
              un accompagnement pour tous
            </h2>
          </div>

          <div className="mb-16 max-w-3xl mx-auto text-center">
            <p className="text-foreground/85 leading-[1.9]">
              Sommeil, digestion, intolérances alimentaires, surpoids,
              allergies, migraines, problèmes de peau, chutes de cheveux,
              perturbations hormonales, stress, burn-out, chocs émotionnels,
              douleurs articulaires, système immunitaire fragile, troubles
              ORL à répétition…
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {[
              {
                Icon: IconWoman,
                title: "femmes",
                text: "Cycle perturbé, désir d'enfant, grossesse, allaitement, ménopause.",
              },
              {
                Icon: IconMan,
                title: "hommes",
                text: "Désir d'enfant, troubles prostatiques, vitalité.",
              },
              {
                Icon: IconElderly,
                title: "personnes âgées",
                text: "Rhumatismes, douleurs articulaires, alimentation adaptée.",
              },
              {
                Icon: IconChild,
                title: "enfants, adolescents",
                text: "Alimentation équilibrée, carences, croissance, allergies.",
              },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="text-center">
                <Icon className="w-20 h-20 mx-auto mb-5" />
                <h3 className="font-script text-3xl md:text-4xl text-foreground mb-4 leading-none">
                  {title}
                </h3>
                <p className="text-sm text-foreground/75 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20 space-y-6 text-lg text-foreground/85 leading-[1.8]">
        <h2 className="font-script text-5xl md:text-6xl text-center text-foreground mb-10 leading-none">
          pourquoi me consulter ?
        </h2>
        <p>
          À votre écoute pendant plus d&apos;une heure lors de notre première
          consultation, je réalise un bilan global de vitalité dont découle des
          conseils naturopathiques adaptés à votre personnalité, à votre vie
          actuelle, à vos envies et à votre motif de consultation.
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
