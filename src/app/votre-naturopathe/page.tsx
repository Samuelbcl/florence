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
      {/* HERO compact avec image en fond, titre à droite */}
      <section className="relative h-[30vh] min-h-[220px] md:h-[35vh] md:min-h-[260px] max-h-[360px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/50" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="md:ml-auto md:max-w-md text-right text-white">
            <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase mb-3 text-white/90">
              Votre naturopathe
            </p>
            <h1 className="font-display text-4xl md:text-6xl italic font-light">
              Qui suis-je ?
            </h1>
          </div>
        </div>
      </section>

      {/* PORTRAIT — photo à droite, cadre texte qui chevauche à gauche */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative grid md:grid-cols-12 md:gap-0 items-center">
            {/* Photo à droite */}
            <div className="md:col-span-6 md:col-start-7 md:row-start-1">
              <div
                className="h-[260px] md:h-[420px] w-full bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&q=80')",
                }}
              />
            </div>

            {/* Cadre texte qui chevauche à gauche */}
            <div className="md:col-span-7 md:col-start-1 md:row-start-1 md:relative md:z-10 -mt-10 md:mt-0 mx-4 md:mx-0 md:mr-[-2rem]">
              <div className="bg-card p-7 md:p-10 shadow-2xl border border-border">
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
                  . Mon quotidien consistait à analyser, conseiller et veiller
                  à la santé financière des entreprises. C&apos;était un métier
                  de rigueur, mais avec le temps, une évidence s&apos;est
                  imposée : il me manquait l&apos;essentiel, le{" "}
                  <strong className="text-primary-dark font-medium">sens</strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOURNANT — texte à droite, photo à gauche (alterné) */}
      <section className="bg-primary-light/10 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative grid md:grid-cols-12 md:gap-0 items-center">
            {/* Photo à gauche */}
            <div className="md:col-span-6 md:col-start-1 md:row-start-1">
              <div
                className="h-[260px] md:h-[420px] w-full bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=900&q=80')",
                }}
              />
            </div>

            {/* Cadre texte qui chevauche à droite */}
            <div className="md:col-span-7 md:col-start-6 md:row-start-1 md:relative md:z-10 -mt-10 md:mt-0 mx-4 md:mx-0 md:ml-[-2rem]">
              <div className="bg-card p-7 md:p-10 shadow-2xl border border-border">
                <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3">
                  Le tournant
                </p>
                <h2 className="font-display text-2xl md:text-3xl text-primary-dark italic mb-5 leading-tight">
                  Vers l&apos;accompagnement
                </h2>
                <p className="text-foreground/85 leading-[1.8]">
                  À 35 ans, j&apos;ai ressenti le besoin profond de mettre mon
                  expertise au service de l&apos;individu plutôt que des
                  organisations. Ce chemin m&apos;a d&apos;abord menée vers
                  l&apos;enseignement auprès de{" "}
                  <strong className="text-primary-dark font-medium">
                    jeunes en difficulté
                  </strong>
                  . Cette expérience a été un véritable catalyseur :
                  j&apos;y ai appris l&apos;importance de l&apos;écoute, de la
                  patience et du soutien inconditionnel pour aider l&apos;autre
                  à se révéler.
                </p>
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
          <h2 className="font-display text-4xl md:text-5xl text-primary-dark italic mb-10 leading-tight">
            Votre bien-être
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
              <p className="font-display text-2xl text-primary-dark italic mb-3">
                L&apos;empathie
              </p>
              <p className="text-foreground/85 leading-[1.7]">
                Comprendre comment votre corps et votre esprit interagissent,
                sans jugement.
              </p>
            </div>
            <div className="bg-card p-8 border border-border">
              <p className="font-display text-2xl text-primary-dark italic mb-3">
                La bienveillance
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
          <h2 className="font-display text-4xl md:text-5xl italic mb-8 leading-tight">
            Un chemin de connaissance de soi
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

      {/* PARCOURS — timeline simple */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
              Étapes
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic text-primary-dark">
              Parcours
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {
                year: "Aujourd'hui",
                text: "Naturopathe — accompagnement individualisé pour le bien-être global.",
              },
              {
                year: "Tournant",
                text: "Enseignement auprès de jeunes en difficulté : écoute, patience, soutien inconditionnel.",
              },
              {
                year: "10 ans",
                text: "Carrière en comptabilité — analyse, conseil et accompagnement de la santé financière des entreprises.",
              },
            ].map((item) => (
              <div
                key={item.year + item.text}
                className="grid grid-cols-[140px,1fr] gap-8 pb-8 border-b border-border last:border-0"
              >
                <span className="font-display text-xl italic text-primary-dark">
                  {item.year}
                </span>
                <p className="text-foreground/85 pt-1 leading-[1.8]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-light/20 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl italic text-primary-dark mb-6">
            Une envie de me rencontrer ?
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
