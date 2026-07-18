import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/images";
import type { Dictionary, Lang } from "@/i18n";

const icons = {
  employment:
    "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z",
  accommodation: "M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z",
  youth:
    "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  community:
    "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
};

export default function Services({
  lang,
  dict,
  learnMore,
}: {
  lang: Lang;
  dict: Dictionary["services"];
  learnMore: string;
}) {
  const services = [
    {
      href: `/${lang}/services#employment`,
      ...dict.items.employment,
      image: images.service.employment,
      icon: icons.employment,
    },
    {
      href: `/${lang}/services#accommodation`,
      ...dict.items.accommodation,
      image: images.service.housing,
      icon: icons.accommodation,
    },
    {
      href: `/${lang}/services#youth`,
      ...dict.items.youth,
      image: images.service.youth,
      icon: icons.youth,
    },
    {
      href: `/${lang}/services#community`,
      ...dict.items.community,
      image: images.service.community,
      icon: icons.community,
    },
  ];

  return (
    <section id="services" aria-labelledby="services-heading" className="bg-surface scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4">
            {dict.eyebrow}
          </p>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-extrabold text-primary">
            {dict.heading}
          </h2>
          <p className="mt-4 text-ink-muted">{dict.subheading}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <Link
                href={s.href}
                className="group block h-full card-soft card-soft-hover rounded-2xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white text-primary-solid shadow-md">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={s.icon} />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-ink-muted leading-relaxed">{s.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {learnMore}
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-ink-muted">
            {dict.needCare}{" "}
            <Link
              href={`/${lang}/contact`}
              className="font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4 hover:text-primary-dark transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {dict.accessSupport}
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
