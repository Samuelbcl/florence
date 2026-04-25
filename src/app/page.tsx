import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-20 md:pt-16 md:pb-28">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-primary-light/60 leading-[0.95] tracking-tight">
              Florence
              <br />
              Debattice
              <br />
              <span className="text-5xl md:text-6xl lg:text-7xl">Naturopathe</span>
            </h1>
            <div className="md:pt-8">
              <p className="font-display text-3xl md:text-4xl text-primary-dark leading-snug mb-8">
                Trouvez votre équilibre naturel{" "}
                <em className="text-accent font-medium not-italic">
                  <span className="italic">en douceur</span>
                </em>
              </p>
              <Link
                href="/prendre-rdv"
                className="inline-block px-8 py-4 bg-primary-dark text-white text-xs tracking-[0.25em] uppercase hover:bg-primary transition-colors"
              >
                Réserve ton appel gratuit
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square max-w-md mx-auto md:mx-0 rounded-full overflow-hidden bg-gradient-to-br from-primary-light to-accent/50 flex items-center justify-center">
              <span className="text-primary-dark/40 text-sm tracking-[0.3em] uppercase">
                Photo Florence
              </span>
            </div>
            <blockquote className="font-display text-2xl md:text-3xl text-foreground leading-relaxed">
              <span className="text-accent text-5xl leading-none mr-1">«</span>
              Décodez les messages de votre corps grâce à la naturopathie pour
              cultiver votre santé et booster votre vitalité.
              <span className="text-accent text-5xl leading-none ml-1">»</span>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-primary-dark mb-6">
          Ma mission
        </p>
        <h2 className="font-display text-4xl md:text-5xl mb-10">
          Votre bien-être
        </h2>
        <p className="text-lg text-muted leading-relaxed mb-6">
          Prendre soin de mon entourage a toujours été dans ma nature ;
          c&apos;est désormais mon métier. Mon approche repose sur deux
          piliers : <strong className="text-foreground font-normal">l&apos;empathie</strong>{" "}
          pour comprendre comment votre corps et votre esprit interagissent
          sans jugement, et{" "}
          <strong className="text-foreground font-normal">la bienveillance</strong>{" "}
          pour vous proposer des solutions concrètes et adaptées.
        </p>
        <p className="font-display text-2xl md:text-3xl text-primary-dark italic mt-10 mb-10">
          « La santé est un voyage universel, propre à chacun. »
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

      <section className="bg-primary-light/20 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-muted text-lg mb-16 max-w-2xl mx-auto">
            Votre bien-être mérite une attention personnalisée et bienveillante.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Accompagnement",
                text: "Un suivi adapté vous guide vers un mieux-être durable et respectueux.",
              },
              {
                title: "Écoute",
                text: "Chaque séance commence par un échange sincère pour comprendre vos besoins.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card overflow-hidden shadow-sm">
                <div className="aspect-[16/9] bg-gradient-to-br from-primary-light to-accent/40 flex items-center justify-center">
                  <span className="text-primary-dark/40 text-xs tracking-[0.3em] uppercase">
                    Visuel
                  </span>
                </div>
                <div className="p-8 text-center">
                  <h3 className="font-display text-2xl text-primary-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
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
