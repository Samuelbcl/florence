import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Florence Debattice",
  description:
    "Articles de naturopathie pour la santé hormonale féminine, le cycle, la ménopause, l'endométriose et les approches naturelles.",
};

export default function Blog() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      {/* Étiquette */}
      <span className="inline-block text-[11px] font-medium tracking-[0.15em] uppercase text-primary-dark bg-primary-light/30 px-3 py-1 rounded-full mb-6">
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

      <hr className="border-t border-border my-8" />

      <p className="text-base text-foreground leading-[1.85] mb-5">
        Je veux te parler d&apos;une chose que j&apos;entends très souvent :
        des femmes qui savent que quelque chose ne va pas dans leur corps,
        mais qu&apos;on n&apos;a jamais vraiment écoutées.
      </p>

      <p className="text-base text-foreground leading-[1.85] mb-5">
        Des femmes brillantes, actives, qui font tout bien en apparence — et
        qui pourtant traînent une fatigue chronique, des variations
        d&apos;humeur inexpliquées, un cycle qui les épuise chaque mois.
      </p>

      <p className="text-base text-foreground leading-[1.85] mb-5">
        On leur a dit : c&apos;est l&apos;âge. C&apos;est le stress.
        C&apos;est dans la tête.
      </p>

      {/* Highlight box */}
      <div className="bg-primary-light/30 border-l-[4px] border-primary-dark rounded-r-lg px-5 py-4 my-6">
        <p className="text-base italic text-primary-dark leading-[1.75] m-0">
          Mais si votre corps n&apos;était pas en train de flancher — mais
          simplement en train d&apos;essayer de vous dire quelque chose ?
        </p>
      </div>

      {/* Section title */}
      <h2 className="font-display text-2xl text-primary-dark mt-10 mb-3">
        Ce que la naturopathie change vraiment
      </h2>

      <p className="text-base text-foreground leading-[1.85] mb-5">
        La naturopathie ne remplace pas la médecine. Elle l&apos;accompagne,
        là où elle a ses limites : comprendre pourquoi votre corps réagit
        comme il réagit, identifier ce qui perturbe votre équilibre hormonal,
        et agir en douceur, avec des outils concrets adaptés à votre vie.
      </p>

      <p className="text-base text-foreground leading-[1.85] mb-5">
        Alimentation anti-inflammatoire, plantes adaptogènes, gestion du
        cortisol, soutien du foie — organe clé dans l&apos;élimination des
        hormones en excès — : il existe des leviers puissants, peu connus,
        et pourtant accessibles à toutes.
      </p>

      <h2 className="font-display text-2xl text-primary-dark mt-10 mb-3">
        Pourquoi ce blog existe
      </h2>

      <p className="text-base text-foreground leading-[1.85] mb-5">
        Je suis naturopathe spécialisée dans la santé hormonale féminine.
        J&apos;ai créé cet espace pour partager des informations fiables, des
        conseils pratiques, et surtout pour vous montrer que vous n&apos;avez
        pas à accepter de vous sentir « comme ça ».
      </p>

      <p className="text-base text-foreground leading-[1.85] mb-5">
        Chaque mois, vous trouverez ici des articles sur le cycle, la
        ménopause, l&apos;endométriose, la thyroïde, la fatigue surrénalienne
        — et les approches naturelles qui font vraiment une différence.
      </p>

      <div className="bg-primary-light/30 border-l-[4px] border-primary-dark rounded-r-lg px-5 py-4 my-6">
        <p className="text-base italic text-primary-dark leading-[1.75] m-0">
          Parce qu&apos;une femme qui comprend son corps est une femme qui
          peut en prendre soin.
        </p>
      </div>

      {/* CTA block */}
      <div className="bg-card border border-border rounded-xl px-6 py-6 mt-10 text-center">
        <p className="text-sm text-foreground/75 mb-4">
          Tu veux recevoir le prochain article directement dans ta boîte mail ?
        </p>
        <Link
          href="/prendre-rdv"
          className="inline-block bg-primary-dark text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-primary transition-colors"
        >
          Je rejoins la communauté ↗
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
