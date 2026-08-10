import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://bbang.dev",
  markdown: {
    // Korean text breaks smartypants' open/close quote detection (renders ”…”).
    smartypants: false,
    // Astro's built-in Shiki. Dual theme: github-light / tokyo-night (dark).
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "tokyo-night",
      },
      wrap: true,
    },
  },
  // No external integrations: hand-written CSS, no Tailwind, minimal deps.
});
