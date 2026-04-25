/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IconCouple } from "../components/PersonIcons";

export default function Home() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative h-[85vh] min-h-[560px] max-h-[820px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.5em] uppercase text-primary-dark mb-6">
              Florence Debattice — Naturopathe
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-foreground leading-[1.05] mb-4">
              Trouvez votre équilibre naturel
            </h1>
            <p className="font-script text-5xl md:text-7xl text-accent leading-none mb-10">
              en douceur
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed mb-10 max-w-lg">
              « Décodez les messages de votre corps grâce à la naturopathie
              pour cultiver votre santé et booster votre vitalité. »
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/prendre-rdv"
                className="px-8 py-4 bg-primary-dark text-white text-xs tracking-[0.25em] uppercase hover:bg-primary transition-colors"
              >
                Réserve ton appel gratuit
              </Link>
              <Link
                href="/votre-naturopathe"
                className="px-8 py-4 border border-primary-dark text-primary-dark text-xs tracking-[0.25em] uppercase hover:bg-primary-dark hover:text-white transition-colors"
              >
                Me découvrir
              </Link>
            </div>
          </div>
        </div>

        {/* Flèche animée bas */}
        <a
          href="#bienvenue"
          aria-label="Faire défiler"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-primary-dark animate-soft-bounce"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
                <strong className="text-primary-dark font-medium">
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

          <div className="grid md:grid-cols-[1.2fr,1fr] gap-12 items-center">
            <div className="space-y-5 text-foreground/85 text-lg leading-[1.8]">
              <p>
                Une approche de santé{" "}
                <strong className="text-primary-dark font-medium">
                  globale
                </strong>{" "}
                qui considère l&apos;aspect physique, psychique, émotionnel
                ainsi que l&apos;environnement de la personne.
              </p>
              <p>
                Inspirée de la pensée d&apos;Hippocrate, elle vise à délivrer
                des conseils personnalisés en hygiène vitale, nutrition et
                régulateurs naturels (phytothérapie, compléments alimentaires…)
                en prévention comme en complément de la médecine
                conventionnelle.
              </p>
              <Link
                href="/la-naturopathie/les-bases"
                className="inline-block mt-2 text-primary-dark border-b border-primary-dark pb-1 text-sm tracking-[0.2em] uppercase hover:text-primary hover:border-primary"
              >
                en savoir plus
              </Link>
            </div>

            <ul className="space-y-5">
              {[
                "Approche personnalisée",
                "Méthodes 100 % naturelles",
                "Préventif & complémentaire",
                "Écoute & bienveillance",
                "Reconnue par l'OMS",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-primary-dark text-white flex items-center justify-center mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <span className="text-foreground/90 text-lg pt-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
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
          <h2 className="font-script text-5xl md:text-7xl text-foreground leading-none mb-10">
            la naturopathie est pour tous
          </h2>
          <p className="text-lg text-foreground/85 leading-[1.9] max-w-3xl mx-auto mb-8">
            Hommes, femmes, adolescents, enfants, bébés, femmes enceintes,
            personnes âgées… La naturopathie est considérée comme la troisième
            médecine traditionnelle par l&apos;OMS depuis 1970. Il existe de
            multiples raisons de consulter.
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
                img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80",
              },
              {
                title: "Séance de réflexologie plantaire",
                desc: "Technique manuelle ancestrale par pression sur les zones réflexes des pieds pour faciliter l'auto-guérison, apporter détente et éliminer les toxines.",
                img: "https://images.unsplash.com/photo-1611073615452-4889bf4c5c2c?w=900&q=80",
              },
              {
                title: "Ateliers & conférences naturo",
                desc: "Rencontres en petits groupes sur des thématiques en lien avec la naturopathie : alimentation, hygiène vitale, gestion du stress, phytothérapie.",
                img: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=900&q=80",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="bg-white/5 backdrop-blur-sm border border-white/15 overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="font-display text-xl md:text-2xl text-white mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-6 flex-1">
                    {item.desc}
                  </p>
                  <Link
                    href="/mes-prestations"
                    className="text-xs tracking-[0.25em] uppercase text-accent border-b border-accent pb-1 self-start hover:text-white hover:border-white"
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
              className="inline-block px-8 py-4 bg-accent text-primary-dark text-xs tracking-[0.25em] uppercase hover:bg-white transition-colors"
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
            <h2 className="font-script text-5xl md:text-7xl text-foreground leading-none">
              mon blog
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Mieux dormir naturellement",
                excerpt: "Conseils pour retrouver un sommeil profond et réparateur.",
                img: "https://images.unsplash.com/photo-1455642305367-68834a9c4337?w=900&q=80",
              },
              {
                title: "Équilibre hormonal féminin",
                excerpt: "Comprendre son cycle et accompagner les changements.",
                img: "https://images.unsplash.com/photo-1611690899595-a4ed1ad79b6e?w=900&q=80",
              },
              {
                title: "L'alimentation comme première médecine",
                excerpt: "Les bases d'une assiette qui soutient votre vitalité.",
                img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=80",
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
