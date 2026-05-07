/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prestations, getPrestation } from "../../../lib/prestations";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return prestations.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const prestation = getPrestation(slug);
  if (!prestation) return { title: "Prestation — Florence Debattice" };
  return {
    title: `${prestation.title} — Florence Debattice`,
    description: prestation.short,
  };
}

export default async function PrestationPage({ params }: Props) {
  const { slug } = await params;
  const prestation = getPrestation(slug);
  if (!prestation) notFound();

  return (
    <>
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/mes-prestations"
            className="inline-block text-xs tracking-[0.25em] uppercase text-primary-dark hover:text-primary mb-10"
          >
            ← Toutes les prestations
          </Link>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            {/* IMAGE À GAUCHE — carrée */}
            <div className="relative">
              <div className="aspect-square w-full overflow-hidden shadow-xl bg-background">
                <img
                  src={prestation.image}
                  alt={prestation.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-accent -z-10" />
            </div>

            {/* TITRE + DESC + PRIX/DURÉE À DROITE */}
            <div className="md:pt-4">
              <p className="text-xs tracking-[0.5em] uppercase text-accent font-medium mb-4">
                Prestation
              </p>
              <h1 className="font-display text-4xl md:text-5xl text-primary-dark leading-tight mb-6">
                {prestation.title}
              </h1>

              <p className="text-foreground/85 text-lg leading-[1.8] mb-8">
                {prestation.description}
              </p>

              {/* Prix + Durée */}
              <div className="flex flex-wrap gap-10 py-6 border-y border-border mb-8">
                <div className="flex items-center gap-4">
                  <span className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-md font-body font-bold text-2xl">
                    €
                  </span>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-1">
                      Tarif
                    </p>
                    <p className="font-body text-3xl text-accent font-bold leading-none">
                      {prestation.price}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-md">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-1">
                      Durée
                    </p>
                    <p className="font-body text-3xl text-accent font-bold leading-none">
                      {prestation.duration}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/prendre-rdv"
                className="inline-block px-8 py-4 bg-primary-dark text-white text-xs tracking-[0.25em] uppercase hover:bg-primary transition-colors"
              >
                Réserver ce rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
