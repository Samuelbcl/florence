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
      {/* HERO photo, header transparent en haut, titre centré */}
      <section className="relative -mt-[100px] min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-left md:bg-center"
          style={{
            backgroundImage: "url('/hero-pourquoi-consulter.png')",
          }}
        />
        <div className="absolute inset-0 bg-background/70 md:bg-gradient-to-t md:from-background/60 md:via-background/20 md:to-background/40" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 md:px-12 pt-[90px] md:pt-[100px] pb-10 text-center">
          <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase mb-3 md:mb-4 text-primary-dark font-medium">
            Parce que la naturopathie
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl text-primary-dark leading-[1.05] mb-3">
            Pourquoi consulter ?
          </h1>
          <p className="font-script text-2xl sm:text-3xl md:text-4xl text-accent leading-none">
            Agit en préventif comme en accompagnement
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-6 py-12 md:py-20">
        <p className="text-base md:text-lg text-foreground/85 leading-[1.7] md:leading-[1.8]">
          Tout le monde peut consulter un naturopathe, que ce soit pour
          recevoir des{" "}
          <strong className="text-primary-dark font-bold">
            conseils en hygiène de vie et en alimentation
          </strong>{" "}
          afin de rester en bonne santé, pour accompagner certains{" "}
          <strong className="text-primary-dark font-bold">
            troubles chroniques
          </strong>{" "}
          de santé ou par simple curiosité. Il n&apos;y a pas de motif de
          consultation plus valable qu&apos;un autre. La naturopathie est une{" "}
          <strong className="text-primary-dark font-bold">
            approche de terrain
          </strong>{" "}
          qui s&apos;adapte à chaque personne et qui procure des{" "}
          <strong className="text-primary-dark font-bold">
            conseils totalement individualisés
          </strong>
          .{" "}
          <strong className="text-primary-dark font-bold">
            N&apos;attendez pas que votre santé se dégrade pour consulter !
          </strong>
        </p>
      </section>

      <section className="bg-card py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <IconCouple className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-5 md:mb-6" />
            <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-primary-dark leading-none">
              Un accompagnement pour tous
            </h2>
          </div>

          <div className="mb-10 md:mb-16 max-w-3xl mx-auto text-center">
            <p className="text-sm md:text-base text-foreground/85 leading-[1.7] md:leading-[1.9]">
              <strong className="text-primary-dark font-bold">Sommeil</strong>
              ,{" "}
              <strong className="text-primary-dark font-bold">digestion</strong>
              , intolérances alimentaires, surpoids,{" "}
              <strong className="text-primary-dark font-bold">
                allergies
              </strong>
              , migraines, problèmes de peau, chutes de cheveux, perturbations
              hormonales,{" "}
              <strong className="text-primary-dark font-bold">
                stress, burn-out
              </strong>
              ,{" "}
              <strong className="text-primary-dark font-bold">
                chocs émotionnels
              </strong>
              , douleurs articulaires,{" "}
              <strong className="text-primary-dark font-bold">
                système immunitaire fragile
              </strong>
              , troubles ORL à répétition…
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-7 md:gap-10">
            {[
              {
                Icon: IconWoman,
                title: "femmes",
                text: "Cycle perturbé, désir d'enfant, grossesse, allaitement, ménopause, gestion du stress.",
              },
              {
                Icon: IconMan,
                title: "hommes",
                text: "Désir d'enfant, troubles prostatiques, vitalité, gestion du stress.",
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
              <div key={title} className="text-center flex flex-col">
                <Icon className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-5" />
                <h3 className="font-script text-2xl sm:text-3xl md:text-4xl text-accent mb-3 md:mb-4 leading-tight min-h-[2.5em] flex items-center justify-center">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 md:px-6 py-12 md:py-20 space-y-5 md:space-y-6 text-base md:text-lg text-foreground/85 leading-[1.7] md:leading-[1.8]">
        <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-center text-primary-dark mb-8 md:mb-10 leading-none">
          Pourquoi me consulter ?
        </h2>
        <p>
          À votre écoute pendant{" "}
          <strong className="text-primary-dark font-bold">
            plus d&apos;une heure
          </strong>{" "}
          lors de notre première consultation, je réalise un{" "}
          <strong className="text-primary-dark font-bold">
            bilan global de vitalité
          </strong>{" "}
          dont découle des conseils naturopathiques adaptés à votre
          personnalité, à votre vie actuelle, à vos envies et à votre motif de
          consultation.
        </p>
        <p>
          À votre écoute avec{" "}
          <strong className="text-primary-dark font-bold">
            douceur et bienveillance
          </strong>
          , mon rôle peut s&apos;apparenter à un{" "}
          <strong className="text-primary-dark font-bold">
            éducateur de santé
          </strong>{" "}
          qui élabore des conseils simples et naturels à mettre en œuvre dont
          le but est de soutenir votre santé et votre bien-être. Nous élaborons
          ensemble un{" "}
          <strong className="text-primary-dark font-bold">
            programme personnalisé
          </strong>{" "}
          qui porte sur votre alimentation, votre hygiène de vie et
          éventuellement des régulateurs de terrain (compléments alimentaires,
          phytothérapie…).
        </p>
        <p>
          Si nécessaire, je vous proposerai un{" "}
          <strong className="text-primary-dark font-bold">
            deuxième RDV
          </strong>{" "}
          dans le cadre d&apos;un suivi naturopathique afin de faire le point
          sur la mise en place des conseils, d&apos;ajuster certains et de vous
          en donner de nouveaux en fonction de l&apos;évolution de votre
          terrain.
        </p>
      </section>

      <section className="bg-primary text-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-5 md:mb-6">
            Et vous, quelle sera votre raison de consulter ?
          </h2>
          <Link
            href="/prendre-rdv"
            className="inline-block px-7 py-3.5 md:px-8 md:py-4 bg-white text-primary-dark text-xs tracking-[0.2em] uppercase hover:bg-accent hover:text-white transition-colors"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </>
  );
}
