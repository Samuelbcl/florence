/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IconCouple } from "../components/PersonIcons";
import { prestations } from "../lib/prestations";

export default function Home() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative -mt-[100px] min-h-[480px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-[center_80%]"
          style={{
            backgroundImage: "url('/hero-home.png')",
          }}
        />
        {/* Calque blanc semi-opaque pour assurer la lisibilité par-dessus la photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-12 pt-[90px] md:pt-[100px] pb-10">
          <div className="max-w-2xl">
            <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-primary-dark mb-3 font-medium">
              Florence Debattice — Naturopathe
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-dark leading-[1.1] mb-1">
              Trouvez votre équilibre naturel
            </h1>
            <p className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-accent leading-none mb-4">
              en douceur
            </p>
            <p className="text-sm md:text-base text-foreground leading-relaxed mb-5 max-w-xl">
              « Décodez les messages de votre corps grâce à la naturopathie
              pour cultiver votre santé et booster votre vitalité. »
            </p>
            <Link
              href="/votre-naturopathe"
              className="inline-block px-6 py-2.5 border border-primary-dark text-primary-dark text-xs tracking-[0.25em] uppercase hover:bg-primary-dark hover:text-white transition-colors"
            >
              Me découvrir
            </Link>

            {/* Mobile : bouton Réservé sous le texte */}
            <Link
              href="/prendre-rdv"
              className="md:hidden mt-3 inline-flex items-center justify-center px-6 py-3 bg-primary-dark text-white text-xs tracking-[0.25em] uppercase shadow-lg"
            >
              Réserve ton appel gratuit
            </Link>
          </div>
        </div>

        {/* Desktop : médaillon "Réserve ton appel" — circulaire rotaté */}
        <Link
          href="/prendre-rdv"
          className="group hidden md:flex absolute right-12 md:right-20 lg:right-32 top-[calc(50%+12px)] -translate-y-1/2 z-20 w-36 h-36 lg:w-40 lg:h-40 rounded-full border-2 border-primary-dark bg-background/90 backdrop-blur-sm flex-col items-center justify-center text-center rotate-[-8deg] hover:rotate-0 hover:bg-primary-dark transition-all duration-500 shadow-lg"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary-dark group-hover:text-white leading-relaxed transition-colors">
            appel gratuit
          </span>
          <span className="block w-10 h-px bg-primary-dark/60 group-hover:bg-white my-2 transition-colors" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary-dark group-hover:text-white leading-relaxed transition-colors">
            Réserve ton
            <br />
            créneau
          </span>
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
      <section id="bienvenue" className="bg-background py-14 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative h-[280px] sm:h-[360px] md:h-[520px] w-full">
              <img
                src="/presentation-home.png"
                alt="Florence Debattice"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 border-2 border-primary -z-10" />
              <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-16 h-16 md:w-24 md:h-24 bg-primary-light/40 -z-10" />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-primary-dark mb-3 md:mb-4">
              Bienvenue
            </p>
            <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-primary-dark mb-6 md:mb-8 leading-none">
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
      <section className="bg-primary-light/15 py-14 md:py-28">
        <div className="max-w-5xl mx-auto px-5 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-primary-dark mb-3 md:mb-4">
              Pédagogie
            </p>
            <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-primary-dark leading-none">
              la naturopathie, c&apos;est quoi ?
            </h2>
          </div>

          <ul className="max-w-3xl mx-auto space-y-6 md:space-y-7">
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
              <li key={i} className="flex items-start gap-3 md:gap-5">
                <span className="shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary text-white flex items-center justify-center mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <p className="text-foreground/90 text-base md:text-lg leading-[1.7] md:leading-[1.8]">
                  {content}
                </p>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* ═══════════ POUR QUI POUR QUOI ═══════════ */}
      <section className="bg-background py-14 md:py-28">
        <div className="max-w-5xl mx-auto px-5 md:px-6 text-center">
          <IconCouple className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-5 md:mb-6" />
          <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-primary-dark mb-3 md:mb-4">
            Pour qui ? Pour quoi ?
          </p>
          <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-primary-dark leading-none mb-8 md:mb-10">
            la naturopathie est pour tous
          </h2>
          <p className="text-base md:text-lg text-foreground/85 leading-[1.8] md:leading-[1.9] max-w-3xl mx-auto mb-7 md:mb-8">
            Hommes, femmes, adolescents, enfants, bébés, femmes enceintes,
            personnes âgées… Il existe de multiples raisons de consulter.
          </p>
          <Link
            href="/pourquoi-consulter"
            className="inline-block px-7 py-3.5 md:px-8 md:py-4 border border-primary-dark text-primary-dark text-xs tracking-[0.25em] uppercase hover:bg-primary-dark hover:text-white transition-colors"
          >
            Pourquoi consulter ?
          </Link>
        </div>
      </section>

      {/* ═══════════ MES PRESTATIONS ═══════════ */}
      <section className="bg-primary-dark text-white py-14 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-white/70 mb-3 md:mb-4">
              Mes prestations
            </p>
            <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-white leading-none">
              mes naturopathie
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {prestations
              .filter((p) =>
                [
                  "rendez-vous-informatif",
                  "consultation-initiale-en-ligne",
                  "consultation-initiale-cabinet",
                ].includes(p.slug)
              )
              .map((p) => (
              <Link
                key={p.slug}
                href={`/mes-prestations/${p.slug}`}
                className="group bg-white text-foreground overflow-hidden flex flex-col shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden bg-background">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <h3 className="font-display text-lg md:text-xl text-primary-dark mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-foreground/75 leading-relaxed mb-5 flex-1">
                    {p.short}
                  </p>
                  <div className="flex items-center gap-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-2.5">
                      <span className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center shadow-sm shrink-0 font-body font-bold text-base">
                        €
                      </span>
                      <span className="font-body text-lg font-bold text-accent leading-none">
                        {p.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center shadow-sm shrink-0">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                      </span>
                      <span className="font-body text-lg font-bold text-accent leading-none">
                        {p.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
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
      <section className="bg-background py-14 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-primary-dark mb-3 md:mb-4">
              À découvrir sur
            </p>
            <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-primary-dark leading-none">
              mon blog
            </h2>
          </div>

          <Link
            href="/blog"
            className="group block bg-card border border-border rounded-xl px-5 py-6 md:px-10 md:py-8 text-center hover:border-primary-dark hover:shadow-md transition-all"
          >
            <span className="inline-block text-[10px] md:text-[11px] font-medium tracking-[0.15em] uppercase text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
              Premier article
            </span>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-primary-dark mb-3 leading-snug">
              « Tu es juste fatiguée » — et si c&apos;était faux ?
            </h3>
            <p className="text-sm md:text-base text-foreground/75 leading-relaxed mb-5">
              Des femmes brillantes, actives, qui savent que quelque chose ne
              va pas mais qu&apos;on n&apos;a jamais vraiment écoutées.
              Découvrez l&apos;article complet sur le blog.
            </p>
            <span className="inline-block text-primary-dark border-b border-primary-dark pb-1 text-xs md:text-sm tracking-[0.25em] uppercase group-hover:text-primary group-hover:border-primary">
              Lire l&apos;article ↗
            </span>
          </Link>
        </div>
      </section>

      {/* ═══════════ CTA FINAL ═══════════ */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-primary-dark/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-6 text-center text-white">
          <p className="font-script text-3xl sm:text-4xl md:text-5xl text-accent mb-6 md:mb-8 leading-none">
            prendre soin de vous
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-8 md:mb-10 font-light">
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
