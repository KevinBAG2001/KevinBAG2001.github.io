# Kevin Bryan Austria Galvan — Portfolio

Personal site for [kevinbag2001.github.io](https://kevinbag2001.github.io).

## Kevin OS (default)

The site boots into **Kevin OS** — a desktop-style portfolio (windows, dock, terminal, ES/EN) inspired by OS-metaphor portfolios but built with Kevin’s brand, projects, and copy from `brand-spec-v1`.

- **`/`** — Kevin OS desktop
- **`/classic`** — scrollable bento portfolio (previous layout)
- **`/projects/abyssan`** — standalone Abyssan case study

Open apps from the left sidebar or bottom dock. Terminal commands: `help`, `about`, `projects`, `stack`, `whoami`, `hire`, `clear`.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS 4
- Framer Motion
- React Router (static SPA)

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

This repository uses **GitHub Actions** (`.github/workflows/deploy-pages.yml`) to build and deploy the `dist/` folder.

### One-time repository settings

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).

After merging to `main`, the workflow publishes the site at https://kevinbag2001.github.io .

## Content

Copy and structure follow the approved brand spec (`brand-spec-v1`). CV PDFs live in `public/assets/cv/`.
