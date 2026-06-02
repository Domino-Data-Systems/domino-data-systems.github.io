# Composable architecture for Domino Data Systems on GitHub Pages

## Goals

1. **Snazzy, professional UI** — React + Tailwind, brand navy + accent blue, motion-friendly layout.
2. **Easy extensions** — New products/papers = YAML edits, not refactors.
3. **GitHub Pages compatible** — Static export only; no Node server in production.
4. **Jekyll interoperability** — Same data can feed Liquid templates later (blog, legacy pages).

## Stack roles

### Next.js (App Router, `output: "export"`)

- Builds to static HTML/CSS/JS in `out/`.
- Components compose the homepage: `Hero`, `OfferingsGrid`, `ResearchSection`, `FounderSection`.
- Add routes by creating `src/app/<route>/page.tsx` (e.g. `/about`, `/careers`).

### Tailwind CSS v4

- Design tokens in `globals.css` (`@theme`): brand navy, accent blue, surface gray.
- Utility classes keep styling local to components; no global CSS sprawl.

### Jekyll (optional parallel)

- `_config.yml` documents site metadata for Jekyll tooling.
- `content/*.yml` → copied to `_data/*.yml` before build.
- Future: `_posts/` for blog; `{% for item in site.data.offerings %}` in Liquid layouts.
- `.nojekyll` in `out/` prevents Jekyll from re-processing the Next export on Pages.

### GitHub Actions

- `build` job: `npm ci` → sync YAML → `next build` → upload `out/` artifact.
- `deploy` job: official `deploy-pages` action (requires Pages source = GitHub Actions).

## Composability patterns

### 1. Content-driven sections

All list data lives in YAML. TypeScript types in `src/lib/content.ts` enforce shape at build time.

### 2. Presentation components

Each section is an isolated component accepting typed props. Swap `OfferingsGrid` for a carousel without touching YAML.

### 3. Multi-repo product showcases

The book-writer showcase is a **separate deployable** under `/agentic-parallel-book-writer/`. The corporate site links outward; each product can version independently.

### 4. Asset path helper

`assetPath()` respects `NEXT_PUBLIC_BASE_PATH` for project Pages subpaths.

## Extension cookbook

| Task | Action |
|------|--------|
| New product card | Add entry to `content/offerings.yml` |
| New research entry | Add entry to `content/research.yml` |
| New top-level page | `src/app/about/page.tsx` + link in `content/site.yml` nav |
| Blog (Jekyll) | Add `_posts/`, Jekyll layout reading `_data/`, or migrate posts to MDX in Next |
| CI preview | `workflow_dispatch` on deploy workflow |

## Visual identity

- Logo and founder portrait in `public/`.
- Domino motif in hero (CSS decorative tiles) echoes brand mark.
- Dark research band contrasts light product grid for hierarchy.
