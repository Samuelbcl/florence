import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPrestations, getPrestation } from "../../../lib/prestations";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const prestations = await getAllPrestations();
  return prestations.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const prestation = await getPrestation(slug);
  if (!prestation) return { title: "Prestation — Florence Debattice" };
  return {
    title: `${prestation.title} — Florence Debattice`,
    description: prestation.short,
  };
}

export default async function PrestationPage({ params }: Props) {
  const { slug } = await params;
  const prestation = await getPrestation(slug);
  if (!prestation) notFound();

  return (
    <>
      <section className="bg-background py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          <Link
            href="/mes-prestations"
            className="inline-block text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.25em] uppercase text-primary-dark hover:text-primary mb-8 md:mb-10"
          >
            ← Toutes les prestations
          </Link>

          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-start">
            {/* IMAGE À GAUCHE — carrée */}
            <div className="relative">
              <div className="relative aspect-square w-full overflow-hidden shadow-xl bg-background">
                <Image
                  src={prestation.image}
                  alt={prestation.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-14 h-14 md:w-20 md:h-20 border-2 border-accent -z-10" />
            </div>

            {/* TITRE + DESC + PRIX/DURÉE À DROITE */}
            <div className="md:pt-4 text-center md:text-left">
              <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-accent font-medium mb-3 md:mb-4">
                Prestation
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary-dark leading-tight mb-5 md:mb-6">
                {prestation.title}
              </h1>

              <p className="text-foreground/85 text-base md:text-lg leading-[1.7] md:leading-[1.8] mb-7 md:mb-8">
                {prestation.description}
              </p>

              {/* Prix + Durée */}
              <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10 py-5 md:py-6 border-y border-border mb-7 md:mb-8">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-md font-body font-bold text-xl md:text-2xl">
                    €
                  </span>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-1">
                      Tarif
                    </p>
                    <p className="font-body text-2xl md:text-3xl text-accent font-bold leading-none">
                      {prestation.price}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                  <span className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-md">
                    <svg
                      width="22"
                      height="22"
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
                    <p className="font-body text-2xl md:text-3xl text-accent font-bold leading-none">
                      {prestation.duration}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href={`/prendre-rdv?service=${prestation.slug}`}
                className="inline-block px-7 py-3.5 md:px-8 md:py-4 bg-primary-dark text-white text-xs tracking-[0.25em] uppercase hover:bg-primary transition-colors"
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
