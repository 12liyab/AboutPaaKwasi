# paakwasi.dot.dev

A personal portfolio built with Vite, React, TypeScript, Tailwind CSS and shadcn/ui-style components. This repository contains the source for a fast, accessible, and responsive single-page portfolio site.

## Table of contents

- About
- Features
- Tech stack
- Getting started
  - Prerequisites
  - Install
  - Available scripts
- Project structure
- Deployment
- Contributing
- Troubleshooting
- License & contact

## About

This project is a modern portfolio template that demonstrates:

- A lightweight Vite + React + TypeScript setup
- Tailwind CSS for utility-first styling
- Radix UI primitives and shadcn-style components for accessible UI
- React Router for client-side routing
- Example sections: Hero, About, Experience, Projects, Testimonials, Contact

The code is organized to be easy to customize and redeploy for your own personal site.

## Features

- Fast dev experience with Vite HMR
- Accessible UI components using Radix and shadcn patterns
- TypeScript types for safer code
- Tailwind CSS with animations and responsive layout
- Example project assets and data-driven components

## Tech stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- Radix UI
- shadcn-style component patterns (under `src/components/ui/`)
- react-router-dom
- @tanstack/react-query (present for data fetching patterns)

## Getting started

### Prerequisites

- Node.js (recommended >= 18)
- A package manager (npm, pnpm, or yarn). This project was developed with pnpm/bun in mind but works with npm as well.

> Note: The project includes a `bun.lockb` in the repo, but the scripts shown below use the standard npm scripts. You can use bun or pnpm if you prefer.

### Install

1. Clone the repo

   git clone https://github.com/12liyab/paakwasi-dot-dev.git
   cd paakwasi-dot-dev

2. Install dependencies

   npm install

If you use pnpm or bun, run:

   pnpm install
   # or
   bun install

### Available scripts

The project scripts are defined in `package.json`. Use PowerShell on Windows or your preferred terminal.

- npm run dev — Start the development server (Vite)
- npm run build — Build production assets (Vite)
- npm run build:dev — Build with development mode
- npm run preview — Preview production build locally
- npm run lint — Run ESLint across the project

Example (PowerShell):

```
npm run dev
```

## Project structure

Key files and folders:

- `index.html` — App entry HTML
- `src/main.tsx` — React entry file
- `src/App.tsx` — Top-level app and routes
- `src/pages/` — Page-level components (Index, NotFound)
- `src/components/` — Reusable UI components and page sections
- `src/components/ui/` — Low-level UI primitives (shadcn-style)
- `src/assets/` — Images and static assets used by components
- `tailwind.config.ts` & `postcss.config.js` — Tailwind / PostCSS config
- `vite.config.ts` — Vite config (React SWC plugin)

## Deployment

The build output from `npm run build` is static and can be deployed to any static hosting provider such as Vercel, Netlify, GitHub Pages, Cloudflare Pages, or S3 + CloudFront.

Recommended steps for Vercel

1. Push to a GitHub repository.
2. Import the repository at vercel.com and set the framework preset to "Vite" or "Other".
3. Use the default build command `npm run build` and output directory `dist`.

Notes for Netlify / GitHub Pages / Cloudflare Pages

- Build command: `npm run build`
- Publish directory: `dist`

## Contributing

Small contributions and PRs are welcome. Suggested contribution workflow:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Make changes and add tests where applicable.
4. Run lint and dev: `npm run lint && npm run dev`
5. Commit and open a PR describing your changes.

If you'd like help customizing the site (adding sections, changing styles, or wiring real data sources), open an issue or start a discussion.

## Troubleshooting

- If you see dependency errors during install, try clearing lockfiles and reinstalling:

  rm -rf node_modules package-lock.json; npm install

- If Vite fails to start, make sure you have a compatible Node version (>= 18) and that any environment variables used are set.

- For TypeScript/ESLint errors, run `npm run lint` and follow the messages. You can also run `tsc --noEmit` to see type errors.

## License & contact

This project does not include an explicit license file. If you want one, consider adding an `LICENSE` (MIT is common for portfolio templates).

Author / Contact

- Repository owner: 12liyab

---

If you'd like, I can also:

- add a minimal `LICENSE` file
- add a `README` badge for Netlify/Vercel
- generate a short `CONTRIBUTING.md` and code of conduct

Let me know which of those you'd like next.
