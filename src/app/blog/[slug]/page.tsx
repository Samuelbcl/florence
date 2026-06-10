import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { marked } from "marked";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPost } from "../../../lib/blog";

const SITE_URL = "https://flonaturopathie.com";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Article introuvable" };

  const description = post.intro?.slice(0, 158) ??
    `${post.title} — un article du blog naturopathie de Florence Debattice (Liège).`;

  return {
    title: post.title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url: `${SITE_URL}/blog/${slug}`,
      publishedTime: post.publishedAt,
      images: post.image1 ? [{ url: post.image1 }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const bodyHtml = await marked.parse(post.body, { gfm: true });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.intro ?? "",
    image: post.image1 ? `${SITE_URL}${post.image1}` : `${SITE_URL}/portrait-florence.png`,
    datePublished: post.publishedAt ?? undefined,
    dateModified: post.publishedAt ?? undefined,
    author: {
      "@type": "Person",
      name: "Florence Debattice",
      jobTitle: "Naturopathe",
      url: `${SITE_URL}/votre-naturopathe`,
    },
    publisher: {
      "@type": "Organization",
      name: "Florence Debattice — Naturopathe",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
    inLanguage: "fr-BE",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* BREADCRUMB visuel */}
      <nav className="bg-background pt-8 md:pt-10" aria-label="Fil d'Ariane">
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          <ol className="flex items-center gap-2 text-xs md:text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-primary-dark">
                Accueil
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li>
              <Link href="/blog" className="hover:text-primary-dark">
                Blog
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="text-foreground/85 truncate max-w-[200px] md:max-w-none">
              {post.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* INTRO */}
      <section className="bg-background py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          {post.tag && (
            <span className="inline-block text-[10px] md:text-[11px] font-medium tracking-[0.15em] uppercase text-accent bg-accent/10 px-3 py-1 rounded-full mb-5 md:mb-6">
              {post.tag}
            </span>
          )}

          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary-dark leading-[1.25] mb-5">
            {post.title}
          </h1>

          {post.publishedAt && (
            <p className="text-xs text-muted mb-5">
              Publié le{" "}
              <time dateTime={post.publishedAt}>{post.publishedAt}</time>{" "}
              par Florence Debattice, naturopathe à Trooz (Liège)
            </p>
          )}

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
            <div className="relative aspect-[16/9] overflow-hidden shadow-md">
              <Image
                src={post.image1}
                alt={`${post.title} — Florence Debattice, naturopathe à Liège`}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
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
              <span>Trooz (Liège) · Cabinet & visio</span>
            </div>
          </div>
        </div>
      </section>

      {/* RETOUR BLOG */}
      <section className="bg-background py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-5 md:px-6 text-center">
          <Link
            href="/blog"
            className="inline-block text-primary-dark border-b border-primary-dark pb-1 text-xs md:text-sm tracking-[0.2em] uppercase hover:text-primary hover:border-primary"
          >
            ← Tous les articles
          </Link>
        </div>
      </section>
    </>
  );
}
