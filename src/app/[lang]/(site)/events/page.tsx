import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import { images } from "@/lib/images";
import { getDictionary, type Lang } from "@/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);
  return {
    title: `${dict.pages.events.title} — ${site.name}`,
    description: dict.pages.events.metaDescription,
  };
}

export default async function EventsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);
  const t = dict.pages.events;

  const events = [
    {
      id: "waiting-to-belong",
      ...t.items.belong,
      image: images.event.belong,
      href: `/${lang}/contact`,
    },
    {
      id: "fun-run",
      ...t.items.run,
      image: images.event.run,
      href: `/${lang}/get-involved#volunteer`,
    },
    {
      id: "smile-cookie",
      ...t.items.cookie,
      image: images.event.cookie,
      href: `/${lang}/contact`,
    },
  ];

  return (
    <>
      <PageHeader
        title={t.title}
        description={t.banner}
        image={images.banner.events}
        homeHref={`/${lang}`}
        homeLabel={dict.common.home}
      />

      <section aria-labelledby="events-notice-heading" className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-16">
          <Reveal className="rounded-2xl border-2 border-accent/50 bg-accent/10 p-8 text-center">
            <p className="inline-block px-3 py-1 rounded-full bg-accent text-primary-dark text-xs font-bold uppercase tracking-wide">
              {t.noticeBadge}
            </p>
            <h2 id="events-notice-heading" className="mt-4 text-2xl font-extrabold text-primary">
              {t.noticeHeading}
            </h2>
            <p className="mt-4 text-ink-muted leading-relaxed">{t.noticeBody}</p>
            <Link
              href={`/${lang}/contact`}
              className="mt-6 inline-block px-6 py-3 rounded-2xl font-bold text-white bg-primary-solid hover:bg-primary-solid-hover transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {t.noticeCta}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {events.map((e, i) => (
            <Reveal key={e.id}>
              <article
                id={e.id}
                className={`scroll-mt-24 grid gap-8 lg:grid-cols-2 lg:items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl">
                  <Image src={e.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                  <p className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-accent text-primary-dark text-xs font-bold uppercase tracking-wide shadow-md">
                    {t.plannedBadge}
                  </p>
                </div>
                <div className="glass rounded-2xl p-8 sm:p-10">
                  <p className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide">
                    {e.tag}
                  </p>
                  <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-ink">{e.title}</h2>
                  <p className="mt-4 text-ink-muted text-lg">{e.description}</p>
                  <Link
                    href={e.href}
                    className="mt-8 inline-block px-6 py-3.5 rounded-2xl font-bold text-primary-dark bg-accent hover:bg-accent-dark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    {e.cta}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
