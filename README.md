# Cosmos

Cosmos is an astronomy website built to help non-experts explore space without digging through technical documentation.

Current features include an interactive Solar System Explorer, a 3D Solar Map, and additional tools in development. Built with Next.js, React, and Tailwind CSS, designed for [Vercel](https://vercel.com).

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

### Project Goals

- Make astronomy approachable for non-experts
- Turn complicated space data into intuitive visualizations
- Create tools that are useful in a classroom, at home, or for anyone who is simply curious about space.

## Deploy

Push to GitHub and import the repo in Vercel, or:

```bash
npx vercel
```

## Roadmap (v1)

1. ✅ Homepage
2. ✅ Solar System Field Guide
3. ✅ 3D Solar Map (drag, zoom, click)
4. 🚧 Asteroid Tracker (currently in development)
