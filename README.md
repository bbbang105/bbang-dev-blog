**English** · [한국어](./README.ko.md)

# bbang.dev

[bbang.dev](https://bbang.dev) — Sangho Han's personal tech blog.
Notes on backend, infra, AI/LLM serving, and security. ~142 posts.
Full‑monospace, pure black‑and‑white, dotted editorial design.

## Stack

Astro 6 (static, zero integrations) · TypeScript + Content Collections ·
Shiki dual‑theme · hand‑written single CSS · deployed on Vercel.

## Develop

```bash
pnpm install
pnpm dev      # localhost:4321
pnpm build    # static dist/
pnpm lint     # astro check
```

## Write a post

Add `src/content/posts/<category>/<slug>.md`. Images go in
`public/assets/` (lowercase) and are referenced as `/assets/...`.
Plain Markdown + GFM only (no Obsidian syntax).

```yaml
---
title: "Title"          # required
date: 2026-04-01         # required
description: one line    # optional — meta/OG/RSS
category: "AI"           # optional — label
tags: [ai, llm]          # optional — clickable → /?q=tag
thumbnail: /assets/x.png # optional — card thumb
---
```

Folder = URL (`/posts/<folder>/<slug>/`) = collection. Reading time,
heading anchors, canonical, OG and JSON‑LD are all automatic.

## Features

Client‑side search · category collections · sticky/drawer TOC ·
heading & post link copy · reading progress · code copy · image
lightbox · light/dark · back‑to‑top · scoped EN/KO toggle on About ·
RSS · sitemap · llms.txt · GA4. Built dependency‑free.

## Deploy

Push to `main` → Vercel auto‑builds. Custom domain `bbang.dev`
(apex primary, `www` → apex). CI: `pnpm lint` + `pnpm build`.

---

© 2026 bbang.dev
