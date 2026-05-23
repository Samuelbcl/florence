import { promises as fs } from "node:fs";
import path from "node:path";

export type SiteSettings = {
  siteName: string;
  tagline: string;
  address: string;
  email: string;
  phone: string;
  facebookUrl: string;
  instagramUrl: string;
};

const SETTINGS_FILE = path.join(
  process.cwd(),
  "content",
  "settings",
  "site.json"
);

const DEFAULTS: SiteSettings = {
  siteName: "Florence Debattice",
  tagline: "Naturopathe",
  address: "Rue de Beaufays 17b\n4870 Trooz, Belgique",
  email: "contact@flonaturopathie.com",
  phone: "+32486927140",
  facebookUrl: "",
  instagramUrl: "",
};

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const raw = await fs.readFile(SETTINGS_FILE, "utf-8");
    const data = JSON.parse(raw) as Partial<SiteSettings>;
    return { ...DEFAULTS, ...data };
  } catch {
    return DEFAULTS;
  }
}
