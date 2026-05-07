"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useMemo, Suspense } from "react";
import { prestations, getPrestation } from "../../lib/prestations";
import CalEmbed from "../../components/CalEmbed";

function PrendreRdvContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const serviceSlug = searchParams.get("service");
  const selected = useMemo(
    () => (serviceSlug ? getPrestation(serviceSlug) : undefined),
    [serviceSlug]
  );

  const setService = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("service", slug);
    router.replace(`/prendre-rdv?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      {/* HERO de page */}
      <section className="bg-primary-light/20 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-6 text-center">
          <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-accent font-medium mb-3 md:mb-4">
            Réservation en ligne
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl text-primary-dark leading-[1.05] mb-3">
            Prendre rendez-vous
          </h1>
          <p className="font-script text-2xl sm:text-3xl md:text-4xl text-accent leading-none">
            choisissez votre créneau
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-6 py-10 md:py-16">
        {/* Étape 1 : choix de la prestation */}
        <div className="mb-8 md:mb-10">
          <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-accent font-medium mb-3">
            Étape 1 — votre prestation
          </p>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-primary-dark mb-5 md:mb-6">
            Quel rendez-vous souhaitez-vous réserver ?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {prestations.map((p) => {
              const active = selected?.slug === p.slug;
              return (
                <button
                  key={p.slug}
                  type="button"
                  onClick={() => setService(p.slug)}
                  className={`text-left bg-white border-2 px-5 py-4 transition-all ${
                    active
                      ? "border-accent shadow-md"
                      : "border-border hover:border-accent/60"
                  }`}
                >
                  <p className="font-display text-base md:text-lg text-primary-dark leading-tight mb-2">
                    {p.title}
                  </p>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-accent font-bold">{p.price}</span>
                    <span className="text-foreground/60">·</span>
                    <span className="text-accent font-bold">
                      {p.duration}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Étape 2 : calendrier */}
        {selected ? (
          <div className="mt-10 md:mt-12">
            <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-accent font-medium mb-3">
              Étape 2 — votre créneau
            </p>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-primary-dark mb-2">
              {selected.title}
            </h2>
            <p className="text-sm md:text-base text-foreground/75 mb-6 md:mb-8">
              Choisissez ci-dessous la date et l&apos;heure qui vous
              conviennent. Une confirmation vous sera envoyée par email.
            </p>

            <CalEmbed bookingUrl={selected.bookingUrl} />
          </div>
        ) : (
          <div className="mt-10 md:mt-12 bg-card border border-dashed border-border p-8 md:p-12 text-center">
            <p className="text-sm md:text-base text-foreground/60">
              Sélectionnez une prestation ci-dessus pour voir le calendrier
              de réservation.
            </p>
          </div>
        )}
      </section>

      {/* Bloc infos pratiques */}
      <section className="bg-card py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-primary-dark mb-6 md:mb-8 text-center leading-none">
            avant votre première consultation
          </h2>
          <ul className="space-y-4 text-sm md:text-base text-foreground/85">
            <li className="pl-6 border-l-2 border-accent">
              <strong className="text-primary-dark block mb-1">
                Durée
              </strong>
              Comptez environ 1h30 pour la première séance, 1h pour un suivi.
            </li>
            <li className="pl-6 border-l-2 border-accent">
              <strong className="text-primary-dark block mb-1">
                Tarifs
              </strong>
              80 € la première consultation, 65 € pour un suivi. Le rendez-vous
              informatif (30 min) est gratuit.
            </li>
            <li className="pl-6 border-l-2 border-accent">
              <strong className="text-primary-dark block mb-1">
                Annulation
              </strong>
              Merci de prévenir au moins 24h à l&apos;avance en cas
              d&apos;empêchement.
            </li>
            <li className="pl-6 border-l-2 border-accent">
              <strong className="text-primary-dark block mb-1">
                Une question avant ?
              </strong>
              Contactez-moi directement par{" "}
              <Link
                href="/contact"
                className="text-primary-dark border-b border-primary-dark/40 hover:border-primary-dark"
              >
                email
              </Link>{" "}
              ou réservez le rendez-vous informatif gratuit pour faire
              connaissance.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default function PrendreRdv() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center text-muted">
          Chargement…
        </div>
      }
    >
      <PrendreRdvContent />
    </Suspense>
  );
}
