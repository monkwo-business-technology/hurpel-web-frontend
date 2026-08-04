import Image from "next/image";
import Link from "next/link";
import NewsletterBand from "@/components/NewsletterBand";
import DonateOptions from "@/components/DonateOptions";
import { site } from "@/lib/site";
import type { Dictionary, Lang } from "@/i18n";

const socials = [
  {
    label: "Facebook",
    href: site.social.facebook,
    path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12Z",
  },
  {
    label: "Instagram",
    href: site.social.instagram,
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 0 0-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.15A4 4 0 1 1 16 12a4 4 0 0 1-4 3.99Zm6.4-11.85a1.44 1.44 0 1 1-1.44 1.44 1.44 1.44 0 0 1 1.44-1.44Z",
  },
  {
    label: "TikTok",
    href: site.social.tiktok,
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
];

export default function Footer({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  const s = dict.nav.sections;
  const quickLinks = [
    { href: `/${lang}/about`, label: s.about.label },
    { href: `/${lang}/who-we-support`, label: s.whoWeSupport.label },
    { href: `/${lang}/events`, label: s.events.label },
    { href: `/${lang}/impact-of-giving`, label: s.impactOfGiving.label },
    { href: `/${lang}/get-involved`, label: s.getInvolved.label },
    { href: `/${lang}/donate`, label: s.getInvolved.items.donate.label },
    { href: `/${lang}/contact`, label: dict.pages.contact.title },
  ];
  const serviceLinks = [
    { href: `/${lang}/services#youth`, label: s.services.items.youth.label },
    { href: `/${lang}/services#adult`, label: s.services.items.adult.label },
    { href: `/${lang}/services#licensing`, label: s.services.items.licensing.label },
  ];

  return (
    <footer className="bg-primary-dark text-white">
      <NewsletterBand dict={dict.newsletter} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={56}
              height={56}
              className="rounded-2xl bg-white p-1"
            />
            <p className="font-bold text-lg">{site.name}</p>
          </div>
          <p className="mt-4 text-slate-300 text-sm leading-relaxed max-w-sm">
            {dict.pages.home.description}
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-slate-300 text-sm">
            <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            {dict.common.charityLine} {site.charityNumber}
          </p>
          <h2 className="mt-6 text-sm font-semibold text-white">{dict.donateOptions.heading}</h2>
          <DonateOptions dict={dict.donateOptions} lang={lang} variant="compact" className="mt-3" />
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4">{dict.footer.explore}</h2>
          <ul className="space-y-2 text-slate-300 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="hover:text-accent transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4">{dict.footer.servicesHeading}</h2>
          <ul className="space-y-2 text-slate-300 text-sm">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="hover:text-accent transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4">{dict.footer.contactHeading}</h2>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>
              <a
                href={site.phoneHref}
                className="hover:text-accent transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-accent transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {site.email}
              </a>
            </li>
            <li>{site.address}</li>
          </ul>
          <ul className="mt-6 flex gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 hover:bg-accent hover:text-primary-dark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-slate-400">
          © 2026 {site.name}. {dict.footer.builtFor}
        </p>
      </div>
    </footer>
  );
}
