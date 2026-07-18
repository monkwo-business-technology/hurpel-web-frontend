# Liveliness & Connection Pass

**Date:** 2026-07-18 · **Status:** Approved by user

User goals: emotional warmth + personal interaction, warm & subtle motion.

## Features

1. **Motion upgrade** — Reveal gains direction variants (up/left/right);
   gentle scroll parallax component for large photos; slow-floating ambient
   shapes in hero/donate band. All disabled under `prefers-reduced-motion`.
2. **Greeting + welcome back** — hero shows time-of-day greeting
   (morning/afternoon/evening) in the visitor's language; returning visitors
   (single localStorage flag) see "Welcome back".
3. **"Find your way to help" quiz** — 3 questions, client-side scoring into
   volunteer / donate / partner result with matching CTA. Homepage section.
4. **Donation celebration** — confetti burst (no library, brand colors) +
   heart on DonateForm success; skipped under reduced-motion.
5. **Story hover-reveals** — impact counters flip to one-line micro-stories
   on hover/focus.

## Constraints

- Bilingual: every string in both dictionaries; `fr.ts` type-checked vs `en.ts`.
- No new dependencies, no backend.
- WCAG: reduced-motion respected, keyboard focus reveals stories, quiz fully
  keyboard operable.

## Verify

Build + lint green; smoke: quiz interaction, greeting renders, FR strings.
