# New Dawn of Gaming

This project is an Astro-based frontend for **New Dawn of Gaming**, a premium event on **11 July 2026** at **The Loop, Georgia Tech, Atlanta**.

## Tech Stack

- **Framework:** [Astro 6.x](https://astro.build/)
- **UI Library:** [Vue 3.x](https://vuejs.org/) (SFCs)
- **Styling:** [Tailwind CSS 4.x](https://tailwindcss.com/) (using `@tailwindcss/vite` — CSS-first, no config file)
- **Animations:** [Motion](https://motion.dev/)
- **Analytics:** `@vercel/analytics`

## Event Format (Four Acts, One Day — 11 July 2026)

| Act | Time | Description |
| --- | --- | --- |
| Act I — Gaming Tournament | 1:00–3:30 PM | Competitive bracket play, prizes, and awards |
| Act II — Fireside Chat | 4:00 PM | Finance, gaming & policy leaders on responsible gaming + cross-Atlantic opportunity |
| Act III — Experience Zones | All Day | Dedicated spaces for networking, finance, and gaming innovation |
| Act IV — Post-Match Party | 8:00 PM onwards | Closing celebration in premium lounge setting |

## Project Structure

- `src/pages/`: Main entry points (`index.astro`, `invite.astro`, `speakers.astro`).
- `src/components/`: Mix of `.astro` (static/server-side) and `.vue` (interactive) components.
- `src/layouts/`: Base layout (`Layout.astro`) using standard slots.
- `src/lib/cms.ts`: Integration logic for Strapi CMS (fetching speakers, etc.). Optional — falls back to dummy data.
- `src/styles/global.css`: Global styles and Tailwind 4 configuration.
- `public/flag-panama.png`: Panama flag used in hero section.
- `public/flag-england.webp`: England flag used in hero section.

## Section Map (anchor IDs)

| Section | Component | Anchor |
| --- | --- | --- |
| About / Event Vision | `NoiseStageSection.astro` | `#lineup` |
| Day Agenda | `EventCards.astro` | `#tickets` |
| Session Themes | `SpeakersShowcaseSection.astro` | `#speakers` |
| Partnership Packages | `PreviousYearsVideoSection.vue` | `#sponsors` |
| Venue | `VenueCarouselSection.astro` | `#venue` |

## Key Features

- **HeroSection.vue**: Interactive hero with Motion animations and a scroll-synced marquee. Displays real flag images (`/flag-panama.png` vs `/flag-england.webp`). Date shown as "27 June 2026 · World Cup · 5 PM Kick-off".
- **SectionScrollNav.vue**: Sticky floating nav (Agenda / About / Sessions / Partners) that appears after the hero scrolls out of view.
- **Partnership Section**: Three tabs — Headline (Title Partner $50k / Founding $25k / Premier $10k), Session (per-act naming rights $5k–$7.5k), Supporting (Associate $2.5k / Community Supporter $1k / Custom). Contact: `partners@onyxgoldgroup.com`.
- **Sessions Carousel**: 7 session theme cards — Responsible Gaming Frameworks, Panama as Financial Hub, UK Gaming Market, Sport & Capital, Fintech Meets Gaming, Live Match Viewing, Gaming Tournament.
- **CMS Integration**: Flexible speaker normalization from Strapi data (optional, env-var gated).

## Development Guidelines

- **Component Choice**: Use `.astro` for static content and `.vue` for client-side interactivity.
- **Interactivity**: Always use `client:load` or `client:visible` directives when importing Vue components in Astro pages.
- **Styling**: Tailwind 4 utility classes for layout; scoped `<style>` blocks for component-specific styles. Complex animations use `motion`.
- **CMS**: Use `src/lib/cms.ts` for all data fetching. Ensure `STRAPI_BASE_URL` and `STRAPI_API_TOKEN` are handled safely (site works without them).
- **Assets**: Static images in `public/`. Imported assets in `src/assets/`.

## Messaging & Tone

- **Event Goal**: Explore responsible gaming, cross-Atlantic financial opportunity (Panama–UK corridor), and the intersection of sport and capital — united around the Panama vs England World Cup match.
- **Audience**: Financial leaders, policymakers, investors, fintech innovators, and serious gaming enthusiasts.
- **Tone**: High-end, intellectual, and fun. Authoritative but not stiff. Not a casual fan event.
- **Date**: 27 June 2026. Match kicks off at 5 PM. Location TBD — do not specify a city until confirmed.
- **Brand Colors**: Navy `#0d1e3a` / Red `#da121a` / White.
- **Contact**: `partners@onyxgoldgroup.com`
