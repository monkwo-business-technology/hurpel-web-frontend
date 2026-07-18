# Hurpel Support Services — Warm Editorial Redesign

**Date:** 2026-07-18 · **Status:** Approved by user

## Goal

Transform the base site into a stunning, simple, warm, photo-rich nonprofit
website: home page, all inner pages, sections, menu, and footer.

## Decisions (user-confirmed)

- **Palette:** keep brand — royal blue `#0f4c81` primary, amber `#ffb81c` CTA.
  New warm cream `#fdf9f2` section band replaces cold gray-only backgrounds.
- **Imagery:** curated Unsplash CDN photos everywhere, centralized in
  `src/lib/images.ts` for later swap to real org photos.
- **Aesthetic:** warm editorial photo-first base; glassmorphism retained only
  for navbar and overlay cards on photos. Soft layered shadows, rounded-2xl.
- **New sections:** stories/testimonials, partner/accreditation trust strip,
  newsletter band, FAQ accordions.
- **Scope:** everything at once — shell + home + all 6 inner pages.

## Typography

Baloo 2 (headings, warm rounded — already loaded) + Nunito Sans (body,
readable). Base 16px equivalent (root scaled 87.5%), line-height ≥1.6.

## Architecture

- `src/lib/images.ts` — single image registry keyed by usage.
- New components: `TrustStrip`, `StoryCarousel` (client), `DonateBand`,
  `NewsletterBand`, `FaqAccordion` (client).
- Rebuilt: `Navbar` (contact top-strip + solid white bar), `Footer`
  (4-column credibility hub + newsletter band), `Services`, `Events`,
  `ImpactTracker` (restyle).

## Homepage section order

1. Full-bleed photo hero, gradient overlay, dual CTA, floating stat chips
2. Trust strip (FOCUS accreditation + partners)
3. What we do — 4 service photo cards
4. Impact tracker (blue band, counters)
5. Story spotlight carousel
6. Upcoming events — 3 photo cards with date badges
7. Get-involved split panels
8. Donate band (amber, links to /donate)
9. Newsletter band
10. Footer

## Inner pages

All keep the photo banner `PageHeader`. Content per page:

- **About:** mission, values photo cards, impact, FOCUS accountability, story.
- **Services:** alternating photo/text blocks per service, FAQ, support CTA.
- **Events:** featured event card, grid, campaign banners.
- **Get involved:** volunteer roles grid, donate panel, partner CTA.
- **Donate:** existing form, warmer layout, per-amount impact context, FAQ.
- **Contact:** split layout, info panel, newsletter checkbox.

## Constraints

- WCAG 2.1 AA: 4.5:1 contrast, visible focus, keyboard nav, reduced motion.
- No emojis as icons (SVG only), cursor-pointer on clickables, 150–300ms
  transitions, no layout-shifting hovers.
- Show impact data and financial accountability (nonprofit anti-patterns).
- Next.js 16 App Router + Tailwind v4; `images.unsplash.com` allowed in
  `next.config.ts`.

## Testing

`npm run build` green; HEAD-check every Unsplash URL returns 200; manual
responsive pass 375/768/1024/1440.
