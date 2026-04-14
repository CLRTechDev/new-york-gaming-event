# We Are One: Haiti World Cup Weekend

This project is an Astro-based frontend for the **We Are One: Haiti World Cup Weekend**, a signature cultural event taking place in Atlanta, GA. Date TBD (2026).

## Tech Stack
- **Framework:** [Astro 6.x](https://astro.build/)
- **UI Library:** [Vue 3.x](https://vuejs.org/) (SFCs)
- **Styling:** [Tailwind CSS 4.x](https://tailwindcss.com/) (using `@tailwindcss/vite` — CSS-first, no config file)
- **Animations:** [Motion](https://motion.dev/)
- **Analytics:** `@vercel/analytics`

## Project Structure
- `src/pages/`: Main entry points (`index.astro`, `invite.astro`, `speakers.astro`).
- `src/components/`: Mix of `.astro` (static/server-side) and `.vue` (interactive) components.
- `src/layouts/`: Base layout (`Layout.astro`) using standard slots.
- `src/lib/cms.ts`: Integration logic for Strapi CMS (fetching speakers, etc.). Optional — falls back to dummy data.
- `src/styles/global.css`: Global styles and Tailwind 4 configuration.
- `public/flag-haiti.svg`: Haiti flag, used as the site logo.
- `public/flag-us.jpg`: US flag, used in the hero section.

## Section Map (anchor IDs)
| Section | Component | Anchor |
|---|---|---|
| About / Event Vision | `NoiseStageSection.astro` | `#lineup` |
| Two-Day Schedule | `EventCards.astro` | `#tickets` |
| Experience Zones | `SpeakersShowcaseSection.astro` | `#speakers` |
| Sponsorship Packages | `PreviousYearsVideoSection.vue` | `#sponsors` |
| Venue | `VenueCarouselSection.astro` | `#venue` |

## Key Features
- **HeroSection.vue**: Interactive hero with Motion animations and a scroll-synced marquee. CTAs link to `#sponsors` and `#tickets`.
- **SectionScrollNav.vue**: Sticky floating nav that appears after the hero scrolls out of view.
- **Sponsorship Section**: Three tabs — Headline ($100k/$50k/$20k), Community ($10k/$5k/Custom), Vendor ($2,500/$1,500). Contact via email to inquire.
- **Experience Zones**: Carousel of all 7 zones — Unity Main Stage, Champions Lounge, Global Bites Food Fest, Little Champions Kids Zone, Unity Marketplace, Champions Circle, Culture Connect Pavilion.
- **CMS Integration**: Flexible speaker normalization from Strapi data (optional, env-var gated).

## Development Guidelines
- **Component Choice**: Use `.astro` for static content and `.vue` for client-side interactivity.
- **Interactivity**: Always use `client:load` or `client:visible` directives when importing Vue components in Astro pages.
- **Styling**: Tailwind 4 utility classes for layout; scoped `<style>` blocks for component-specific styles. Complex animations use `motion`.
- **CMS**: Use `src/lib/cms.ts` for all data fetching. Ensure `STRAPI_BASE_URL` and `STRAPI_API_TOKEN` are handled safely (site works without them).
- **Assets**: Static images in `public/`. Imported assets in `src/assets/`.

## Messaging & Tone
- **Event Goal**: Celebrate Haitian culture, honor freedom, and unite communities in Atlanta.
- **Audience**: Families, community leaders, sponsors, vendors, and the global diaspora.
- **Tone**: Vibrant, celebratory, professional, and community-focused.
- **Date**: TBD — do not reference Juneteenth or any specific date until confirmed.
- **Brand Colors**: Blue `#003580` / Red `#ce1126` / White (Haitian flag palette).
