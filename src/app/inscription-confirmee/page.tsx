import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inscription confirmée — Florence Debattice",
  description:
    "Votre inscription à la newsletter de Florence Debattice est bien validée.",
};

export default function InscriptionConfirmee() {
  return (
    <section className="min-h-[60vh] flex items-center py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-5 md:px-6 text-center">
        {/* Petit check vert dans un cercle */}
        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-full bg-primary text-white flex items-center justify-center shadow-md">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>

        <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-accent font-medium mb-3 md:mb-4">
          Newsletter
        </p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary-dark leading-[1.1] mb-4">
          Inscription confirmée
        </h1>
        <p className="font-script text-2xl sm:text-3xl md:text-4xl text-accent leading-none mb-8 md:mb-10">
          Bienvenue parmi nous
        </p>

        <p className="text-base md:text-lg text-foreground/85 leading-[1.8] mb-8 md:mb-10">
          Votre inscription est validée. Vous recevrez prochainement un email
          de bienvenue, puis mes articles, conseils et inspirations
          naturopathiques chaque mois.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/blog"
            className="inline-block px-7 py-3.5 bg-primary-dark text-white text-xs tracking-[0.25em] uppercase hover:bg-primary transition-colors"
          >
            Lire le blog
          </Link>
          <Link
            href="/"
            className="inline-block px-7 py-3.5 border border-primary-dark text-primary-dark text-xs tracking-[0.25em] uppercase hover:bg-primary-dark hover:text-white transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
