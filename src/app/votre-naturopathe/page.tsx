import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSiteSettings } from "../../lib/settings";

const SITE_URL = "https://flonaturopathie.com";

export const metadata: Metadata = {
  title: "Qui suis-je ? — Naturopathe à Liège",
  description:
    "Florence Debattice, naturopathe certifiée à Trooz (Liège). Découvrez son parcours : de la rigueur des chiffres à l'accompagnement humain, en Wallonie et en ligne.",
  alternates: { canonical: "/votre-naturopathe" },
};

export default async function VotreNaturopathe() {
  const settings = await getSiteSettings();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}#florence`,
    name: "Florence Debattice",
    givenName: "Florence",
    familyName: "Debattice",
    jobTitle: "Naturopathe",
    description:
      "Naturopathe certifiée à Trooz (province de Liège). Spécialisée en santé hormonale féminine, hygiène de vie, nutrition et accompagnement global.",
    url: `${SITE_URL}/votre-naturopathe`,
    image: `${SITE_URL}/portrait-florence.png`,
    email: settings.email,
    telephone: settings.phone,
    worksFor: {
      "@id": `${SITE_URL}#localbusiness`,
    },
    knowsAbout: [
      "Naturopathie",
      "Hygiène de vie",
      "Nutrition",
      "Phytothérapie",
      "Aromathérapie",
      "Santé hormonale féminine",
      "Gestion du stress",
      "Bilan vital",
    ],
    knowsLanguage: ["fr", "fr-BE"],
    areaServed: [
      { "@type": "City", name: "Trooz" },
      { "@type": "City", name: "Liège" },
      { "@type": "AdministrativeArea", name: "Province de Liège" },
      { "@type": "AdministrativeArea", name: "Wallonie" },
    ],
    sameAs: [settings.facebookUrl, settings.instagramUrl].filter(Boolean),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* HERO photo (objets à gauche), titre à droite, passe derrière le header transparent */}
      <section className="relative -mt-[100px] min-h-[400px] md:min-h-[520px] flex items-center overflow-hidden">
        <Image
          src="/hero-naturopathe.png"
          alt="Florence Debattice — Naturopathe à Trooz, province de Liège"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_75%]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background/60 via-background/20 to-transparent md:from-background/50 md:via-background/15" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-12 pt-[90px] md:pt-[100px] pb-10">
          <div className="md:ml-auto md:max-w-md text-center">
            <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase mb-3 md:mb-4 text-primary-dark font-medium">
              Naturopathe à Liège · Trooz
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl text-primary-dark leading-[1.05] mb-3">
              Qui suis-je ?
            </h1>
            <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
              Florence Debattice, votre naturopathe à Trooz dans la province
              de Liège.
            </p>
          </div>
        </div>
      </section>

      {/* PORTRAIT + TOURNANT — un seul cadre, photo à droite */}
      <section className="bg-background py-12 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-6">
          <div className="relative grid md:grid-cols-12 md:gap-0 items-center">
            {/* Photo à droite */}
            <div className="md:col-span-6 md:col-start-7 md:row-start-1">
              <div className="relative h-[240px] sm:h-[300px] md:h-[560px] w-full shadow-xl">
                <Image
                  src="/presentation-naturopathe.png"
                  alt="Portrait de Florence Debattice, naturopathe à Trooz (Liège)"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Cadre texte qui chevauche à gauche */}
            <div className="md:col-span-7 md:col-start-1 md:row-start-1 md:relative md:z-10 -mt-8 md:mt-0 mx-3 md:mx-0 md:mr-[-2rem]">
              <div className="bg-card p-5 sm:p-7 md:p-10 shadow-2xl border border-border space-y-6 md:space-y-7">
                <div>
                  <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase text-primary mb-3">
                    Portrait
                  </p>
                  <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-primary-dark italic mb-4 md:mb-5 leading-tight">
                    Mon parcours : de la rigueur des chiffres à l&apos;équilibre
                    de l&apos;humain
                  </h2>
                  <p className="text-sm md:text-base text-foreground/85 leading-[1.7] md:leading-[1.8]">
                    Pendant dix ans, j&apos;ai évolué dans l&apos;univers de la{" "}
                    <strong className="text-primary-dark font-bold">
                      comptabilité
                    </strong>
                    . Mon quotidien consistait à analyser, conseiller et
                    veiller à la santé financière des entreprises. C&apos;était
                    un métier de rigueur, mais avec le temps, une évidence
                    s&apos;est imposée : il me manquait l&apos;essentiel, le{" "}
                    <strong className="text-primary-dark font-bold">
                      sens
                    </strong>
                    .
                  </p>
                </div>

                <div className="border-t border-border pt-6 md:pt-7">
                  <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase text-primary mb-3">
                    Le tournant
                  </p>
                  <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-primary-dark italic mb-4 md:mb-5 leading-tight">
                    Vers l&apos;accompagnement
                  </h2>
                  <p className="text-sm md:text-base text-foreground/85 leading-[1.7] md:leading-[1.8]">
                    À 35 ans, j&apos;ai ressenti le besoin profond de mettre
                    mon expertise au service de l&apos;individu plutôt que des
                    organisations. Ce chemin m&apos;a d&apos;abord menée vers
                    l&apos;enseignement auprès de{" "}
                    <strong className="text-primary-dark font-bold">
                      jeunes en difficulté
                    </strong>
                    . Cette expérience a été un véritable catalyseur :
                    j&apos;y ai appris l&apos;importance de l&apos;écoute, de
                    la patience et du soutien inconditionnel pour aider
                    l&apos;autre à se révéler.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION — pleine largeur, plus aéré */}
      <section className="bg-background py-12 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-6 text-center">
          <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase text-primary mb-4 md:mb-6">
            Ma mission aujourd&apos;hui
          </p>
          <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-primary-dark mb-8 md:mb-10 leading-none">
            Votre bien-être
          </h2>
          <p className="text-base md:text-lg text-foreground/85 leading-[1.8] md:leading-[1.9] mb-8 md:mb-10">
            Aujourd&apos;hui, riche de ces expériences, je vous accompagne en
            tant que{" "}
            <strong className="text-primary-dark font-bold">naturopathe</strong>
            . Prendre soin de mon entourage a toujours été dans ma nature ;
            c&apos;est désormais mon métier. Mon approche repose sur deux
            piliers.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 md:mb-12">
            <div className="bg-card p-6 sm:p-7 md:p-8 border border-border">
              <p className="font-display text-2xl md:text-3xl italic text-accent mb-3 leading-tight">
                L&apos;empathie
              </p>
              <p className="text-sm md:text-base text-foreground/85 leading-[1.7]">
                Comprendre comment votre corps et votre esprit interagissent,
                sans jugement.
              </p>
            </div>
            <div className="bg-card p-6 sm:p-7 md:p-8 border border-border">
              <p className="font-display text-2xl md:text-3xl italic text-accent mb-3 leading-tight">
                La bienveillance
              </p>
              <p className="text-sm md:text-base text-foreground/85 leading-[1.7]">
                Vous proposer des solutions concrètes et adaptées pour
                améliorer votre vitalité durablement.
              </p>
            </div>
          </div>

          <blockquote className="font-display text-xl sm:text-2xl md:text-3xl text-accent italic">
            « La santé est un voyage universel, propre à chacun. »
          </blockquote>
        </div>
      </section>

      {/* CHEMIN — pleine largeur image fond */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/cropped-cascade-foret.png')",
          }}
        />
        <div className="absolute inset-0 bg-primary-dark/75" />
        <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-6 text-center text-white">
          <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase mb-4 md:mb-6 text-white/80">
            Mon approche
          </p>
          <h2 className="font-script text-4xl sm:text-5xl md:text-7xl mb-6 md:mb-8 leading-none">
            Un chemin de connaissance de soi
          </h2>
          <p className="text-base md:text-lg leading-[1.8] md:leading-[1.9] text-white/90">
            La naturopathie n&apos;est pas une solution miracle, mais un chemin
            de connaissance de soi. Elle m&apos;a apporté force et confiance
            au quotidien, et c&apos;est ce même équilibre que je souhaite vous
            aider à trouver. Je ne suis pas là pour vous donner des
            directives, mais pour être votre guide sur la voie de votre propre
            santé.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-light/20 py-14 md:py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-6 text-center">
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-primary-dark mb-4 md:mb-6 leading-none">
            Une envie de me rencontrer ?
          </h2>
          <p className="text-sm md:text-base text-foreground/85 mb-8 md:mb-10">
            Réservez votre appel découverte gratuit, sans engagement.
          </p>
          <Link
            href="/prendre-rdv"
            className="inline-block px-7 py-3.5 md:px-8 md:py-4 bg-primary-dark text-white text-xs tracking-[0.25em] uppercase hover:bg-primary transition-colors"
          >
            Réserve ton appel gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
