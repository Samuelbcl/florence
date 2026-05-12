import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "La naturopathie — Florence Debattice",
  description:
    "Découvrez les bases et les techniques de la naturopathie : une approche globale et naturelle de la santé.",
};

export default function LaNaturopathie() {
  return (
    <>
      <section className="bg-primary-light/30 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary-dark mb-6">
            Pédagogie
          </p>
          <h1 className="font-display text-5xl md:text-6xl">La naturopathie</h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-lg text-muted leading-relaxed mb-12">
          Une approche globale et naturelle de la santé, fondée sur les
          principes hippocratiques. Elle considère l&apos;être humain dans sa
          totalité pour soutenir ses capacités naturelles d&apos;équilibre et
          d&apos;auto-guérison.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <Link
            href="/la-naturopathie/les-bases"
            className="block p-10 bg-card border border-border hover:border-primary transition-colors group"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
              Découvrir
            </p>
            <h2 className="font-display text-3xl text-foreground group-hover:text-primary-dark mb-3">
              Les bases
            </h2>
            <p className="text-sm text-muted">
              Définition, principes fondamentaux et histoire de la naturopathie.
            </p>
          </Link>
          <Link
            href="/la-naturopathie/les-techniques"
            className="block p-10 bg-card border border-border hover:border-primary transition-colors group"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
              Découvrir
            </p>
            <h2 className="font-display text-3xl text-foreground group-hover:text-primary-dark mb-3">
              Les techniques
            </h2>
            <p className="text-sm text-muted">
              Les 10 techniques naturopathiques et leurs applications concrètes.
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
