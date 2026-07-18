import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const quickLinks = [
  { href: "/about", label: "Who We Are" },
  { href: "/services", label: "Services" },
  { href: "/events", label: "Upcoming Events" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

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
    label: "LinkedIn",
    href: site.social.linkedin,
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt=""
              width={56}
              height={56}
              className="rounded-2xl bg-white p-1"
            />
            <p className="font-bold text-lg">{site.name}</p>
          </div>
          <p className="mt-4 text-slate-300 text-sm leading-relaxed">
            Registered Charity Number: {site.charityNumber}
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4">Explore</h2>
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
          <h2 className="font-semibold text-lg mb-4">Contact</h2>
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
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4">Follow Us</h2>
          <ul className="flex gap-4">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 hover:bg-accent hover:text-ink transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
          © 2026 {site.name}. Built for inclusion.
        </p>
      </div>
    </footer>
  );
}
