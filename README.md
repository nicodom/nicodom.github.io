# Personal Website

Personal portfolio/resume site, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Project Structure

```text
/
├── public/
│   ├── images/          # headshot, etc.
│   └── slides/          # slide deck PDFs
├── src/
│   ├── content/
│   │   ├── speaking/    # one .md file per talk
│   │   └── community/   # one .md file per community activity
│   ├── layouts/
│   └── pages/
└── astro.config.mjs
```

## Commands

| Command           | Action                                       |
| :----------------- | :------------------------------------------- |
| `npm install`       | Install dependencies                         |
| `npm run dev`       | Start local dev server at `localhost:4321`   |
| `npm run build`     | Build production site to `./dist/`           |
| `npm run preview`   | Preview the build locally before deploying   |

## Deployment

Deploys automatically to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`.

One-time setup on GitHub, after pushing this repo:

1. Repo Settings → Pages → Source: **GitHub Actions**.
2. Update `site` in `astro.config.mjs` to match your GitHub Pages URL.
