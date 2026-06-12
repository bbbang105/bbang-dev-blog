# bbang.dev

[https://bbang.dev](https://bbang.dev) — Sangho Han's personal tech blog.

## Tech stack

- **Astro 6** — static output, **zero external integrations** (minimal‑deps
  principle)
- **TypeScript** + Content Collections (Zod schema validation)
- **Shiki** dual‑theme code highlighting (github‑light / tokyo‑night)
- Hand‑written single CSS (`src/styles/global.css`); font Sarasa Mono K
  (self‑hosted)
- Client JS is islands only — search, pagination, TOC, progress bar,
  copy, lightbox, back‑to‑top
- Deployed on **Vercel** (auto build, auto TLS). `.dev` is HSTS‑preloaded
  → HTTPS enforced

## Local development

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # static output to dist/ (146 pages)
pnpm preview  # serve the build
pnpm lint     # astro check (types)
```

## Writing a post

Write in the Obsidian vault, then copy the `.md` into
`src/content/posts/<category>/<slug>.md`, put images in `public/assets/`,
commit and push — Vercel rebuilds. (Not an Obsidian integration; it just
renders the `.md` files.)

### Frontmatter

```yaml
---
title: "Post title"        # required (string)
date: 2026-04-01           # required (date)
description: one‑line      # optional — meta / OG / RSS / shown under title
category: "AI"             # optional — meta label
tags: [ai, llm]            # optional — meta + click → /?q=tag search
thumbnail: /assets/x.png   # optional — list‑card thumbnail
---
```

- Validated by Zod. Missing/mistyped `title` or `date` fails the build;
  unknown keys are ignored.
- The folder a post lives in is its URL (`/posts/<folder>/<slug>/`) and
  its collection.
- Image paths must be **lowercase `/assets/`** (uppercase `Assets` breaks
  local dev).
- Body headings: use `#` (section) / `##` (sub) / `###` (detail)
  consistently.
- No Obsidian‑specific syntax (`[[ ]]`, `![[ ]]`, `> [!callout]`) —
  standard Markdown + GFM (tables) only.
- Reading time, heading anchors, canonical, OG and JSON‑LD are automatic.

## Features

- Home: numbered ledger feed + full client‑side search (keyword `<mark>`
  highlight) + pagination
- Collections: category accordion / meta tags click → `/?q=tag` filter
- Post: TOC (desktop sticky rail / mobile drawer) with scrollspy, heading
  link anchors (copy section URL), copy post link, reading time, reading
  progress bar, code copy, image lightbox, back‑to‑top
- Theme: light by default (no flash), dark toggle — a soft invert
  (`#fff ↔ #161616` / `#f4f4f4`), no color
- i18n: header/footer always English; the About page has its own scoped
  ko/en toggle
- Accessibility: respects `prefers-reduced-motion`, dotted `:focus-visible`
- About: kiko intro + self‑built / career / certifications portfolio

## SEO / GEO

- canonical (Korean slugs %‑encoded) · OG · Twitter Card
- JSON‑LD `@graph`: WebSite + Person (sameAs) + BlogPosting on posts
- `sitemap.xml` (all URLs) · `rss.xml` (all posts) · `robots.txt` ·
  `llms.txt`
- Google Analytics 4
- All written by hand (zero deps). hreflang is intentionally omitted —
  it's a single‑URL client toggle, not per‑language URLs.

## Deployment

GitHub `bbbang105/bbang-dev-blog` → Vercel (auto build on push to `main`).
Custom domain `bbang.dev` (apex primary, `www` → apex 307), DNS via
registrar A/CNAME records. CI: `pnpm lint` + `pnpm build` (must be green).

---

© 2026 bbang.dev
