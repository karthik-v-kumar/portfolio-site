# portfolio-site
Personal portfolio of Karthik Kumar — AI product leader in life sciences who builds and ships.

Build spec: [BUILD_BRIEF.md](BUILD_BRIEF.md). Current milestone: **M0** (scaffolding and one design mock).

## Stack

Astro (static output) and hand-written CSS. No CSS framework, no component library, no client JavaScript.

- `src/content/` — every word on the site, as content collections. Copy edits never touch components.
- `src/styles/global.css` — the whole design system: tokens, type, grid.
- `src/assets/fonts/` — self-hosted Newsreader, Archivo and IBM Plex Mono (SIL OFL).
- `scripts/check-copy.mjs` — fails if a banned phrase from the brief reaches the built HTML.

## Run

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build && npm run check:copy
```
