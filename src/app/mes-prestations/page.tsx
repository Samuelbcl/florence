/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { prestations } from "../../lib/prestations";

export const metadata: Metadata = {
  title: "Mes prestations — Florence Debattice",
  description:
    "Consultations en ligne ou au cabinet, rendez-vous informatif gratuit. Découvrez les prestations proposées par Florence Debattice, naturopathe.",
};

export default function MesPrestations() {
  return (
    <>
      <section className="bg-primary-light/20 py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.5em] uppercase text-primary-dark font-medium mb-4">
            Mes prestations
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-primary-dark leading-[1.05] mb-3">
            Prestations & tarifs
          </h1>
          <p className="font-script text-3xl md:text-4xl text-accent leading-none">
            choisissez le rendez-vous qui vous convient
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {prestations.map((p) => (
            <Link
              key={p.slug}
              href={`/mes-prestations/${p.slug}`}
              className="group bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
            >
              <div className="aspect-square overflow-hidden bg-background">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
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
                        <path d="M14 6a4 4 0 1 0 0 12" />
                        <path d="M5 10h7" />
                        <path d="M5 14h7" />
                      </svg>
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

      <section className="bg-card py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-foreground/85 leading-relaxed mb-3">
            Paiements acceptés : chèques, espèces et virement.
          </p>
          <p className="text-foreground/70 text-sm italic">
            Non remboursé par la Sécurité Sociale, mais possibles
            remboursements partiels par certaines mutuelles.
          </p>
        </div>
      </section>

      <section className="bg-primary-dark text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-script text-5xl md:text-6xl text-accent mb-6 leading-none">
            réservez votre prochain rendez-vous
          </h2>
          <Link
            href="/prendre-rdv"
            className="inline-block px-8 py-4 bg-accent text-primary-dark text-xs tracking-[0.25em] uppercase hover:bg-white transition-colors"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </>
  );
}
