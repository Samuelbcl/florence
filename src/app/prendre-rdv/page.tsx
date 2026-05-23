import type { Metadata } from "next";
import { Suspense } from "react";
import { getAllPrestations } from "../../lib/prestations";
import PrendreRdvClient from "./PrendreRdvClient";

export const metadata: Metadata = {
  title: "Prendre rendez-vous avec une naturopathe à Liège",
  description:
    "Réservez votre consultation de naturopathie avec Florence Debattice : au cabinet de Trooz (Liège) ou en ligne pour toute la Wallonie et la Belgique. Premier appel gratuit.",
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
