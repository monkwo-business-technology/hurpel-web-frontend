import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/images";
import type { Dictionary, Lang } from "@/i18n";

const icons = {
  youth:
    "M12 3 1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z",
  adult: "M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3z",
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
  const phases = [
    {
      href: `/${lang}/services#youth`,
      ...dict.items.youth,
      image: images.service.youth,
      icon: icons.youth,
    },
    {
      href: `/${lang}/services#adult`,
      ...dict.items.adult,
      image: images.service.housing,
      icon: icons.adult,
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

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {phases.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <Link
                href={p.href}
                className="group block h-full card-soft card-soft-hover rounded-2xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white text-primary-solid shadow-md">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={p.icon} />
                    </svg>
                  </div>
                  <p className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-accent text-primary-dark text-xs font-bold uppercase tracking-wide shadow-md">
                    {p.badge}
                  </p>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-ink group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-muted leading-relaxed">{p.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
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
