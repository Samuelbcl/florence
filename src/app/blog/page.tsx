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
    <>
      {/* INTRO sur fond crème */}
      <section className="bg-background py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <span className="inline-block text-[11px] font-medium tracking-[0.15em] uppercase text-accent bg-accent/10 px-3 py-1 rounded-full mb-6">
            Premier article
          </span>

          <h1 className="font-display text-3xl md:text-4xl text-primary-dark leading-[1.25] mb-5">
            « Tu es juste fatiguée » — et si c&apos;était faux ?
          </h1>

          <p className="text-lg italic text-foreground/80 leading-[1.8] border-l-[3px] border-primary pl-4">
            Tu te lèves épuisée. Tu as des règles douloureuses, une humeur en
            dents de scie, une peau capricieuse ou des kilos qui s&apos;
            installent sans raison. Et à chaque consultation, on te dit que
            tout va bien. Que c&apos;est normal. Que c&apos;est le stress.
          </p>
        </div>
      </section>

      {/* SECTION 1 — image gauche / texte droite — fond vert clair */}
      <section className="bg-primary-light/20 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="aspect-[4/3] overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1532635241-17e820acc59f?w=900&q=80"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-base text-foreground leading-[1.85] mb-4">
                Je veux te parler d&apos;une chose que j&apos;entends très
                souvent : des femmes qui savent que quelque chose ne va pas
                dans leur corps, mais qu&apos;on n&apos;a jamais vraiment
                écoutées.
              </p>
              <p className="text-base text-foreground leading-[1.85]">
                Des femmes brillantes, actives, qui font tout bien en
                apparence — et qui pourtant traînent une fatigue chronique,
                des variations d&apos;humeur inexpliquées, un cycle qui les
                épuise chaque mois.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHRASE FORTE en doré centré sur fond crème */}
      <section className="bg-background py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-script text-3xl md:text-5xl text-accent leading-tight text-center">
            On leur a dit : c&apos;est l&apos;âge.
            <br />
            C&apos;est le stress. C&apos;est dans la tête.
          </p>
        </div>
      </section>

      {/* HIGHLIGHT BOX sur fond crème */}
      <section className="bg-background pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-card border-l-[4px] border-primary-dark rounded-r-lg px-6 py-5">
            <p className="text-base italic text-primary-dark leading-[1.75] m-0">
              Mais si votre corps n&apos;était pas en train de flancher — mais
              simplement en train d&apos;essayer de vous dire quelque chose ?
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — texte gauche / image droite — fond doré pâle */}
      <section className="bg-accent/10 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="md:order-2 aspect-[4/3] overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=80"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:order-1">
              <h2 className="font-display text-2xl md:text-3xl text-primary-dark mb-3">
                Ce que la naturopathie change vraiment
              </h2>
              <p className="text-base text-foreground leading-[1.85] mb-4">
                La naturopathie ne remplace pas la médecine. Elle l&apos;
                accompagne, là où elle a ses limites : comprendre pourquoi
                votre corps réagit comme il réagit, identifier ce qui perturbe
                votre équilibre hormonal, et agir en douceur.
              </p>
              <p className="text-base text-foreground leading-[1.85]">
                Alimentation anti-inflammatoire, plantes adaptogènes, gestion
                du cortisol, soutien du foie : il existe des leviers
                puissants, peu connus, et pourtant accessibles à toutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — image gauche / texte droite — fond vert clair */}
      <section className="bg-primary-light/20 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="aspect-[4/3] overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1543362906-acfc16c67564?w=900&q=80"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-primary-dark mb-3">
                Pourquoi ce blog existe
              </h2>
              <p className="text-base text-foreground leading-[1.85] mb-4">
                Je suis naturopathe spécialisée dans la santé hormonale
                féminine. J&apos;ai créé cet espace pour partager des
                informations fiables, des conseils pratiques, et surtout pour
                vous montrer que vous n&apos;avez pas à accepter de vous
                sentir « comme ça ».
              </p>
              <p className="text-base text-foreground leading-[1.85]">
                Chaque mois, vous trouverez ici des articles sur le cycle, la
                ménopause, l&apos;endométriose, la thyroïde, la fatigue
                surrénalienne — et les approches naturelles qui font vraiment
                une différence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CITATION FORTE sur fond crème */}
      <section className="bg-background py-14 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-card border-l-[4px] border-primary-dark rounded-r-lg px-6 py-5">
            <p className="text-base italic text-primary-dark leading-[1.75] m-0">
              Parce qu&apos;une femme qui comprend son corps est une femme
              qui peut en prendre soin.
            </p>
          </div>
        </div>
      </section>

      {/* CTA NEWSLETTER + AUTEUR sur fond vert sauge foncé */}
      <section className="bg-primary-dark text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-script text-4xl md:text-5xl text-accent leading-none mb-3">
            recevoir le prochain article
          </p>
          <p className="text-white/85 leading-relaxed mb-7 max-w-md mx-auto">
            Inscrivez-vous à la newsletter pour ne rater aucun article.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-primary-dark rounded-full px-7 py-3 text-sm font-medium hover:bg-white transition-colors"
          >
            Inscription newsletter ↗
          </Link>

          <div className="flex items-center justify-center gap-3 mt-12 pt-8 border-t border-white/15">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary-dark font-medium text-sm shrink-0">
              F
            </div>
            <div className="text-sm text-white/80 text-left">
              <strong className="block text-white text-[14px] font-medium">
                Florence Debattice — Naturopathe
              </strong>
              Spécialiste santé hormonale féminine
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
