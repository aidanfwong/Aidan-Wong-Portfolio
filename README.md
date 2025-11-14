# Aidan Wong Portfolio

This repository contains a modernized React + TypeScript implementation of my personal portfolio. The frontend source lives in [`frontend/`](frontend/) and produces the static assets served from the repository root after running `npm run build`, allowing the deployed site to rely on the React Router-powered experience.

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

## Backend API

The FastAPI service in [`backend/`](backend/) exposes structured JSON sourced from the same project and experience content that powers the frontend components.

### Setup

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
make dev
```

The `make dev` target runs `uvicorn main:app --reload --host 0.0.0.0 --port 8000`. Once booted, the API is available at [http://localhost:8000](http://localhost:8000) with the following endpoints:

| Endpoint | Description |
| --- | --- |
| `/projects` | Returns highlighted portfolio projects with technology stacks. |
| `/experience` | Provides the chronological experience timeline and role summaries. |
| `/skills` | Lists proficiency metadata derived from the technologies used across the site. |
| `/insights` | Calculates a live skill-growth index, category deltas, and timeline momentum. |

### Frontend integration

The React app reads from these endpoints using `fetch`. Set `VITE_API_URL` in `frontend/.env` if you need to point at a non-default API location; otherwise it falls back to `http://localhost:8000` during development.

## Styling primitives

Tailwind CSS powers layout and responsive primitives. Utility classes are used to build the hero, about grid, projects carousel, and experience timeline so they adapt cleanly across breakpoints.

## Deployment

The project is ready to deploy to GitHub Pages:

1. Build the project: `npm run build`
2. Deploy: `npm run deploy`

You can also import the `frontend/` directory into Vercel for automated previews and production builds—Vercel detects Vite projects automatically. Set the build command to `npm run build` and the output directory to `dist`. If you serve the site from this repository (e.g., GitHub Pages), publish the contents of `frontend/dist/` at the repository root so routing works without manual redirects.

## Legacy site

The legacy static HTML, CSS, and JavaScript files have been removed from the repository root, and the published site now serves the bundled React build. All new development should happen inside the React application.

Binary image and resume assets were replaced with gradient-based placeholders and a configurable resume link. Update `frontend/src/data/profile.ts` or the React data layer with your preferred URLs if you want to restore direct downloads.
