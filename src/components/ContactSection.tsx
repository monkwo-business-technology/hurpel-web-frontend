import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import type { Dictionary } from "@/i18n";

export default function ContactSection({ dict }: { dict: Dictionary }) {
  const t = dict.pages.contact;
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-surface-alt scroll-mt-24"
    >
      <div className="blob w-80 h-80 bg-primary/30 top-10 -right-20" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-12 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-extrabold text-primary">
            {t.heading}
          </h2>
          <p className="mt-4 text-ink-muted max-w-md">{t.subheading}</p>
          <ul className="mt-8 space-y-5">
            <li className="flex items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl glass text-primary">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </span>
              <div>
                <p className="text-sm text-ink-muted">{t.call}</p>
                <a
                  href={site.phoneHref}
                  className="font-semibold text-ink hover:text-primary transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {site.phone}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl glass text-primary">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </span>
              <div>
                <p className="text-sm text-ink-muted">{t.emailUs}</p>
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-ink hover:text-primary transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl glass text-primary">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </span>
              <div>
                <p className="text-sm text-ink-muted">{t.office}</p>
                <p className="font-semibold text-ink">{site.address}</p>
              </div>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={150}>
          <ContactForm dict={dict.contactForm} />
        </Reveal>
      </div>
    </section>
  );
}
