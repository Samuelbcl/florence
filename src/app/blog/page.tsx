import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Florence Debattice",
  description:
    "Articles et conseils en naturopathie : alimentation, hygiène de vie, plantes et bien-être.",
};

const placeholderPosts = [
  {
    title: "Bientôt : premiers articles",
    excerpt:
      "Le blog se prépare. Vous y trouverez bientôt des conseils, des recettes et des éclairages sur la naturopathie.",
    date: "À venir",
  },
];

export default function Blog() {
  return (
    <>
      <section className="bg-primary-light/30 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary-dark mb-6">
            Conseils & inspirations
          </p>
          <h1 className="font-display text-5xl md:text-6xl">Blog</h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {placeholderPosts.map((post) => (
            <article
              key={post.title}
              className="bg-card border border-border overflow-hidden"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-light to-accent/40 flex items-center justify-center">
                <span className="text-primary-dark/40 text-xs tracking-[0.3em] uppercase">
                  Visuel
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">
                  {post.date}
                </p>
                <h2 className="font-display text-xl text-primary-dark mb-3">
                  {post.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted italic">
            De nouveaux articles arrivent prochainement.
          </p>
        </div>
      </section>
    </>
  );
}
