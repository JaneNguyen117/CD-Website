# CommsDock

Solo engineering practice marketing site.
Stack: Astro 6 + MDX, vanilla CSS with design tokens, AI-discoverable by design.

## Run locally

```powershell
npm install
npm run dev
```

Dev server: http://localhost:4321

## Commands

| Command            | Purpose                                |
| ------------------ | -------------------------------------- |
| `npm run dev`      | Start the dev server with HMR          |
| `npm run build`    | Build for production into `./dist`     |
| `npm run preview`  | Preview the production build locally   |
| `npm run check`    | Astro type-check                       |

## Project shape

```
src/
  layouts/        BaseLayout — head metadata + JSON-LD wrapper
  components/     SiteHeader, SiteFooter, Hero, StatusTerminal
  pages/          File-based routing (index.astro is the home page)
  styles/         tokens.css (design system) + global.css (reset/base)
public/
  robots.txt      Allows GPTBot, ClaudeBot, PerplexityBot, etc.
  llms.txt        Plain-prose site summary for LLM crawlers
  favicon.svg
design-explorations/
  hero-accent-comparison.html   Earlier accent-color comparison mockup
```

## Design system

All visual tokens live in `src/styles/tokens.css`. Change the accent color globally
by editing `--accent` / `--accent-glow` / `--accent-soft`. Current accent is
electric cyan (`#22d3ee`).
