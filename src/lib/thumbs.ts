import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

// Where the user drops real thumbnail images. A file named <slug>.<ext>
// here overrides the body-image / generated fallback automatically — no
// code change required.
const PUBLIC_THUMB_DIR = fileURLToPath(
  new URL("../../public/thumbnails/", import.meta.url),
);
const EXTS = ["webp", "png", "jpg", "jpeg", "svg", "avif"] as const;

export interface ThumbInput {
  id: string;
  data: { thumbnail?: string; bodyImage?: string; title: string; category?: string };
}

export interface ResolvedThumb {
  src: string;
  /** true only for step 4 — the generated B&W typographic cover. */
  generated: boolean;
  source: "frontmatter" | "file" | "body" | "generated";
}

/**
 * Thumbnail fallback chain:
 *  1. frontmatter `thumbnail`
 *  2. public/thumbnails/<slug>.{webp,png,jpg,jpeg,svg,avif} if present
 *  3. first <img>/markdown image in the body (ingest stored it as bodyImage)
 *  4. generated B&W monospace typographic placeholder (SVG endpoint)
 *
 * Real images (1–3) render in ORIGINAL COLOR — no grayscale filter.
 * Only step 4 is intentionally B&W.
 */
export function thumbnailFor(post: ThumbInput): ResolvedThumb {
  if (post.data.thumbnail) {
    return { src: post.data.thumbnail, generated: false, source: "frontmatter" };
  }
  for (const ext of EXTS) {
    if (existsSync(`${PUBLIC_THUMB_DIR}${post.id}.${ext}`)) {
      return {
        src: `/thumbnails/${post.id}.${ext}`,
        generated: false,
        source: "file",
      };
    }
  }
  if (post.data.bodyImage) {
    return { src: post.data.bodyImage, generated: false, source: "body" };
  }
  // Step 4: generated B&W typographic cover (one static SVG per post id).
  return {
    src: `/cover/${post.id}.svg`,
    generated: true,
    source: "generated",
  };
}
