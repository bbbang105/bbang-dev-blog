import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const SITE = "https://bbang.dev";
const TITLE = "bbang.dev";
const DESC = "Notes on backend, infrastructure, and building things.";

const xmlEscape = (s: string): string =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const url = (path: string): string =>
  SITE + path.split("/").map(encodeURIComponent).join("/");

export const GET: APIRoute = async () => {
  const posts = (await getCollection("posts")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  const items = posts
    .map((p) => {
      const link = url(`/posts/${p.id}/`);
      const desc = p.data.description ?? p.data.title;
      return (
        `    <item>\n` +
        `      <title>${xmlEscape(p.data.title)}</title>\n` +
        `      <link>${xmlEscape(link)}</link>\n` +
        `      <guid isPermaLink="true">${xmlEscape(link)}</guid>\n` +
        `      <pubDate>${p.data.date.toUTCString()}</pubDate>\n` +
        `      <description>${xmlEscape(desc)}</description>\n` +
        (p.data.category
          ? `      <category>${xmlEscape(p.data.category)}</category>\n`
          : "") +
        `    </item>`
      );
    })
    .join("\n");

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n` +
    `  <channel>\n` +
    `    <title>${xmlEscape(TITLE)}</title>\n` +
    `    <link>${SITE}/</link>\n` +
    `    <description>${xmlEscape(DESC)}</description>\n` +
    `    <language>ko</language>\n` +
    `    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />\n` +
    `    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>\n` +
    items +
    `\n  </channel>\n</rss>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};
