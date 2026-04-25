import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Votre naturopathe — Florence Debattice",
  description:
    "Découvrez le parcours, la formation et les spécialités de Florence Debattice, naturopathe certifiée.",
};

export default function VotreNaturopathe() {
  return (
    <>
      <section className="bg-primary-light/30 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary-dark mb-6">
            Votre naturopathe
          </p>
          <h1 className="font-display text-5xl md:text-6xl">Qui suis-je ?</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-[1fr,1.5fr] gap-12 items-start">
        <div className="aspect-[4/5] bg-gradient-to-br from-primary-light to-accent/40 sticky top-24 flex items-center justify-center">
          <span className="text-primary-dark/40 text-sm tracking-[0.3em] uppercase">
            Photo
          </span>
        </div>
        <div className="space-y-6 text-lg text-muted leading-relaxed">
          <p>
            J&apos;ai d&apos;abord appris pendant 10 ans comment on conseille
            une entreprise ou une marque pour l&apos;aider à développer sa
            croissance dans une logique commerciale saine.
          </p>
          <p>
            À 35 ans, j&apos;ai choisi de mettre mes conseils au service de
            l&apos;Humain. Et là, ma mission a pris tout son sens…
          </p>
          <p>
            Aujourd&apos;hui, mon objectif en tant que naturopathe est de
            tenter de comprendre comment votre corps et votre esprit
            fonctionnent avec empathie et bienveillance.
          </p>
          <p>
            Chaque être est différent mais la santé est une question
            universelle, à laquelle tout le monde est confronté à un moment ou
            un autre de sa vie.
          </p>
          <p>
            La naturopathie m&apos;a rendue plus forte, plus confiante et en
            meilleure santé. Elle n&apos;est pas miraculeuse mais c&apos;est
            un chemin sur lequel je vous propose de vous accompagner.
          </p>
          <p className="font-display text-2xl text-primary-dark pt-2">
            Florence.
          </p>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl text-center mb-12">Parcours</h2>
          <div className="space-y-6">
            {[
              { year: "2024", text: "Publication du mémoire de fin d'études" },
              {
                year: "2022",
                text: "Éducateur de santé Naturopathe OMNES (Organisation de la Médecine Naturelle et de l'Éducation sanitaires)",
              },
              { year: "2021", text: "Formation Réflexologue plantaire — Aesculape" },
              {
                year: "2021",
                text: "Certification FENA (Fédération Française des Écoles de Naturopathie)",
              },
              {
                year: "2019–2021",
                text: "Formation Praticienne de Santé Naturopathe à Aesculape sur 3 ans (1200h)",
              },
            ].map((item) => (
              <div
                key={item.year + item.text}
                className="grid grid-cols-[120px,1fr] gap-6 pb-6 border-b border-border last:border-0"
              >
                <span className="font-display text-2xl text-primary">
                  {item.year}
                </span>
                <p className="text-muted pt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-display text-4xl text-center mb-12">Formation</h2>
        <div className="space-y-5 text-muted leading-relaxed text-lg">
          <p>
            J&apos;ai été formée naturopathe pendant 3 ans (1200 h) par
            AESCULAPE à Aix-en-Provence. C&apos;est une école qui a une
            richesse et une diversité d&apos;intervenants impressionnante.
            Elle est affiliée à la FENA (Fédération Française de
            Naturopathie). J&apos;ai été certifiée Praticien de Santé
            Naturopathe en 2021.
          </p>
          <p>
            J&apos;ai étudié l&apos;anatomie, la physiologie et la
            physio-pathologie pour comprendre le fonctionnement du corps
            humain. Les 3 matières principales du naturopathe sont :{" "}
            <strong className="text-foreground">
              hygiène vitale, psychologie et nutrition
            </strong>
            . Elles constituent le socle sur lequel reposent le savoir, le
            savoir-faire et le savoir-être du naturopathe.
          </p>
        </div>

        <h3 className="font-display text-2xl text-primary-dark mt-12 mb-6">
          Techniques spécialistes
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Aromathérapie", "Fleurs de Bach", "Gemmothérapie", "Sels minéraux"].map(
            (t) => (
              <div
                key={t}
                className="px-5 py-4 border border-border bg-card text-center text-sm"
              >
                {t}
              </div>
            )
          )}
        </div>
      </section>

      <section className="bg-primary-light/30 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl text-center mb-12">
            Mes spécialités
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-card p-8 border border-border">
              <h3 className="font-display text-2xl text-primary-dark mb-4">
                Allergies respiratoires saisonnières
              </h3>
              <p className="text-muted leading-relaxed">
                Acariens, poussières, moisissures, pollens, poils de chats et
                chiens. Par un rééquilibrage de votre terrain, une alimentation
                adaptée et des régulateurs de terrain bien choisis, il est
                possible d&apos;accompagner ces allergies.
              </p>
            </article>
            <article className="bg-card p-8 border border-border">
              <h3 className="font-display text-2xl text-primary-dark mb-4">
                Dérèglements hormonaux & SOPK
              </h3>
              <p className="text-muted leading-relaxed">
                Le syndrome des ovaires polykystiques touche 10% des femmes en
                âge de procréer. Un accompagnement par l&apos;alimentation, la
                gestion du stress et des techniques complémentaires peut vous
                permettre de retrouver votre équilibre.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl mb-6">
          Une question, une envie de me rencontrer ?
        </h2>
        <Link
          href="/prendre-rdv"
          className="inline-block px-8 py-4 bg-primary text-white text-xs tracking-[0.2em] uppercase hover:bg-primary-dark transition-colors"
        >
          Prendre rendez-vous
        </Link>
      </section>
    </>
  );
}
