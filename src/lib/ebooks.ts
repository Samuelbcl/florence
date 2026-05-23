import { promises as fs } from "node:fs";
import path from "node:path";

export type Ebook = {
  slug: string;
  title: string;
  subtitle?: string;
  tag?: string;
  short: string;
  description?: string;
  highlights?: string[];
  cover: string;
  image2?: string;
  image3?: string;
  etsyUrl: string;
  ctaLabel?: string;
  order?: number;
};

const EBOOK_DIR = path.join(process.cwd(), "content", "ebook");

export async function getAllEbooks(): Promise<Ebook[]> {
  try {
    const files = await fs.readdir(EBOOK_DIR);
    const ebooks = await Promise.all(
      files
        .filter((f) => f.endsWith(".json"))
        .map(async (filename) => {
          const raw = await fs.readFile(
            path.join(EBOOK_DIR, filename),
            "utf-8"
          );
          return JSON.parse(raw) as Ebook;
        })
    );
    return ebooks.sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
  } catch {
    return [];
  }
}
