import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

// Canonical host (matches astro.config.mjs `site`). apex; www 307-redirects here.
const SITE = "https://bbang.dev";

const xmlEscape = (s: string): string =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

// Percent-encode each path segment so non-ASCII (Korean) slugs are valid in
// <loc>, preserving leading/trailing slashes, then XML-escape the result.
const loc = (path: string): string =>
  xmlEscape(SITE + path.split("/").map(encodeURIComponent).join("/"));

export const GET: APIRoute = async () => {
  const posts = await getCollection("posts");
  const today = new Date().toISOString().slice(0, 10);

  const urls: { path: string; lastmod: string }[] = [
    { path: "/", lastmod: today },
    { path: "/about/", lastmod: today },
    { path: "/collections/", lastmod: today },
    ...posts.map((p) => ({
      path: `/posts/${p.id}/`,
      lastmod: p.data.date.toISOString().slice(0, 10),
    })),
  ];

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (u) =>
          `  <url><loc>${loc(u.path)}</loc><lastmod>${u.lastmod}</lastmod></url>`,
      )
      .join("\n") +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
