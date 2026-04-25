import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Votre naturopathe — Florence Debattice",
  description:
    "Découvrez le parcours de Florence Debattice : de la rigueur des chiffres à l'équilibre de l'humain.",
};

export default function VotreNaturopathe() {
  return (
    <>
      <section className="bg-primary-light/30 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary-dark mb-6">
            Votre naturopathe
          </p>
          <h1 className="font-display text-5xl md:text-6xl">Portrait</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-[1fr,1.5fr] gap-12 items-start">
        <div className="aspect-[4/5] rounded-full md:rounded-sm bg-gradient-to-br from-primary-light to-accent/40 sticky top-24 flex items-center justify-center">
          <span className="text-primary-dark/40 text-sm tracking-[0.3em] uppercase">
            Photo
          </span>
        </div>

        <div className="space-y-12">
          <article>
            <h2 className="font-display text-3xl text-primary-dark italic mb-5">
              Mon parcours : de la rigueur des chiffres à l&apos;équilibre de
              l&apos;humain
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Pendant dix ans, j&apos;ai évolué dans l&apos;univers de la{" "}
              <strong className="text-foreground font-normal">
                comptabilité
              </strong>
              . Mon quotidien consistait à analyser, conseiller et veiller à
              la santé financière des entreprises pour assurer leur
              croissance. C&apos;était un métier de rigueur, mais avec le
              temps, une évidence s&apos;est imposée : il me manquait
              l&apos;essentiel, le{" "}
              <strong className="text-foreground font-normal">sens</strong>.
            </p>
          </article>

          <article>
            <h2 className="font-display text-3xl text-primary-dark italic mb-5">
              Le tournant vers l&apos;accompagnement
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              À 35 ans, j&apos;ai ressenti le besoin profond de mettre mon
              expertise au service de l&apos;individu plutôt que des
              organisations. Ce chemin m&apos;a d&apos;abord menée vers
              l&apos;enseignement auprès de{" "}
              <strong className="text-foreground font-normal">
                jeunes en difficulté
              </strong>
              . Cette expérience a été un véritable catalyseur : j&apos;y ai
              appris l&apos;importance de l&apos;écoute, de la patience et du
              soutien inconditionnel pour aider l&apos;autre à se révéler.
            </p>
          </article>

          <article>
            <h2 className="font-display text-3xl text-primary-dark italic mb-5">
              Ma mission aujourd&apos;hui : votre bien-être
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              Aujourd&apos;hui, riche de ces expériences, je vous accompagne
              en tant que{" "}
              <strong className="text-foreground font-normal">naturopathe</strong>
              . Prendre soin de mon entourage a toujours été dans ma nature ;
              c&apos;est désormais mon métier. Mon approche repose sur deux
              piliers :
            </p>
            <ul className="space-y-4 pl-6 mb-8">
              <li className="text-lg text-muted leading-relaxed">
                <strong className="text-foreground font-normal">
                  L&apos;empathie
                </strong>{" "}
                : comprendre comment votre corps et votre esprit interagissent,
                sans jugement.
              </li>
              <li className="text-lg text-muted leading-relaxed">
                <strong className="text-foreground font-normal">
                  La bienveillance
                </strong>{" "}
                : vous proposer des solutions concrètes et adaptées pour
                améliorer votre vitalité durablement.
              </li>
            </ul>
            <blockquote className="font-display text-2xl text-primary-dark italic border-l-2 border-accent pl-6 my-8">
              « La santé est un voyage universel, propre à chacun. »
            </blockquote>
            <p className="text-lg text-muted leading-relaxed">
              La naturopathie n&apos;est pas une solution miracle, mais un{" "}
              <strong className="text-foreground font-normal">
                chemin de connaissance de soi
              </strong>
              . Elle m&apos;a apporté force et confiance au quotidien, et
              c&apos;est ce même équilibre que je souhaite vous aider à
              trouver. Je ne suis pas là pour vous donner des directives, mais
              pour être votre guide sur la voie de votre propre santé.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl text-center mb-12">Parcours</h2>
          <div className="space-y-6">
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
                className="grid grid-cols-[140px,1fr] gap-6 pb-6 border-b border-border last:border-0"
              >
                <span className="font-display text-xl text-primary">
                  {item.year}
                </span>
                <p className="text-muted pt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl mb-6">
          Une envie de me rencontrer ?
        </h2>
        <p className="text-muted mb-8">
          Réservez votre appel découverte gratuit, sans engagement.
        </p>
        <Link
          href="/prendre-rdv"
          className="inline-block px-8 py-4 bg-primary-dark text-white text-xs tracking-[0.25em] uppercase hover:bg-primary transition-colors"
        >
          Réserve ton appel gratuit
        </Link>
      </section>
    </>
  );
}
