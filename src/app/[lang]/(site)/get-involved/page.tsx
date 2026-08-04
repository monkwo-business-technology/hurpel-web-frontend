import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import LicensingNotice from "@/components/LicensingNotice";
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
    title: `${dict.pages.getInvolved.title} — ${site.name}`,
    description: dict.pages.getInvolved.metaDescription,
  };
}

export default async function GetInvolvedPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);
  const t = dict.pages.getInvolved;

  return (
    <>
      <PageHeader
        title={t.title}
        description={t.banner}
        image={images.banner.getInvolved}
        homeHref={`/${lang}`}
        homeLabel={dict.common.home}
      />

      <section aria-labelledby="recruitment-notice-heading" className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-16">
          <Reveal className="rounded-2xl border-2 border-amber-400 bg-amber-50 dark:bg-amber-950/30 p-8 text-center">
            <h2
              id="recruitment-notice-heading"
              className="text-2xl font-extrabold text-amber-950 dark:text-amber-100"
            >
              {t.noticeHeading}
            </h2>
            <p className="mt-4 text-amber-950/90 dark:text-amber-100/90 leading-relaxed">
              {t.noticeBody}
            </p>
          </Reveal>
        </div>
      </section>

      <section id="volunteer" className="bg-surface scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-primary">{t.volunteerHeading}</h2>
            <p className="mt-4 text-ink-muted text-lg">{t.volunteerBody}</p>
            <ul className="mt-6 space-y-3">
              {t.roles.map((r) => (
                <li key={r} className="flex items-center gap-3 text-ink">
                  <svg className="w-5 h-5 text-accent-dark shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  {r}
                </li>
              ))}
            </ul>
            <Link
              href={`/${lang}/contact`}
              className="mt-8 inline-block px-8 py-4 rounded-2xl font-bold text-white bg-primary-solid hover:bg-primary-solid-hover transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {t.applyCta}
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
              <Image src={images.involve.volunteer} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="glass rounded-2xl p-10 h-full text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-extrabold text-primary">{t.donateHeading}</h2>
              <p className="mt-3 text-ink-muted">{t.donateBody}</p>
              <Link
                href={`/${lang}/donate-now`}
                className="mt-6 inline-block px-8 py-4 rounded-2xl font-bold text-primary-dark bg-accent hover:bg-accent-dark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {dict.common.donateNow}
              </Link>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article className="glass rounded-2xl p-10 h-full text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-extrabold text-primary">{t.partnerHeading}</h2>
              <p className="mt-3 text-ink-muted">{t.partnerBody.replace("{phone}", site.phone)}</p>
              <Link
                href={`/${lang}/contact`}
                className="mt-6 inline-block px-8 py-4 rounded-2xl font-semibold text-primary border-2 border-primary hover:bg-primary-solid hover:border-primary-solid hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {dict.common.contactUs}
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      <LicensingNotice dict={dict.licensing} />
    </>
  );
}
