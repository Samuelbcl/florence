import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllBlogPosts } from "../../lib/blog";

export const metadata: Metadata = {
  title: "Blog naturopathie à Liège — santé naturelle",
  description:
    "Articles de naturopathie par Florence Debattice (Liège) : santé hormonale féminine, cycle, ménopause, sommeil, digestion, approches naturelles.",
  alternates: { canonical: "/blog" },
};

export default async function Blog() {
  const posts = await getAllBlogPosts();

  if (posts.length === 0) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-6">
        <p className="text-foreground/70 text-center">
          Aucun article publié pour le moment. Revenez bientôt !
        </p>
      </section>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-primary-light/20 py-14 md:py-24">
        <div className="max-w-4xl mx-auto px-5 md:px-6 text-center">
          <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-primary-dark font-medium mb-3 md:mb-4">
            Naturopathie à Liège — santé naturelle
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl text-primary-dark leading-[1.05] mb-3">
            Le blog
          </h1>
          <p className="font-script text-2xl sm:text-3xl md:text-4xl text-accent leading-none">
            décodez votre corps, cultivez votre vitalité
          </p>
          <p className="mt-5 md:mt-6 text-sm md:text-base text-foreground/85 leading-relaxed max-w-2xl mx-auto">
            Articles et conseils naturopathiques par Florence Debattice,
            naturopathe à <strong>Trooz</strong> (province de{" "}
            <strong>Liège</strong>).
          </p>
        </div>
      </section>

      {/* LISTE DES ARTICLES */}
      <section className="bg-background py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-5 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-card border border-border overflow-hidden flex flex-col hover:shadow-xl transition-shadow"
              >
                {post.image1 && (
                  <div className="relative aspect-[16/9] overflow-hidden bg-background">
                    <Image
                      src={post.image1}
                      alt={`${post.title} — Naturopathie à Liège`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  {post.tag && (
                    <span className="inline-block self-start text-[10px] font-medium tracking-[0.15em] uppercase text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                      {post.tag}
                    </span>
                  )}
                  <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3 leading-snug">
                    {post.title}
                  </h2>
                  {post.publishedAt && (
                    <p className="text-xs text-muted mb-3">
                      <time dateTime={post.publishedAt}>
                        {post.publishedAt}
                      </time>
                    </p>
                  )}
                  {post.intro && (
                    <p className="text-sm md:text-base text-foreground/75 leading-relaxed mb-5 flex-1">
                      {post.intro}
                    </p>
                  )}
                  <span className="text-primary-dark border-b border-primary-dark pb-1 text-xs tracking-[0.2em] uppercase self-start group-hover:text-primary group-hover:border-primary">
                    Lire l&apos;article ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA NEWSLETTER */}
      <section className="bg-primary-dark text-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-6 text-center">
          <p className="font-script text-3xl sm:text-4xl md:text-5xl text-accent leading-none mb-3">
            Recevoir les prochains articles
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
        </div>
      </section>
    </>
  );
}
