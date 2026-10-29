# DiscRovery — Project Website

Project website and progress log for **DiscRovery**, an autonomous AI rover built by our classes FI16-AE/SI (application development and system integration) during a five-week practical project at damago. We ran the project as a simulated start-up, and this site is our public face. Built with React and Vite.

🔗 **Live:** [discrovery.de](https://discrovery.de)<br>
🔗 **Permanent address:** [discrovery.pages.dev](https://discrovery.pages.dev), stays online even if the domain expires

## About the Project

Our two rovers, **Graf Zahl** and **Ernie**, recognize hand gestures and handwritten digits, find coloured balls (red, blue, green) and drive to them on their own. The website explains the project, introduces the team and documents our progress in a logbook, including the things that didn't work.

The project is finished. In the final presentation, two of the three challenges ran successfully; in the third, the rover found the first ball and stopped there. The full story is in the last logbook entry.

## What's on the Site

- **Home:** project intro, the mission with the three challenges and their final status, a teaser for the mini game, the latest logbook entries, the plan and the team
- **Logbook:** all entries as a timeline, each one opens in a dialog; images open larger in a lightbox
- **Testfahrt:** the mini game ROVV-Y with rules and a leaderboard. The leaderboard is stored in the player's own browser only, nothing is sent anywhere
- **Impressum & Datenschutz**

## Why This Site Looks the Way It Does

- **Dark, calm design** with three accent colours taken from the logo, each with one job: blue for interaction, green for active state and progress, red for the brand.
- **No photos of people.** Team members appear with name and role only, and everyone decides for themselves what is shown.
- **Content without code.** Logbook entries are plain Markdown files, and team, challenges and plan live in simple data files, so anyone on the team can update content without touching a component.
- **Privacy first.** Fonts are self-hosted, there are no cookies, no tracking and no third-party embeds.

A note on how this was built: I built this site with the support of Claude (Anthropic's AI). The focus of our project is the rover, so the goal was to get an appealing website up and running quickly without taking time away from the core work. Architecture, structure, design and the overall direction were mine, with several key decisions made together with the team. Claude wrote a large part of the code based on these decisions; I reviewed, integrated and tested every change before it was committed.

## Tech Stack

- React
- Vite
- React Router
- react-markdown (logbook entries)
- react-icons (single icons such as the finish flag and the zoom badge)
- CSS (no framework), design tokens as CSS custom properties
- Self-hosted fonts: Atkinson Hyperlegible Next, Geist Mono, Unbounded

## Deployment

Hosted on Cloudflare Pages, connected to this repository:

- Every push to `main` is built and deployed automatically.
- The site is reachable at [discrovery.de](https://discrovery.de) and permanently at [discrovery.pages.dev](https://discrovery.pages.dev). The second address belongs to the Cloudflare project itself and keeps working without the custom domain.
- Other branches and pull requests get their own preview build, which never touches the live site.
- `main` is protected: changes go through a pull request and are merged with squash.
- `robots.txt` and `sitemap.xml` are generated during the build. AI training crawlers are blocked, and the raw game file under `/game/` is excluded from search engines.
- The domain is taken from the `SITE_URL` environment variable (default `https://discrovery.de`). The site only uses relative paths, so the domain can change without touching the code.

## Updating Content

| What | Where |
|---|---|
| Logbook entry | new file in `src/content/logbook/` |
| Team | `src/content/team.js` |
| Challenges and their status | `src/content/challenges.js` |
| Plan | `src/content/plan.js` |

### Adding a Logbook Entry

1. Create a Markdown file in `src/content/logbook/`, named `YYYY-MM-DD-short-title.md`
2. Put images or videos for the entry in `public/logbook/`
3. Open a pull request — the entry shows up on the logbook page and, if it's among the three newest, on the home page

```markdown
---
title: First test drive
date: 2026-10-01
day: 4
teaser: The rover finds the green ball.
---

The full text of the entry, written in **Markdown**.

![Rover stopping in front of the green ball](/logbook/2026-10-01-test-drive.webp)
```

`day` and `video` are optional. Images go into the text as normal Markdown images and open larger on click. Diagrams whose file name contains `-flowchart` are shown as a full-width preview.

## Structure

```
public/
 ├── favicon.svg
 ├── og-image.jpg          preview image for social media links
 ├── game/
 │    ├── rovv-y.html      the mini game, embedded on /spiel
 │    └── fonts/
 └── logbook/              media for logbook entries
src/
 ├── assets/
 │    ├── fonts/           variable fonts and their OFL licenses
 │    └── images/
 │         ├── 404.webp
 │         ├── damago_logo_weiss.webp
 │         ├── hero.webp
 │         └── logo-white.webp
 ├── components/
 │    ├── BrandName.jsx
 │    ├── Challenges.jsx
 │    ├── EntryModal.jsx
 │    ├── Footer.jsx
 │    ├── GameLeaderboard.jsx
 │    ├── GameRules.jsx
 │    ├── GameTeaser.jsx
 │    ├── Header.jsx
 │    ├── Hero.jsx
 │    ├── ImageLightbox.jsx
 │    ├── LatestEntries.jsx
 │    ├── Layout.jsx
 │    ├── Plan.jsx
 │    ├── ScrollManager.jsx
 │    └── Team.jsx
 ├── content/
 │    ├── logbook/         one Markdown file per entry
 │    ├── challenges.js
 │    ├── logbook.js       reads and sorts all entries
 │    ├── plan.js
 │    └── team.js
 ├── pages/
 │    ├── Game.jsx
 │    ├── Home.jsx
 │    ├── Legal.jsx
 │    ├── Logbook.jsx
 │    └── NotFound.jsx
 ├── styles/
 │    ├── fonts.css
 │    ├── tokens.css       colours and fonts in one place
 │    ├── Challenges.css
 │    ├── EntryModal.css
 │    ├── Footer.css
 │    ├── Game.css
 │    ├── GameTeaser.css
 │    ├── Header.css
 │    ├── Hero.css
 │    ├── ImageLightbox.css
 │    ├── LatestEntries.css
 │    ├── Legal.css
 │    ├── Logbook.css
 │    ├── NotFound.css
 │    ├── Plan.css
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