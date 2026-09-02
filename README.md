# 102031 · collab.codes Landing Site

Part of **collab.codes**.

`102031` is the **public landing site** of collab.codes — the marketing pages,
not part of the product itself.

## What lives here

- `l2/index.*`, `l2/about.*` — the page sources (`.ts` / `.html` / `.less` /
  `.defs.ts`), the usual collab file quartet.
- `l2/www/en/` — the generated static site plus `assets/`.
- `l2/dist/` — dated build outputs (`version.json` points at the current one).
- `l2/project.ts` — build config: it delegates `generateDist` and `preview` to
  [`102032`](../mls-102032), sets the page title and the site meta tags.

Two languages are declared in `l5/project.json` (`/en/` and `/pt/`).

## Notes

- Built and published as a static site; [`102032`](../mls-102032) provides the
  landing-page tooling that compiles it.
