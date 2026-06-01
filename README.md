# Cosmos

A cinematic astronomy site for curious people — not scientists. Built with Next.js, React, and Tailwind CSS, designed for [Vercel](https://vercel.com).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Folder structure

```
src/
├── app/                    # Next.js App Router — URLs map to folders here
│   ├── layout.tsx          # Wraps every page (fonts, header, footer)
│   ├── page.tsx            # Homepage (/)
│   ├── globals.css         # Global styles, animations, starfield CSS
│   ├── solar-system/       # Field guide (/solar-system)
│   │   └── map/            # 3D interactive map (/solar-system/map)
│   └── asteroids/          # /asteroids (placeholder for now)
├── components/
│   ├── layout/             # Shared chrome (header, footer)
│   └── home/               # Homepage-only sections
└── lib/
    └── site.ts             # Site copy, nav links, feature cards (single source of truth)
```

### Why this layout?

- **`app/`** — Next.js 13+ convention: each `page.tsx` is a route. No extra routing config.
- **`components/`** — Reusable UI split by feature (`home/`) vs site-wide (`layout/`).
- **`lib/`** — Small helpers and constants that aren’t UI. Keeps text/links in one place so renaming “Cosmos” later is easy.

## Deploy

Push to GitHub and import the repo in Vercel, or:

```bash
npx vercel
```

## Roadmap (v1)

1. ✅ Homepage
2. ✅ Solar System Field Guide
3. ✅ 3D Solar Map (drag, zoom, click)
4. ✅ Asteroid Tracker (NASA NeoWs API)
