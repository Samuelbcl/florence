import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  tag?: string;
  intro?: string;
  image1?: string;
  publishedAt?: string;
  body: string; // contenu markdown brut
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const files = await fs.readdir(BLOG_DIR);
  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith(".md"))
      .map(async (filename) => {
        const slug = filename.replace(/\.md$/, "");
        const raw = await fs.readFile(path.join(BLOG_DIR, filename), "utf-8");
        const { data, content } = matter(raw);
        return {
          slug,
          title: data.title ?? "",
          tag: data.tag,
          intro: data.intro,
          image1: data.image1,
          publishedAt: data.publishedAt,
          body: content,
        } as BlogPost;
      })
  );

  return posts.sort((a, b) =>
    (b.publishedAt ?? "").localeCompare(a.publishedAt ?? "")
  );
}

export async function getLatestBlogPost(): Promise<BlogPost | undefined> {
  const all = await getAllBlogPosts();
  return all[0];
}
