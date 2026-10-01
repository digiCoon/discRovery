# DiscRovery — Project Website

Project website and progress log for **DiscRovery**, an autonomous AI rover built by our classes FI16-AE/SI (application development and system integration) during a five-week practical project at damago. We run the project as a simulated start-up, and this site is our public face. Built with React and Vite.

🔗 **Live:** coming soon

## About the Project

Our rover recognizes hand gestures and handwritten digits, finds coloured balls (red, blue, green) and drives to them on its own. The website explains the project, introduces the team and documents our progress in a logbook, including the things that didn't work.

## Why This Site Looks the Way It Does

- **Dark, calm design** with three accent colours taken from the logo, each with one job: blue for interaction, green for active state and progress, red for the brand.
- **No photos of people.** Team members appear with name and role only, and everyone decides for themselves what is shown.
- **Content without code.** Logbook entries are plain Markdown files, so anyone on the team can post without touching a component.
- **Privacy first.** Fonts are self-hosted, there are no cookies, no tracking and no third-party embeds.

A note on how this was built: I built this site with the support of Claude (Anthropic's AI). The focus of our project is the rover, so the goal was to get an appealing website up and running quickly without taking time away from the core work. Architecture, structure, design and the overall direction were mine, with several key decisions made together with the team. Claude wrote a large part of the code based on these decisions; I reviewed, integrated and tested every change before it was committed.

## Tech Stack

- React
- Vite
- React Router
- react-markdown (logbook entries)
- react-icons (social media icons)
- CSS (no framework), design tokens as CSS custom properties
- Self-hosted fonts: Atkinson Hyperlegible Next, Geist Mono, Unbounded

## Deployment

Hosted on Cloudflare Pages. The site is fully static and uses only relative paths, so the domain can change without touching the code.

## Adding a Logbook Entry

1. Create a Markdown file in `src/content/logbook/`, named `YYYY-MM-DD-short-title.md`
2. Put images or videos for the entry in `public/logbook/`
3. Open a pull request — the entry shows up on the logbook page and, if it's among the three newest, on the home page

```markdown
---
title: First test drive
date: 2026-10-01
category: Rover
teaser: The rover finds the green ball.
image: /logbook/2026-10-01-test-drive.webp
imageAlt: Rover stopping in front of the green ball
---

The full text of the entry, written in **Markdown**.
```

`image`, `imageAlt` and `video` are optional.

## Structure

```
public/
 ├── logbook/              media for logbook entries
 └── favicon.png
src/
 ├── assets/
 │    ├── fonts/           variable fonts and their OFL licenses
 │    └── images/
 │         ├── 404.webp
 │         ├── hero.webp
 │         └── logo.webp
 ├── components/
 │    ├── BrandName.jsx
 │    ├── EntryModal.jsx
 │    ├── Footer.jsx
 │    ├── Header.jsx
 │    ├── Hero.jsx
 │    ├── LatestEntries.jsx
 │    ├── Layout.jsx
 │    ├── ScrollManager.jsx
 │    ├── SocialLinks.jsx
 │    └── Team.jsx
 ├── content/
 │    ├── logbook/         one Markdown file per entry
 │    ├── credits.js       media credits for the legal page
 │    ├── logbook.js       reads and sorts all entries
 │    ├── socials.js
 │    └── team.js
 ├── pages/
 │    ├── Home.jsx
 │    ├── Legal.jsx
 │    ├── Logbook.jsx
 │    └── NotFound.jsx
 ├── styles/
 │    ├── fonts.css
 │    ├── tokens.css       colours and fonts in one place
 │    ├── EntryModal.css
 │    ├── Footer.css
 │    ├── Header.css
 │    ├── Hero.css
 │    ├── LatestEntries.css
 │    ├── Legal.css
 │    ├── Logbook.css
 │    ├── NotFound.css
 │    ├── SocialLinks.css
 │    └── Team.css
 ├── App.jsx
 ├── index.css
 └── main.jsx
```

## Getting Started

```bash
npm install
npm run dev
```

## License

No license yet, all rights reserved. The fonts are licensed under the SIL Open Font License 1.1, see `src/assets/fonts/`.