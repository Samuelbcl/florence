import { Suspense } from "react";
import { getAllPrestations } from "../../lib/prestations";
import PrendreRdvClient from "./PrendreRdvClient";

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
