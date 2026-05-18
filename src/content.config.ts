import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    // Source frontmatter uses `date:` (sometimes string, sometimes Date).
    date: z.coerce.date(),
    tags: z.array(z.string()).optional().default([]),
    description: z.string().optional(),
    // Derived from the top-level content folder (Infra, Java, 회고, ...).
    category: z.string().optional(),
    // Explicit thumbnail: path under /public, or remote URL. Step 1 of the
    // fallback chain (see thumbnailFor()): frontmatter > dropped file >
    // body image > generated B&W typographic placeholder.
    thumbnail: z.string().optional(),
    // First <img>/markdown image found in the body during ingest — used as
    // step 3 of the fallback chain (mirrors Quartz CoverImage behaviour).
    bodyImage: z.string().optional(),
  }),
});

export const collections = { posts };
