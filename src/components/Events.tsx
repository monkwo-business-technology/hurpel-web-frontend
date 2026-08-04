import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/images";
import type { Dictionary, Lang } from "@/i18n";

export default function Events({ lang, dict }: { lang: Lang; dict: Dictionary["events"] }) {
  const events = [
    {
      href: `/${lang}/events#waiting-to-belong`,
      ...dict.items.belong,
      image: images.event.belong,
    },
    { href: `/${lang}/events#fun-run`, ...dict.items.run, image: images.event.run },
    { href: `/${lang}/events#smile-cookie`, ...dict.items.cookie, image: images.event.cookie },
  ];

  return (
    <section id="events" aria-labelledby="events-heading" className="bg-surface-alt scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-dark font-bold text-sm mb-4">
            {dict.eyebrow}
          </p>
          <h2 id="events-heading" className="text-3xl sm:text-4xl font-extrabold text-primary">
            {dict.heading}
          </h2>
          <p className="mt-4 text-ink-muted">{dict.subheading}</p>
          <p className="mt-4 inline-block px-4 py-2 rounded-2xl bg-accent/15 text-sm font-semibold text-primary-dark dark:text-accent">
            {dict.notice}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {events.map((e, i) => (
            <Reveal key={e.tag} delay={i * 100}>
              <Link
                href={e.href}
                className="group block h-full card-soft card-soft-hover rounded-2xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={e.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-xl bg-white shadow-md px-3.5 py-2 text-center">
                    <p className="text-lg font-extrabold text-primary-dark leading-none">{e.dateDay}</p>
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mt-1">
                      {e.dateMonth}
                    </p>
                  </div>
                  <p className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-primary-dark/80 backdrop-blur text-xs font-bold tracking-wide text-white">
                    {e.tag}
                  </p>
                </div>
                <div className="p-7 flex flex-col">
                  <h3 className="text-xl font-bold text-ink group-hover:text-primary transition-colors">
                    {e.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted flex-1">{e.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">
                    {e.cta}
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
