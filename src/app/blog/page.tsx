/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { marked } from "marked";
import { getLatestBlogPost } from "../../lib/blog";

export const metadata: Metadata = {
  title: "Blog — Florence Debattice",
  description:
    "Articles de naturopathie pour la santé hormonale féminine, le cycle, la ménopause, l'endométriose et les approches naturelles.",
};

export default async function Blog() {
  const post = await getLatestBlogPost();

  if (!post) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-6">
        <p className="text-foreground/70 text-center">
          Aucun article publié pour le moment. Revenez bientôt !
        </p>
      </section>
    );
  }

  // Convertit le markdown du body en HTML
  const bodyHtml = await marked.parse(post.body, { gfm: true });

  return (
    <>
      {/* INTRO */}
      <section className="bg-background py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          {post.tag && (
            <span className="inline-block text-[10px] md:text-[11px] font-medium tracking-[0.15em] uppercase text-accent bg-accent/10 px-3 py-1 rounded-full mb-5 md:mb-6">
              {post.tag}
            </span>
          )}

          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary-dark leading-[1.25] mb-5">
            {post.title}
          </h1>

          {post.intro && (
            <p className="text-base md:text-lg italic text-foreground/80 leading-[1.7] md:leading-[1.8] border-l-[3px] border-primary pl-4">
              {post.intro}
            </p>
          )}
        </div>
      </section>

      {/* IMAGE PRINCIPALE */}
      {post.image1 && (
        <section className="bg-primary-light/20 py-10 md:py-16">
          <div className="max-w-3xl mx-auto px-5 md:px-6">
            <div className="aspect-[16/9] overflow-hidden shadow-md">
              <img
                src={post.image1}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* CONTENU MARKDOWN */}
      <section className="bg-background py-10 md:py-16">
        <div
          className="max-w-3xl mx-auto px-5 md:px-6 blog-prose"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />
      </section>

      {/* CTA NEWSLETTER + AUTEUR */}
      <section className="bg-primary-dark text-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-6 text-center">
          <p className="font-script text-3xl sm:text-4xl md:text-5xl text-accent leading-none mb-3">
            Recevoir le prochain article
          </p>
          <p className="text-sm md:text-base text-white/85 leading-relaxed mb-6 md:mb-7 max-w-md mx-auto">
            Inscrivez-vous à la newsletter pour ne rater aucun article.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-primary-dark rounded-full px-6 md:px-7 py-3 text-sm font-medium hover:bg-white transition-colors"
          >
            Inscription newsletter ↗
          </Link>

          <div className="flex items-center justify-center gap-3 mt-10 md:mt-12 pt-7 md:pt-8 border-t border-white/15">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary-dark font-medium text-sm shrink-0">
              F
            </div>
            <div className="text-xs md:text-sm text-white/80 text-left">
              <strong className="block text-white text-[13px] md:text-[14px] font-medium">
                Florence Debattice — Naturopathe
              </strong>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
