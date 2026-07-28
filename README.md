# MatthewTorre.com

Personal site for Matthew Torre, built in the Truth Computing design language so the
two read as one practice.

React 18 · TypeScript · Vite 5 · react-router-dom 6. No CSS framework, no component
library — one stylesheet built on the same token set as truth-computing.com.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc && vite build → dist/
npm run preview  # serve the built output
```

`npm run dev` does **not** run the `/api/chat` function, so the chat widget will fail
locally. Use `vercel dev` if you need it.

## Layout

```
api/chat.ts          Vercel function; proxies to Groq for the chat widget
index.html           Entry point. Resolves the theme before first paint.
public/
  fonts/             Source Serif 4, self-hosted
  papers/            PDFs served by the Writing page
  images/            Logos and project covers
src/
  App.tsx            Routes
  components/        Nav, Footer, Layout, ChatWidget, ProjectCard, GitHubStrip
  pages/             Home, Work, Foundation, Writing, Experience, About
  data/              All page content lives here, typed
  hooks/             useTheme, useReveal
  styles/global.css  The whole design system
```

## Design system

Tokens, type scale, and interaction language mirror truth-computing.com:

| Token | Light | Dark |
| --- | --- | --- |
| `--bg` | `#ffffff` | `#0c0c0c` |
| `--ink` | `#0a0a0a` | `#efefef` |
| `--muted` | `#6b6b6b` | `#7a7a7a` |
| `--hairline` | `#e8e8e8` | `#242424` |
| `--accent` | `#0b5fff` | `#5a90ff` |
| `--tag-bg` | `#f4f4f4` | `#181818` |

Display type is Source Serif 4; body is the system sans stack at 18px/1.6. Never set
body copy in the serif, or a headline in the sans.

Theme is stored in `localStorage` and applied by an inline script in `index.html`
before first paint, so the page never flashes. `useTheme` reads that attribute rather
than recomputing it.

Copy follows [BRAND.md](../BRAND.md) in the Truth Computing repo: declarative,
specific, unhurried.

## Content

Everything on the pages comes from `src/data/`. Edit those files, not the JSX.

`src/data/foundation.ts` is **generated** from `truth-computing/foundations.html` —
76 modules across 6 domains. Every count on the Foundation page is derived from that
array at render time, so the stat strip can never drift from the list.

`src/data/paperSizes.ts` is likewise generated from the files in `public/papers`.
Papers above 8 MB open in a new tab instead of loading into the inline viewer.
Regenerate it if you replace a PDF.

## Deploying

Vercel, per `vercel.json` — it builds to `dist/` and serves `api/chat.ts` as a
function. `GROQ_API_KEY` must be set in the project environment.

`.github/workflows/deploy.yml` pushes `dist/` to GitHub Pages on manual dispatch.
That target has no serverless runtime, so the chat widget does not work there.
