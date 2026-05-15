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

## EC2 deployment

The production EC2 host serves the static Astro build from `/var/www/commsdock`
with Nginx.

First-time server setup after cloning the repo:

```bash
cd ~/commsdock-site
chmod +x scripts/deploy.sh
sudo cp deploy/nginx/commsdock.conf /etc/nginx/sites-available/commsdock
sudo nginx -t
sudo systemctl reload nginx
```

Deploy future updates from the server:

```bash
~/commsdock-site/scripts/deploy.sh
```

The Nginx config makes `https://commsdock.com` canonical and redirects
`www.commsdock.com` to the root domain.

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
