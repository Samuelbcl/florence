import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPrestations } from "../../lib/prestations";

export const metadata: Metadata = {
  title: "Prestations naturopathie à Liège & en ligne",
  description:
    "Consultations de naturopathie au cabinet de Trooz (Liège) ou en ligne pour toute la Wallonie et la Belgique. Rendez-vous informatif gratuit, bilan initial et consultations de suivi.",
  alternates: { canonical: "/mes-prestations" },
};

export default async function MesPrestations() {
  const prestations = await getAllPrestations();
  return (
    <>
      <section className="bg-primary-light/20 py-14 md:py-24">
        <div className="max-w-5xl mx-auto px-5 md:px-6 text-center">
          <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-primary-dark font-medium mb-3 md:mb-4">
            Mes prestations
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl text-primary-dark leading-[1.05] mb-3">
            Prestations & tarifs
          </h1>
          <p className="font-script text-2xl sm:text-3xl md:text-4xl text-accent leading-none">
            choisissez le rendez-vous qui vous convient
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto md:px-6 py-12 md:py-24">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-5 pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {prestations.map((p) => (
            <Link
              key={p.slug}
              href={`/mes-prestations/${p.slug}`}
              className="group bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col snap-center shrink-0 w-[85%] sm:w-[60%] md:w-auto"
            >
              <div className="relative aspect-square overflow-hidden bg-background">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 md:p-7 flex flex-col flex-1">
                <h2 className="font-display text-xl md:text-2xl text-primary-dark mb-3 leading-snug">
                  {p.title}
                </h2>
                <p className="text-sm text-foreground/75 leading-relaxed mb-6 flex-1">
                  {p.short}
                </p>

                <div className="flex items-center gap-6 pt-4 border-t border-border">
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center shadow-sm shrink-0 font-body font-bold text-base">
                      €
                    </span>
                    <span className="font-body text-lg font-bold text-accent leading-none">
                      {p.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center shadow-sm shrink-0">
                      <svg
                        width="16"
                        height="16"
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
                    <span className="font-body text-lg font-bold text-accent leading-none">
                      {p.duration}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-primary-dark text-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-6 text-center">
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-accent mb-5 md:mb-6 leading-none">
            Réservez votre prochain rendez-vous
          </h2>
          <Link
            href="/prendre-rdv"
            className="inline-block px-7 py-3.5 md:px-8 md:py-4 bg-accent text-primary-dark text-xs tracking-[0.25em] uppercase hover:bg-white transition-colors"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </>
  );
}
