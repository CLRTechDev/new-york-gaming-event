# Claude Project Context: We Are One World Cup

## Overview
Project: **We Are One: Haiti World Cup Weekend**
An event website built with Astro and Vue for a major cultural festival in Atlanta, GA. Date TBD (2026).

## Technical Core
- **Astro 6 + Vue 3**: Hybrid architecture. Static content uses `.astro`; interactive/animated components use `.vue` with `client:load`.
- **Tailwind CSS 4**: Modern styling approach using the `@tailwindcss/vite` Vite plugin (CSS-first config, no `tailwind.config.js`).
- **Motion**: High-performance animations in Vue components.
- **Strapi CMS**: Optional headless CMS integration for speakers and event data via `src/lib/cms.ts`. Falls back to local dummy data if `STRAPI_BASE_URL` / `STRAPI_API_TOKEN` env vars are not set.
- **Vercel Analytics**: `@vercel/analytics` is installed for deployment analytics.

## File Map
- `src/pages/index.astro`: Primary landing page structure.
- `src/components/HeroSection.vue`: Interactive hero with Motion animations and scroll-synced marquee.
- `src/components/SectionScrollNav.vue`: Sticky floating nav, visible after hero scrolls past.
- `src/components/NoiseStageSection.astro`: Dark event overview section with weekend schedule.
- `src/components/EventCards.astro`: Two-day event cards (Friday Gala + Saturday Festival) + experience zone highlights.
- `src/components/SpeakersShowcaseSection.astro`: 7 Experience Zones carousel.
- `src/components/TestimonialsSection.astro`: "Why We Are One Matters" scrolling statements.
- `src/components/VenueCarouselSection.astro`: Venue section (Atlanta, date/venue TBA).
- `src/components/PreviousYearsVideoSection.vue`: Sponsorship packages (Headline / Community / Vendor tiers).
- `src/components/Footer.astro`: Footer with email signup and event links.
- `src/lib/cms.ts`: Strapi API client and data normalization.
- `src/styles/global.css`: CSS variables and Tailwind imports.
- `public/flag-haiti.svg`: Haiti flag used as brand logo.
- `public/flag-us.jpg`: US flag used in hero.

## AI Instructions for Claude
1. **Component Creation**: Default to `.astro` unless state management or complex interactivity is required, in which case use `.vue`.
2. **Tailwind 4**: Use CSS-first configuration. Avoid deprecated v3 patterns (no `tailwind.config.js`).
3. **Motion**: Use the `motion` library for animations in Vue components.
4. **Responsive Design**: Mobile-first. Follow existing breakpoints in each component's `<style>` block.
5. **Branding**: Blue (`#003580`) / Red (`#ce1126`) / White — vibrant and professional. These are the Haitian flag colors.
6. **Date**: The event date is **not yet determined**. Always use "Date TBD · Atlanta, GA · 2026" or equivalent. Never reference Juneteenth.

## Critical Paths
- Always use `client:load` for Vue components needing hydration (e.g., Hero, Nav, Sponsorship section).
- Maintain type safety in `cms.ts` and component props.
- Nav section anchors: `#lineup` (About), `#tickets` (Schedule), `#speakers` (Experience Zones), `#sponsors` (Sponsorship).
