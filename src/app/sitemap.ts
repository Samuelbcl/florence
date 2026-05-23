import type { MetadataRoute } from "next";
import { getAllPrestations } from "../lib/prestations";

const SITE_URL = "https://flonaturopathie.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const prestations = await getAllPrestations();
  const now = new Date();

  const staticPages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/votre-naturopathe", priority: 0.9, changeFrequency: "monthly" },
    { path: "/pourquoi-consulter", priority: 0.9, changeFrequency: "monthly" },
    { path: "/mes-prestations", priority: 0.9, changeFrequency: "monthly" },
    { path: "/prendre-rdv", priority: 0.9, changeFrequency: "monthly" },
    { path: "/ebook", priority: 0.85, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  ];

  const staticUrls = staticPages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const prestationUrls = prestations.map((p) => ({
    url: `${SITE_URL}/mes-prestations/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticUrls, ...prestationUrls];
}
