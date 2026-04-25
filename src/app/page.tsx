import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative bg-primary-light/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-primary-dark mb-6">
              Bienvenue
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground leading-tight mb-6">
              Trouvez votre équilibre naturel en douceur
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-8 max-w-xl">
              Naturopathe certifiée, je vous accompagne avec écoute et
              bienveillance dans le retour à votre vitalité, par des conseils
              personnalisés en hygiène de vie, alimentation et techniques
              naturelles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/prendre-rdv"
                className="px-7 py-3.5 bg-primary text-white text-xs tracking-[0.2em] uppercase hover:bg-primary-dark transition-colors"
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="/votre-naturopathe"
                className="px-7 py-3.5 border border-primary text-primary text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-colors"
              >
                Me découvrir
              </Link>
            </div>
          </div>
          <div className="aspect-[4/5] bg-gradient-to-br from-primary-light to-accent/40 rounded-sm flex items-center justify-center">
            <span className="text-primary-dark/40 text-sm tracking-[0.3em] uppercase">
              Photo
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-primary-dark mb-6">
          Qui suis-je
        </p>
        <h2 className="font-display text-4xl md:text-5xl mb-8">
          Florence Debattice
        </h2>
        <p className="text-lg text-muted leading-relaxed mb-6">
          Aujourd&apos;hui, mon objectif en tant que naturopathe est de tenter
          de comprendre comment votre corps et votre esprit fonctionnent avec
          empathie et bienveillance. Chaque être est différent mais la santé
          est une question universelle, à laquelle tout le monde est confronté
          à un moment ou un autre de sa vie.
        </p>
        <p className="text-lg text-muted leading-relaxed mb-10">
          La naturopathie n&apos;est pas miraculeuse mais c&apos;est un chemin
          sur lequel je vous propose de vous accompagner.
        </p>
        <Link
          href="/votre-naturopathe"
          className="inline-block text-primary border-b border-primary pb-1 text-sm tracking-[0.2em] uppercase hover:text-primary-dark hover:border-primary-dark"
        >
          Mon parcours
        </Link>
      </section>

      <section className="bg-card py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-primary-dark mb-6">
              Pédagogie
            </p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              La naturopathie, c&apos;est quoi ?
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              Une approche globale, fondée sur les principes hippocratiques.
              Elle considère l&apos;être humain dans sa totalité — corps,
              esprit, environnement — pour soutenir ses capacités naturelles
              d&apos;auto-guérison.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Préventif",
                text: "Maintenir et renforcer votre capital santé avant l’apparition de troubles.",
              },
              {
                title: "Personnalisé",
                text: "Des conseils sur-mesure, adaptés à votre terrain, votre vie et vos envies.",
              },
              {
                title: "Naturel",
                text: "Hygiène vitale, alimentation, plantes et techniques douces, en complément de la médecine.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center px-6 py-8 border border-border bg-background"
              >
                <h3 className="font-display text-2xl mb-3 text-primary-dark">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-primary-dark mb-6">
            Mes prestations
          </p>
          <h2 className="font-display text-4xl md:text-5xl">
            Un accompagnement adapté
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Consultation naturopathie",
              desc: "Bilan global de vitalité, conseils personnalisés en hygiène de vie, alimentation et régulateurs de terrain.",
              price: "70€",
              duration: "1h30",
            },
            {
              title: "Réflexologie plantaire",
              desc: "Détente, équilibrage des organes par pressions sur les zones réflexes du pied.",
              price: "55€",
              duration: "1h",
            },
            {
              title: "Ateliers & conférences",
              desc: "Sessions thématiques en groupe : alimentation, aromathérapie, gestion du stress…",
              price: "10–20€",
              duration: "Groupe",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="bg-card p-8 border border-border flex flex-col"
            >
              <h3 className="font-display text-2xl mb-3 text-primary-dark">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                {item.desc}
              </p>
              <div className="flex justify-between items-baseline pt-4 border-t border-border">
                <span className="text-xs tracking-[0.2em] uppercase text-muted">
                  {item.duration}
                </span>
                <span className="font-display text-2xl text-primary-dark">
                  {item.price}
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/mes-prestations"
            className="inline-block text-primary border-b border-primary pb-1 text-sm tracking-[0.2em] uppercase hover:text-primary-dark hover:border-primary-dark"
          >
            Voir toutes les prestations
          </Link>
        </div>
      </section>

      <section className="bg-primary text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Prêt(e) à commencer votre chemin ?
          </h2>
          <p className="text-white/90 mb-8">
            Réservez votre première consultation en ligne, simplement.
          </p>
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
