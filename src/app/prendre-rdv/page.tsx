import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllPrestations } from "../../lib/prestations";
import PrendreRdvClient from "./PrendreRdvClient";

export const metadata: Metadata = {
  title: "Prendre rendez-vous — Naturopathe Liège",
  description:
    "Réservez votre consultation naturopathie à Trooz (Liège) ou en ligne pour toute la Wallonie. Premier appel découverte gratuit avec Florence Debattice.",
  alternates: { canonical: "/prendre-rdv" },
};

export default async function PrendreRdv() {
  const prestations = await getAllPrestations();
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center text-muted">
          Chargement…
        </div>
      }
    >
      <PrendreRdvClient prestations={prestations} />
    </Suspense>
  );
}
