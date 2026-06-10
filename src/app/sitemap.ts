import { promises as fs } from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { getAllPrestations } from "../lib/prestations";
import { getAllBlogPosts } from "../lib/blog";

const SITE_URL = "https://flonaturopathie.com";

async function safeMtime(filePath: string): Promise<Date> {
  try {
    const stat = await fs.stat(filePath);
    return stat.mtime;
  } catch {
    return new Date();
  }
}

function parseDate(value: string | undefined, fallback: Date): Date {
  if (!value) return fallback;
  const d = new Date(value);
  return isNaN(d.getTime()) ? fallback : d;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const prestations = await getAllPrestations();
  const blogPosts = await getAllBlogPosts();
  const appDir = path.join(process.cwd(), "src", "app");
  const prestationDir = path.join(process.cwd(), "content", "prestations");
  const blogDir = path.join(process.cwd(), "content", "blog");

  const staticPages: Array<{
    path: string;
    file: string;
    priority: number;
    changeFrequency: "weekly" | "monthly";
  }> = [
    { path: "", file: "page.tsx", priority: 1, changeFrequency: "weekly" },
    { path: "/votre-naturopathe", file: "votre-naturopathe/page.tsx", priority: 0.9, changeFrequency: "monthly" },
    { path: "/pourquoi-consulter", file: "pourquoi-consulter/page.tsx", priority: 0.9, changeFrequency: "monthly" },
    { path: "/mes-prestations", file: "mes-prestations/page.tsx", priority: 0.9, changeFrequency: "monthly" },
    { path: "/prendre-rdv", file: "prendre-rdv/page.tsx", priority: 0.9, changeFrequency: "monthly" },
    { path: "/naturopathe-liege", file: "naturopathe-liege/page.tsx", priority: 0.95, changeFrequency: "monthly" },
    { path: "/naturopathe-trooz", file: "naturopathe-trooz/page.tsx", priority: 0.9, changeFrequency: "monthly" },
    { path: "/ebook", file: "ebook/page.tsx", priority: 0.85, changeFrequency: "monthly" },
    { path: "/blog", file: "blog/page.tsx", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", file: "contact/page.tsx", priority: 0.7, changeFrequency: "monthly" },
  ];

  const staticUrls = await Promise.all(
    staticPages.map(async (p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: await safeMtime(path.join(appDir, p.file)),
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    }))
  );

  const prestationUrls = await Promise.all(
    prestations.map(async (p) => ({
      url: `${SITE_URL}/mes-prestations/${p.slug}`,
      lastModified: await safeMtime(path.join(prestationDir, `${p.slug}.json`)),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  const blogUrls = await Promise.all(
    blogPosts.map(async (p) => {
      const fileMtime = await safeMtime(path.join(blogDir, `${p.slug}.md`));
      return {
        url: `${SITE_URL}/blog/${p.slug}`,
        lastModified: parseDate(p.publishedAt, fileMtime),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      };
    })
  );

  return [...staticUrls, ...prestationUrls, ...blogUrls];
}
