# Domino Data Systems — GitHub Pages Site

Professional company site for [domino-data-systems.github.io](https://domino-data-systems.github.io), built with **Next.js (static export)** + **Tailwind CSS**, with a **Jekyll-compatible content layer** for composability.

## Architecture (composability & extendibility)

```
content/*.yml          ← single source of truth (offerings, research, site meta)
        │
        ├─► Next.js build ──► out/ ──► GitHub Pages (primary UI)
        │
        └─► scripts/sync-jekyll-data.mjs ──► _data/*.yml (optional Jekyll/Liquid)

src/components/        ← presentation (swap layouts without touching content)
src/app/               ← routes (add pages under app/ as you grow)
public/                ← static assets (logo, founder photo)
```

| Layer | Role | Extend by |
|-------|------|-----------|
| **Content** | YAML in `content/` | Add rows to `offerings.yml` / `research.yml` |
| **Data bridge** | `_data/` mirror for Jekyll | Run `node scripts/sync-jekyll-data.mjs` |
| **UI** | React + Tailwind components | New components + sections on `page.tsx` |
| **Deploy** | GitHub Actions → Pages artifact | Push to `main`; Pages source = GitHub Actions |

**Why not run Next.js and Jekyll on the same URL at once?** GitHub Pages serves one static root. This repo uses Next static export as the primary site. Jekyll remains available for a future `_posts/` blog or hybrid workflow sharing the same YAML via `_data/`.

**Product showcase** ([Agentic Parallel Book Writer](https://domino-data-systems.github.io/agentic-parallel-book-writer/)) lives in its own repository and is linked from the offerings section.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
node scripts/sync-jekyll-data.mjs
npm run build
npx serve out
```

## GitHub Pages setup

1. Create GitHub org/user **`domino-data-systems`** (if needed).
2. Push this repo as **`domino-data-systems.github.io`** (recommended for root URL) **or** `domino-data-systems` with org Pages enabled.
3. **Settings → Pages → Build and deployment**
   - **Source:** GitHub Actions
4. Push to `main`. Workflow `.github/workflows/deploy-pages.yml` publishes `out/`.
5. Confirm **Environments → github-pages** exists (created on first deploy).

### Project site vs org root

| Repo name | Live URL |
|-----------|----------|
| `domino-data-systems.github.io` | `https://domino-data-systems.github.io/` |
| `domino-data-systems` (project Pages) | `https://domino-data-systems.github.io/domino-data-systems/` |

For project Pages, set in the workflow:

```yaml
NEXT_PUBLIC_BASE_PATH: "/domino-data-systems"
```

## Add a new offering or paper

Edit `content/offerings.yml` or `content/research.yml`, commit, push. No component changes required unless you want a new layout.

## Founder & links

- **Shyamal Suhana Chandra** — [shyamalschandra.github.io](https://shyamalschandra.github.io/)
- **Flagship product** — [Agentic Parallel Book Writer](https://domino-data-systems.github.io/agentic-parallel-book-writer/)

## License

© Domino Data Systems. All rights reserved unless otherwise noted.
