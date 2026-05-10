import { promises as fs } from "node:fs";
import path from "node:path";

export type Prestation = {
  slug: string;
  title: string;
  short: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  bookingUrl: string;
  order?: number;
};

const CAL_USER = "flo-naturopathe";

const PRESTATIONS_DIR = path.join(process.cwd(), "content", "prestations");

/**
 * Lit toutes les prestations depuis content/prestations/*.json
 * Tri par "order" croissant.
 */
export async function getAllPrestations(): Promise<Prestation[]> {
  const files = await fs.readdir(PRESTATIONS_DIR);
  const prestations = await Promise.all(
    files
      .filter((f) => f.endsWith(".json"))
      .map(async (filename) => {
        const raw = await fs.readFile(
          path.join(PRESTATIONS_DIR, filename),
          "utf-8"
        );
        const data = JSON.parse(raw) as Omit<Prestation, "bookingUrl">;
        return {
          ...data,
          bookingUrl: `https://cal.com/${CAL_USER}/${data.slug}`,
        } as Prestation;
      })
  );

  return prestations.sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export async function getPrestation(
  slug: string
): Promise<Prestation | undefined> {
  const all = await getAllPrestations();
  return all.find((p) => p.slug === slug);
}
