# Jason D'souza — Portfolio

Personal portfolio site for Jason D'souza, Full Stack Software Engineer. Built to present work, experience, and writing clearly — no flashy tricks, just straightforward communication.

Live at: [jvdsouza.github.io/portfolio](https://jvdsouza.github.io/portfolio)

## Stack

- [Astro v6](https://astro.build) — static site generator
- Content Collections — project data and preview pages authored in Markdown
- Deployed to GitHub Pages via GitHub Actions on push to `main`

## Structure

```
src/
  content/
    projects/<slug>/
      index.md        # frontmatter (title, tags, status, summary) + optional prose body
      *.png           # co-located images, referenced as ./filename.png in markdown
  pages/
    index.astro       # homepage
    projects.astro    # project listing
    projects/
      [slug].astro    # generated preview page (only for projects with a prose body)
    resume.astro
    contact.astro
  layouts/
    Layout.astro
  components/
    Nav.astro
  content.config.ts   # Zod schema for the projects collection
  config.ts           # site-wide personal info, read from .env
```

## Local development

```sh
pnpm install
pnpm dev              # http://localhost:4321/portfolio
pnpm build            # production build to dist/
```

Copy `.env.example` to `.env` and fill in your details before running.

## Adding a project

Create `src/content/projects/<slug>/index.md`:

```md
---
title: Project Name
tags: [Tag]
status: In progress
order: 4
summary:
  - One sentence shown on the projects listing.
link: null            # or: { title: 'GitHub', url: 'https://...' }
---

Optional preview content goes here. Leave the body empty and no preview page is generated.

![Screenshot](./screenshot.png)
*Caption text — italics after an image render as a caption*
```
