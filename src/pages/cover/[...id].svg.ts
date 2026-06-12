import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

// Step 4 of the thumbnail chain: a generated B&W monospace typographic
// cover. Pure paper/ink, dashed frame, Sarasa-style mono — reads as an
// intentional editorial cover, NOT a "replace me" sticker. One static SVG
// per post id; replaced automatically if a real image is dropped.

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Naive width-aware wrapper (monospace ≈ fixed advance; CJK ≈ 2 cells).
function wrap(title: string, maxCells: number, maxLines: number): string[] {
  const words = title.split(/(\s+)/);
  const lines: string[] = [];
  let cur = "";
  const cells = (s: string) =>
    [...s].reduce((n, ch) => n + (ch.charCodeAt(0) > 0x2e80 ? 2 : 1), 0);
  for (const w of words) {
    if (cells(cur + w) > maxCells && cur.trim()) {
      lines.push(cur.trim());
      cur = w;
      if (lines.length === maxLines - 1) break;
    } else {
      cur += w;
    }
  }
  if (cur.trim() && lines.length < maxLines) lines.push(cur.trim());
  if (lines.length === 0) lines.push(title.slice(0, maxCells));
  // ellipsis if truncated
  const consumed = lines.join("").length;
  if (consumed < title.replace(/\s+/g, " ").length && lines.length) {
    lines[lines.length - 1] =
      lines[lines.length - 1].replace(/\s+$/, "") + " …";
  }
  return lines;
}

export const getStaticPaths = async () => {
  const posts = await getCollection("posts");
  return posts.map((p) => ({
    params: { id: p.id },
    props: {
      title: p.data.title,
      category: p.data.category ?? "",
      date: p.data.date.toISOString().slice(0, 10).replace(/-/g, "."),
    },
  }));
};

export const GET: APIRoute = ({ props }) => {
  const { title, category, date } = props as {
    title: string;
    category: string;
    date: string;
  };
  const lines = wrap(title, 28, 4);
  const fs = lines.length > 3 ? 52 : lines.length > 2 ? 62 : 72;
  const startY = 500 - ((lines.length - 1) * fs * 1.18) / 2;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" font-family="ui-monospace, 'Sarasa Mono K', monospace">
  <rect width="1600" height="1000" fill="#ffffff"/>
  <rect x="28" y="28" width="1544" height="944" fill="none" stroke="#161616" stroke-width="3" stroke-dasharray="14 10"/>
  <text x="80" y="120" font-size="30" letter-spacing="8" font-weight="700" fill="#161616">${esc(
    (category || "POST").toUpperCase(),
  )}</text>
  <line x1="80" y1="150" x2="1520" y2="150" stroke="#161616" stroke-width="2" stroke-dasharray="6 8"/>
  ${lines
    .map(
      (ln, i) =>
        `<text x="80" y="${
          startY + i * fs * 1.18
        }" font-size="${fs}" font-weight="700" fill="#161616" letter-spacing="-1">${esc(
          ln,
        )}</text>`,
    )
    .join("\n  ")}
  <line x1="80" y1="880" x2="1520" y2="880" stroke="#161616" stroke-width="2" stroke-dasharray="6 8"/>
  <text x="80" y="930" font-size="28" letter-spacing="6" font-weight="700" fill="#161616">${esc(
    date,
  )}</text>
  <text x="1520" y="930" font-size="26" letter-spacing="4" text-anchor="end" fill="#161616">bbang.dev</text>
</svg>`;

  return new Response(svg, {
    headers: { "Content-Type": "image/svg+xml; charset=utf-8" },
  });
};
