# Hurpel Support Services — Website

Bilingual (EN/FR) marketing and donation site for Hurpel Support Services, a
Canadian non-profit supporting people with developmental disabilities.
London, Ontario · info@hurpelsupport.com · +1 (226) 503-3499

## Stack

- Next.js 16 (App Router, Turbopack) + React, TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- Nodemailer (Zoho SMTP) + Brevo HTTP API for form email delivery
- Netlify deploy (`netlify.toml`)

## Develop

```bash
npm install
npm run dev     # http://localhost:3000 (redirects to /en or /fr)
npm run build   # production build — all pages SSG in both locales
npm run lint
```

## Architecture notes

- **i18n** — locale-prefixed routes (`/en/...`, `/fr/...`). `src/proxy.ts`
  redirects bare paths using the `NEXT_LOCALE` cookie, then `Accept-Language`.
  All copy lives in `src/i18n/dictionaries/{en,fr}.ts`; components receive
  dictionary slices as props. Add a string to `en.ts` first — `fr.ts` is
  type-checked against it, so a missing translation fails the build.
- **Images** — every photo resolves through `src/lib/images.ts` (Unsplash
  placeholders). Swap in real organization photos by editing that one file.
- **Theme** — light/dark toggle; `.dark` on `<html>` flips semantic color
  tokens. `primary-solid` stays navy in both themes for white-text surfaces.
- **Layouts** — `app/[lang]/(site)/` wraps pages with navbar + footer;
  `app/[lang]/donate-now/` is intentionally chrome-free (back button only).

## Email environment variables

| Variable | Purpose |
|---|---|
| `EMAIL_PROVIDER` | `brevo` or `zoho` (optional; auto-picks by configured keys) |
| `BREVO_API_KEY` | Brevo transactional API key |
| `ZOHO_USER` / `ZOHO_APP_PASSWORD` | Zoho SMTP credentials (app password) |
| `EMAIL_TO` / `EMAIL_FROM` / `EMAIL_FROM_NAME` | Public addresses (not secrets) |

Registered Charity #10808 7222 RR0001 · Built for inclusion.
