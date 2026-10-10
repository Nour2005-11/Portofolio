# Nour Akram Dabour — AI Engineer Portfolio

Premium personal portfolio for **Nour Akram Dabour**, Artificial Intelligence Engineering student.

## Features

- Dark / Light theme (صباح ومساء) — toggle in the navbar, preference saved
- Animated photo frame: rotating gradient border + soft glow
- Subtle entrance animations on the hero
- Fully responsive, accessible, ready to publish

## Stack

- React + TypeScript
- Vite
- Tailwind CSS v4

## Quick start (local)

```bash
cd portfolio
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to the `dist/` folder. You can preview it with:

```bash
npm run preview
```

## Publish on a website (deploy)

### Option 1 — Vercel (recommended, free)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo.
3. Framework: Vite (auto-detected). Build command: `npm run build`. Output: `dist`.
4. Deploy. You get a free `*.vercel.app` link (and can add a custom domain).

### Option 2 — Netlify (free)

1. Push to GitHub, or drag-and-drop the `dist` folder after `npm run build`.
2. On [netlify.com](https://netlify.com): New site → Import from Git (or drag `dist`).
3. Build: `npm run build` · Publish directory: `dist`.

### Option 3 — GitHub Pages

1. In `vite.config.ts` set `base: '/your-repo-name/'` if the site is not at the root.
2. Build, then push the `dist` contents to the `gh-pages` branch (or use the GitHub Pages action).

After deploy, share the public URL. Replace `public/nour-photo.jpg` and `public/resume.pdf` anytime and rebuild/redeploy.

## Project structure

```
src/
  components/   # Navbar, Footer, Section, Icons
  context/      # ThemeContext (dark / light)
  sections/     # Hero, About, Projects, etc.
  data/         # projects.ts, certifications.ts, skills.ts, experience.ts
  App.tsx
public/
  nour-photo.jpg   # Personal photo
  resume.pdf       # CV
  favicon.svg
```

## Updating content

- **Projects**: edit `src/data/projects.ts`
- **Certifications**: edit `src/data/certifications.ts`
- **Skills / Core areas**: edit `src/data/skills.ts`
- **Experience & social links**: edit `src/data/experience.ts`
- **Photo**: replace `public/nour-photo.jpg`
- **Resume**: replace `public/resume.pdf`

## Design

- Dark: background `#0A0A0A`, accent `#00D9C0`
- Light: soft off-white background, same accent family
- Minimal, professional AI / technology aesthetic
