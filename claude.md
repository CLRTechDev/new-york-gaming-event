# Claude Project Context: New Dawn of Gaming

## Overview

Project: **New Dawn of Gaming: Panama vs England**
An event website built with Astro and Vue for a single-day premium event tied to the Panama vs England World Cup match. **Date: 27 June 2026. Match kicks off at 5 PM.**

**Event Format** (four acts, one day):

1. **Act I — Gaming Tournament** (Early Afternoon, 1:00–3:30 PM, all guests): Competitive gaming tournament with bracket play, prizes, and awards celebration.
2. **Act II — Fireside Chat** (Afternoon, 4:00 PM, all guests): Leaders from finance, gaming, and policy discuss responsible gaming and cross-Atlantic financial opportunities between Panama and the UK.
3. **Act III — Match Viewing** (Evening, 5:00 PM kick-off, all guests): Live Panama vs England World Cup viewing in a premium lounge setting.
4. **Act IV — Post-Match Party** (Evening, 8:00 PM onwards, all guests): Post-match celebration in a premium lounge setting.

## Technical Core

- **Astro 6 + Vue 3**: Hybrid architecture. Static content uses `.astro`; interactive/animated components use `.vue` with `client:load`.
- **Tailwind CSS 4**: Modern styling approach using the `@tailwindcss/vite` Vite plugin (CSS-first config, no `tailwind.config.js`).
- **Motion**: High-performance animations in Vue components.
- **Strapi CMS**: Optional headless CMS integration for speakers and event data via `src/lib/cms.ts`. Falls back to local dummy data if `STRAPI_BASE_URL` / `STRAPI_API_TOKEN` env vars are not set.
- **Vercel Analytics**: `@vercel/analytics` is installed for deployment analytics.

## File Map

- `src/pages/index.astro`: Primary landing page structure.
- `src/components/HeroSection.vue`: Interactive hero with Motion animations and scroll-synced marquee. Displays `/flag-panama.png` and `/flag-england.webp` real flag images.
- `src/components/SectionScrollNav.vue`: Sticky floating nav (Agenda / About / Sessions / Partners), visible after hero scrolls past.
- `src/components/NoiseStageSection.astro`: Dark section with single-day four-act schedule and event pillars.
- `src/components/EventCards.astro`: Four act cards (Tournament / Fireside Chat / Match Viewing / Post-Match) + highlight zones.
- `src/components/SpeakersShowcaseSection.astro`: 7 session theme cards carousel (Responsible Gaming, Panama Hub, UK Market, Sport & Capital, Fintech, Match Viewing, Tournament).
- `src/components/TestimonialsSection.astro`: "Why New Dawn of Gaming Matters" scrolling statements on responsible gaming and cross-Atlantic opportunity.
- `src/components/VenueCarouselSection.astro`: Venue section (location TBD, 27 June 2026).
- `src/components/PreviousYearsVideoSection.vue`: Partnership packages (Headline / Session / Supporting tiers).
- `src/components/Footer.astro`: Footer with email signup and event links.
- `src/lib/cms.ts`: Strapi API client and data normalization.
- `src/styles/global.css`: CSS variables and Tailwind imports.
- `public/flag-panama.png`: Panama flag image used in hero.
- `public/flag-england.webp`: England flag image used in hero.

## AI Instructions for Claude

1. **Component Creation**: Default to `.astro` unless state management or complex interactivity is required, in which case use `.vue`.
2. **Tailwind 4**: Use CSS-first configuration. Avoid deprecated v3 patterns (no `tailwind.config.js`).
3. **Motion**: Use the `motion` library for animations in Vue components.
4. **Responsive Design**: Mobile-first. Follow existing breakpoints in each component's `<style>` block.
5. **Branding**: Navy (`#0d1e3a`) / Red (`#da121a`) / White — professional and premium. Navy reflects England, red references Panama and the gaming/sport energy.
6. **Date**: Event date is **27 June 2026**. Match kicks off at **5 PM**. Always use this confirmed date. Location TBD — do not specify a city until confirmed.
7. **Tone**: The event is high-end, intellectual, and fun — not a casual fan event. Copy should be authoritative and clear.

## Critical Paths

- Always use `client:load` for Vue components needing hydration (e.g., Hero, Nav, Sponsorship section).
- Maintain type safety in `cms.ts` and component props.
- Nav section anchors: `#lineup` (About), `#tickets` (Agenda), `#speakers` (Sessions), `#sponsors` (Partners).
- Contact email: `partners@onyxgoldgroup.com`
