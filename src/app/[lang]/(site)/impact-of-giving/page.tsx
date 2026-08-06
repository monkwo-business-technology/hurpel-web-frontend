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
    title: `${dict.pages.impactOfGiving.title} — ${site.name}`,
    description: dict.pages.impactOfGiving.metaDescription,
  };
}

export default async function ImpactOfGivingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);
  const t = dict.pages.impactOfGiving;

  return (
    <>
      <PageHeader
        title={t.title}
        description={t.banner}
        image={images.impactOfGiving.banner}
        homeHref={`/${lang}`}
        homeLabel={dict.common.home}
      />

      {/* Journey of your dollar */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <Reveal className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">{t.journeyHeading}</h2>
            <p className="mt-4 text-ink-muted text-lg">{t.journeyIntro}</p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.tiers.map((tier, i) => (
              <Reveal key={tier.amount} delay={i * 100}>
                <article className="card-soft card-soft-hover rounded-2xl p-7 h-full">
                  <p className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary-dark text-xl font-extrabold">
                    {tier.amount}
                  </p>
                  <h3 className="mt-4 text-lg font-bold text-ink">{tier.title}</h3>
                  <p className="mt-2.5 text-sm text-ink-muted leading-relaxed">{tier.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Where the money goes */}
      <section className="bg-primary-solid text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold">{t.whereHeading}</h2>
            <p className="mt-4 text-white/85 text-lg">{t.whereIntro}</p>
            <p className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-medium">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
              {dict.common.charityLine} {site.ocn}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="space-y-4">
              {t.allocations.map((a) => (
                <li key={a.label} className="bg-white/10 rounded-2xl p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold">{a.label}</p>
                    <p className="text-2xl font-extrabold text-accent">{a.pct}</p>
                  </div>
                  <div className="mt-3 h-2.5 rounded-full bg-white/15 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: a.pct.replace(/\s/g, "") }}
                      aria-hidden="true"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* One gift, one story */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-[420px_1fr] lg:items-center">
          <Reveal>
            <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={images.impactOfGiving.story}
                alt=""
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-3xl font-extrabold text-primary">{t.storyHeading}</h2>
            <p className="mt-6 text-xl text-ink leading-relaxed border-l-4 border-accent pl-6">
              {t.storyBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-accent via-accent to-accent-dark">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-dark">{t.ctaHeading}</h2>
            <p className="mt-4 text-primary-dark/80 text-lg">{t.ctaBody}</p>
            <Link
              href={`/${lang}/donate-now`}
              className="mt-8 inline-block px-10 py-4 rounded-2xl font-bold text-white bg-primary-solid hover:bg-primary-solid-hover transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-primary-solid/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
            >
              {dict.common.donateNow}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
