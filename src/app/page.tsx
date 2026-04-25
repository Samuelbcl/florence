/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IconCouple } from "../components/PersonIcons";

export default function Home() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative -mt-[100px] min-h-[560px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/cropped-cascade-foret.png')",
          }}
        />
        {/* Calque blanc semi-opaque pour assurer la lisibilité par-dessus la photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-[120px] pb-14">
          <div className="max-w-2xl">
            <p className="text-xs md:text-sm tracking-[0.5em] uppercase text-primary-dark mb-4 font-medium">
              Florence Debattice — Naturopathe
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-dark leading-[1.05] mb-1">
              Trouvez votre équilibre naturel
            </h1>
            <p className="font-script text-5xl md:text-6xl lg:text-7xl text-accent leading-none mb-5">
              en douceur
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-6 max-w-xl">
              « Décodez les messages de votre corps grâce à la naturopathie
              pour cultiver votre santé et booster votre vitalité. »
            </p>
            <Link
              href="/votre-naturopathe"
              className="inline-block px-7 py-3 border border-primary-dark text-primary-dark text-xs tracking-[0.25em] uppercase hover:bg-primary-dark hover:text-white transition-colors"
            >
              Me découvrir
            </Link>

            {/* Mobile : bouton Réservé sous le texte */}
            <Link
              href="/prendre-rdv"
              className="md:hidden mt-4 inline-flex items-center justify-center px-8 py-4 bg-primary-dark text-white text-sm tracking-[0.25em] uppercase shadow-lg"
            >
              Réserve ton appel gratuit
            </Link>
          </div>
        </div>

        {/* Desktop : bouton Réservé au centre vertical à droite du hero */}
        <Link
          href="/prendre-rdv"
          className="hidden md:inline-flex absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 z-20 items-center justify-center px-8 py-5 bg-primary-dark text-white text-sm tracking-[0.25em] uppercase hover:bg-primary transition-colors text-center leading-snug shadow-lg max-w-[220px]"
        >
          Réserve ton appel gratuit
        </Link>

        {/* Flèche animée bas */}
        <a
          href="#bienvenue"
          aria-label="Faire défiler"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 text-primary-dark animate-soft-bounce"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14" />
            <path d="M19 12l-7 7-7-7" />
          </svg>
        </a>
      </section>

      {/* ═══════════ BIENVENUE ═══════════ */}
      <section id="bienvenue" className="bg-background py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative h-[420px] md:h-[520px] w-full">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&q=80"
                alt="Florence Debattice"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-light/40 -z-10" />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-xs tracking-[0.5em] uppercase text-primary-dark mb-4">
              Bienvenue
            </p>
            <h2 className="font-script text-6xl md:text-7xl text-foreground mb-8 leading-none">
              ravie de vous rencontrer
            </h2>
            <div className="space-y-5 text-foreground/85 text-lg leading-[1.8]">
              <p>
                Je suis{" "}
                <strong className="text-primary-dark font-bold">
                  Florence Debattice
                </strong>
                , naturopathe. Mon parcours m&apos;a menée de la rigueur des
                chiffres en comptabilité à l&apos;accompagnement humain, en
                passant par l&apos;enseignement auprès de jeunes en difficulté.
              </p>
              <p>
                Aujourd&apos;hui, je vous accompagne avec écoute et
                bienveillance pour retrouver votre équilibre, par des conseils
                personnalisés en hygiène de vie, alimentation et techniques
                naturelles.
              </p>
            </div>
            <Link
              href="/votre-naturopathe"
              className="inline-block mt-8 text-primary-dark border-b border-primary-dark pb-1 text-sm tracking-[0.2em] uppercase hover:text-primary hover:border-primary"
            >
              + d&apos;infos sur moi
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ LA NATUROPATHIE C'EST QUOI ═══════════ */}
      <section className="bg-primary-light/15 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.5em] uppercase text-primary-dark mb-4">
              Pédagogie
            </p>
            <h2 className="font-script text-5xl md:text-7xl text-foreground leading-none">
              la naturopathie, c&apos;est quoi ?
            </h2>
          </div>

          <ul className="max-w-3xl mx-auto space-y-7">
            {[
              <>
                La naturopathie est une{" "}
                <strong className="text-primary-dark font-bold">
                  approche de santé à un niveau global
                </strong>{" "}
                de la personne qui prend en considération aussi bien
                l&apos;aspect{" "}
                <strong className="text-primary-dark font-bold">
                  physique, psychique et émotionnel
                </strong>{" "}
                ainsi que l&apos;environnement dans lequel évolue la personne.
              </>,
              <>
                Elle s&apos;inspire de la pensée d&apos;
                <strong className="text-primary-dark font-bold">
                  Hippocrate de Cos
                </strong>
                , père de la médecine, selon laquelle nous sommes tous
                constitués de liquides (le sang, la lymphe, la bile…) et
                qu&apos;une surcharge en déchets dans ces liquides entraîne un{" "}
                <strong className="text-primary-dark font-bold">
                  déséquilibre
                </strong>{" "}
                au niveau de la santé à plus ou moins long terme.
              </>,
              <>
                L&apos;objectif du naturopathe est de délivrer des{" "}
                <strong className="text-primary-dark font-bold">
                  conseils personnalisés
                </strong>{" "}
                en{" "}
                <strong className="text-primary-dark font-bold">
                  hygiène vitale
                </strong>
                , en{" "}
                <strong className="text-primary-dark font-bold">nutrition</strong>{" "}
                et parfois en régulateurs de terrain issus de remèdes naturels
                si besoin (phytologie, compléments alimentaires…).
              </>,
              <>
                La naturopathie intervient aussi bien en{" "}
                <strong className="text-primary-dark font-bold">
                  prévention
                </strong>{" "}
                qu&apos;en{" "}
                <strong className="text-primary-dark font-bold">
                  complément de la médecine conventionnelle
                </strong>{" "}
                et des traitements existants.
              </>,
            ].map((content, i) => (
              <li key={i} className="flex items-start gap-5">
                <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center mt-1">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <p className="text-foreground/90 text-lg leading-[1.8]">
                  {content}
                </p>
              </li>
            ))}
          </ul>

          <div className="text-center mt-12">
            <Link
              href="/la-naturopathie/les-bases"
              className="inline-block text-primary-dark border-b border-primary-dark pb-1 text-sm tracking-[0.2em] uppercase hover:text-primary hover:border-primary"
            >
              en savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ POUR QUI POUR QUOI ═══════════ */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <IconCouple className="w-16 h-16 mx-auto mb-6" />
          <p className="text-xs tracking-[0.5em] uppercase text-primary-dark mb-4">
            Pour qui ? Pour quoi ?
          </p>
          <h2 className="font-script text-5xl md:text-7xl text-primary-dark leading-none mb-10">
            la naturopathie est pour tous
          </h2>
          <p className="text-lg text-foreground/85 leading-[1.9] max-w-3xl mx-auto mb-8">
            Hommes, femmes, adolescents, enfants, bébés, femmes enceintes,
            personnes âgées… Il existe de multiples raisons de consulter.
          </p>
          <Link
            href="/pourquoi-consulter"
            className="inline-block px-8 py-4 border border-primary-dark text-primary-dark text-xs tracking-[0.25em] uppercase hover:bg-primary-dark hover:text-white transition-colors"
          >
            Pourquoi consulter ?
          </Link>
        </div>
      </section>

      {/* ═══════════ MES PRESTATIONS ═══════════ */}
      <section className="bg-primary-dark text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.5em] uppercase text-white/70 mb-4">
              Mes prestations
            </p>
            <h2 className="font-script text-5xl md:text-7xl text-white leading-none">
              naturo
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Consultation de naturopathie",
                desc: "Approche globale permettant de définir un bilan de vitalité débouchant sur des conseils personnalisés en alimentation, hygiène vitale et régulateurs de terrain.",
                img: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=900&q=80",
              },
              {
                title: "Séance de réflexologie plantaire",
                desc: "Technique manuelle ancestrale par pression sur les zones réflexes des pieds pour faciliter l'auto-guérison, apporter détente et éliminer les toxines.",
                img: "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=900&q=80",
              },
              {
                title: "Ateliers & conférences naturo",
                desc: "Rencontres en petits groupes sur des thématiques en lien avec la naturopathie : alimentation, hygiène vitale, gestion du stress, phytothérapie.",
                img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="bg-white text-foreground overflow-hidden flex flex-col shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="font-display text-xl md:text-2xl text-primary-dark mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/75 leading-relaxed mb-6 flex-1">
                    {item.desc}
                  </p>
                  <Link
                    href="/mes-prestations"
                    className="text-xs tracking-[0.25em] uppercase text-primary-dark border-b border-primary-dark pb-1 self-start hover:text-primary hover:border-primary"
                  >
                    En savoir plus
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/mes-prestations"
              className="inline-block px-8 py-4 bg-background text-primary-dark text-xs tracking-[0.25em] uppercase hover:bg-white transition-colors"
            >
              Voir toutes les prestations
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ BLOG ═══════════ */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.5em] uppercase text-primary-dark mb-4">
              À découvrir sur
            </p>
            <h2 className="font-script text-5xl md:text-7xl text-primary-dark leading-none">
              mon blog
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Mieux dormir naturellement",
                excerpt: "Conseils pour retrouver un sommeil profond et réparateur.",
                img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=900&q=80",
              },
              {
                title: "Équilibre hormonal féminin",
                excerpt: "Comprendre son cycle et accompagner les changements.",
                img: "https://images.unsplash.com/photo-1532635241-17e820acc59f?w=900&q=80",
              },
              {
                title: "L'alimentation comme première médecine",
                excerpt: "Les bases d'une assiette qui soutient votre vitalité.",
                img: "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=900&q=80",
              },
            ].map((post) => (
              <article key={post.title} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-5">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-primary-dark">
                  {post.title}
                </h3>
                <p className="text-sm text-foreground/75 leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block text-primary-dark border-b border-primary-dark pb-1 text-sm tracking-[0.25em] uppercase hover:text-primary hover:border-primary"
            >
              Autres articles
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA FINAL ═══════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-primary-dark/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <p className="font-script text-4xl md:text-5xl text-accent mb-8 leading-none">
            prendre soin de vous
          </p>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 font-light">
            La naturopathie, en prévention ou en complément de la médecine
            conventionnelle.
          </p>
          <Link
            href="/prendre-rdv"
            className="inline-block px-10 py-5 bg-accent text-primary-dark text-xs tracking-[0.3em] uppercase hover:bg-white transition-colors"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </>
  );
}
