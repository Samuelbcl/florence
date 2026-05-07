/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Florence Debattice",
  description:
    "Articles de naturopathie pour la santé hormonale féminine, le cycle, la ménopause, l'endométriose et les approches naturelles.",
};

export default function Blog() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Étiquette en doré */}
      <span className="inline-block text-[11px] font-medium tracking-[0.15em] uppercase text-accent bg-accent/10 px-3 py-1 rounded-full mb-6">
        Premier article
      </span>

      {/* Titre */}
      <h1 className="font-display text-3xl md:text-4xl text-primary-dark leading-[1.25] mb-5">
        « Tu es juste fatiguée » — et si c&apos;était faux ?
      </h1>

      {/* Intro */}
      <p className="text-lg italic text-foreground/80 leading-[1.8] mb-8 border-l-[3px] border-primary pl-4">
        Tu te lèves épuisée. Tu as des règles douloureuses, une humeur en
        dents de scie, une peau capricieuse ou des kilos qui s&apos;installent
        sans raison. Et à chaque consultation, on te dit que tout va bien.
        Que c&apos;est normal. Que c&apos;est le stress.
      </p>

      <hr className="border-t border-border my-10" />

      {/* SECTION 1 — image à gauche, texte à droite */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center mb-12">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1532635241-17e820acc59f?w=800&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-base text-foreground leading-[1.85] mb-4">
            Je veux te parler d&apos;une chose que j&apos;entends très souvent
            : des femmes qui savent que quelque chose ne va pas dans leur
            corps, mais qu&apos;on n&apos;a jamais vraiment écoutées.
          </p>
          <p className="text-base text-foreground leading-[1.85]">
            Des femmes brillantes, actives, qui font tout bien en apparence —
            et qui pourtant traînent une fatigue chronique, des variations
            d&apos;humeur inexpliquées, un cycle qui les épuise chaque mois.
          </p>
        </div>
      </div>

      <p className="font-script text-3xl md:text-4xl text-accent leading-tight text-center my-12">
        On leur a dit : c&apos;est l&apos;âge.
        <br />
        C&apos;est le stress. C&apos;est dans la tête.
      </p>

      {/* Highlight box */}
      <div className="bg-primary-light/30 border-l-[4px] border-primary-dark rounded-r-lg px-5 py-4 my-8">
        <p className="text-base italic text-primary-dark leading-[1.75] m-0">
          Mais si votre corps n&apos;était pas en train de flancher — mais
          simplement en train d&apos;essayer de vous dire quelque chose ?
        </p>
      </div>

      {/* SECTION 2 — texte à gauche, image à droite (inversé) */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center my-12">
        <div className="md:order-2 aspect-[4/3] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:order-1">
          <h2 className="font-display text-2xl text-primary-dark mb-3">
            Ce que la naturopathie change vraiment
          </h2>
          <p className="text-base text-foreground leading-[1.85] mb-4">
            La naturopathie ne remplace pas la médecine. Elle l&apos;accompagne,
            là où elle a ses limites : comprendre pourquoi votre corps réagit
            comme il réagit, identifier ce qui perturbe votre équilibre
            hormonal, et agir en douceur.
          </p>
          <p className="text-base text-foreground leading-[1.85]">
            Alimentation anti-inflammatoire, plantes adaptogènes, gestion du
            cortisol, soutien du foie : il existe des leviers puissants, peu
            connus, et pourtant accessibles à toutes.
          </p>
        </div>
      </div>

      {/* SECTION 3 — image à gauche, texte à droite (comme la première) */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center my-12">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1543362906-acfc16c67564?w=800&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-2xl text-primary-dark mb-3">
            Pourquoi ce blog existe
          </h2>
          <p className="text-base text-foreground leading-[1.85] mb-4">
            Je suis naturopathe spécialisée dans la santé hormonale féminine.
            J&apos;ai créé cet espace pour partager des informations fiables,
            des conseils pratiques, et surtout pour vous montrer que vous
            n&apos;avez pas à accepter de vous sentir « comme ça ».
          </p>
          <p className="text-base text-foreground leading-[1.85]">
            Chaque mois, vous trouverez ici des articles sur le cycle, la
            ménopause, l&apos;endométriose, la thyroïde, la fatigue
            surrénalienne — et les approches naturelles qui font vraiment une
            différence.
          </p>
        </div>
      </div>

      <div className="bg-primary-light/30 border-l-[4px] border-primary-dark rounded-r-lg px-5 py-4 my-8">
        <p className="text-base italic text-primary-dark leading-[1.75] m-0">
          Parce qu&apos;une femme qui comprend son corps est une femme qui
          peut en prendre soin.
        </p>
      </div>

      {/* CTA newsletter */}
      <div className="bg-card border border-border rounded-xl px-6 py-7 mt-12 text-center">
        <p className="text-sm text-foreground/75 mb-4">
          Inscrivez-vous à la newsletter pour recevoir le prochain article.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary-dark text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-primary transition-colors"
        >
          Inscription newsletter ↗
        </Link>
      </div>

      <hr className="border-t border-border my-8" />

      {/* Auteur */}
      <div className="flex items-center gap-3 mt-8">
        <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary-dark font-medium text-sm shrink-0">
          F
        </div>
        <div className="text-sm text-muted">
          <strong className="block text-foreground text-[14px] font-medium">
            Florence Debattice — Naturopathe
          </strong>
          Spécialiste santé hormonale féminine
        </div>
      </div>
    </article>
  );
}
