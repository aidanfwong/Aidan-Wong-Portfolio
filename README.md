# Aidan Wong Portfolio

This repository contains a modernized React + TypeScript implementation of my personal portfolio. The new frontend lives in [`frontend/`](frontend/) and recreates the static HTML pages (`index.html`, `projects.html`, `experience.html`) as routed, data-driven components.

## Getting started

```bash
cd frontend
npm install
npm run dev
```

The development server runs on [http://localhost:5173](http://localhost:5173) by default.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Type-check and generate a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint on the project files. |
| `npm run format` | Format source files with Prettier. |
| `npm run deploy` | Publish the `dist/` directory to GitHub Pages via `gh-pages`. |

## Styling primitives

Tailwind CSS powers layout and responsive primitives. Utility classes are used to build the hero, about grid, projects carousel, and experience timeline so they adapt cleanly across breakpoints.

## Deployment

The project is ready to deploy to GitHub Pages:

1. Build the project: `npm run build`
2. Deploy: `npm run deploy`

You can also import the `frontend/` directory into Vercel for automated previews and production builds—Vercel detects Vite projects automatically. Set the build command to `npm run build` and the output directory to `dist`.

## Legacy site

The original static site artifacts remain at the repository root for reference. All new development should happen inside the React application.

Binary image and resume assets were replaced with gradient-based placeholders and a configurable resume link. Update `frontend/src/data/profile.ts` or the static HTML files with your preferred URLs if you want to restore direct downloads.
