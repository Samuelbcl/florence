import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qui suis-je ? — Florence Debattice",
  description:
    "Découvrez le parcours de Florence Debattice : de la rigueur des chiffres à l'équilibre de l'humain.",
};

export default function VotreNaturopathe() {
  return (
    <>
      {/* HERO avec photo (objets à gauche), titre à droite sur la zone claire */}
      <section className="relative h-[40vh] min-h-[280px] md:h-[50vh] md:min-h-[340px] max-h-[460px] flex items-center overflow-hidden bg-background">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-naturopathe.png')",
          }}
        />
        {/* Léger calque cream à droite pour renforcer la lisibilité du titre,
            transparent à gauche pour ne pas gâcher la photo */}
        <div className="absolute inset-0 bg-gradient-to-l from-background/50 via-background/15 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="md:ml-auto max-w-sm md:max-w-md md:text-right">
            <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4 text-primary-dark font-medium">
              Votre naturopathe
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-primary-dark leading-[1.05] mb-3">
              Qui suis-je ?
            </h1>
            <p className="font-script text-3xl md:text-4xl text-accent leading-none">
              ravie de vous rencontrer
            </p>
          </div>
        </div>
      </section>

      {/* PORTRAIT + TOURNANT — un seul cadre, photo à droite */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative grid md:grid-cols-12 md:gap-0 items-center">
            {/* Photo à droite */}
            <div className="md:col-span-6 md:col-start-7 md:row-start-1">
              <div
                className="h-[300px] md:h-[560px] w-full bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage: "url('/portrait-florence.png')",
                }}
              />
            </div>

            {/* Cadre texte qui chevauche à gauche */}
            <div className="md:col-span-7 md:col-start-1 md:row-start-1 md:relative md:z-10 -mt-10 md:mt-0 mx-4 md:mx-0 md:mr-[-2rem]">
              <div className="bg-card p-7 md:p-10 shadow-2xl border border-border space-y-7">
                <div>
                  <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">
                    Portrait
                  </p>
                  <h2 className="font-display text-2xl md:text-3xl text-primary-dark italic mb-5 leading-tight">
                    Mon parcours : de la rigueur des chiffres à l&apos;équilibre
                    de l&apos;humain
                  </h2>
                  <p className="text-foreground/85 leading-[1.8]">
                    Pendant dix ans, j&apos;ai évolué dans l&apos;univers de la{" "}
                    <strong className="text-primary-dark font-medium">
                      comptabilité
                    </strong>
                    . Mon quotidien consistait à analyser, conseiller et
                    veiller à la santé financière des entreprises. C&apos;était
                    un métier de rigueur, mais avec le temps, une évidence
                    s&apos;est imposée : il me manquait l&apos;essentiel, le{" "}
                    <strong className="text-primary-dark font-medium">
                      sens
                    </strong>
                    .
                  </p>
                </div>

                <div className="border-t border-border pt-7">
                  <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">
                    Le tournant
                  </p>
                  <h2 className="font-display text-2xl md:text-3xl text-primary-dark italic mb-5 leading-tight">
                    Vers l&apos;accompagnement
                  </h2>
                  <p className="text-foreground/85 leading-[1.8]">
                    À 35 ans, j&apos;ai ressenti le besoin profond de mettre
                    mon expertise au service de l&apos;individu plutôt que des
                    organisations. Ce chemin m&apos;a d&apos;abord menée vers
                    l&apos;enseignement auprès de{" "}
                    <strong className="text-primary-dark font-medium">
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
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">
            Ma mission aujourd&apos;hui
          </p>
          <h2 className="font-script text-5xl md:text-7xl text-foreground mb-10 leading-none">
            votre bien-être
          </h2>
          <p className="text-lg text-foreground/85 leading-[1.9] mb-10">
            Aujourd&apos;hui, riche de ces expériences, je vous accompagne en
            tant que{" "}
            <strong className="text-primary-dark font-medium">naturopathe</strong>
            . Prendre soin de mon entourage a toujours été dans ma nature ;
            c&apos;est désormais mon métier. Mon approche repose sur deux
            piliers.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-8 border border-border">
              <p className="font-script text-4xl text-foreground mb-3 leading-none">
                l&apos;empathie
              </p>
              <p className="text-foreground/85 leading-[1.7]">
                Comprendre comment votre corps et votre esprit interagissent,
                sans jugement.
              </p>
            </div>
            <div className="bg-card p-8 border border-border">
              <p className="font-script text-4xl text-foreground mb-3 leading-none">
                la bienveillance
              </p>
              <p className="text-foreground/85 leading-[1.7]">
                Vous proposer des solutions concrètes et adaptées pour
                améliorer votre vitalité durablement.
              </p>
            </div>
          </div>

          <blockquote className="font-display text-2xl md:text-3xl text-primary-dark italic">
            « La santé est un voyage universel, propre à chacun. »
          </blockquote>
        </div>
      </section>

      {/* CHEMIN — pleine largeur image fond */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-primary-dark/75" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <p className="text-xs tracking-[0.4em] uppercase mb-6 text-white/80">
            Mon approche
          </p>
          <h2 className="font-script text-5xl md:text-7xl mb-8 leading-none">
            un chemin de connaissance de soi
          </h2>
          <p className="text-lg leading-[1.9] text-white/90">
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
      <section className="bg-primary-light/20 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-script text-5xl md:text-6xl text-foreground mb-6 leading-none">
            une envie de me rencontrer ?
          </h2>
          <p className="text-foreground/85 mb-10">
            Réservez votre appel découverte gratuit, sans engagement.
          </p>
          <Link
            href="/prendre-rdv"
            className="inline-block px-8 py-4 bg-primary-dark text-white text-xs tracking-[0.25em] uppercase hover:bg-primary transition-colors"
          >
            Réserve ton appel gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
