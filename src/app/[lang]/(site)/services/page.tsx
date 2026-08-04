import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
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
    title: `${dict.pages.services.title} — ${site.name}`,
    description: dict.pages.services.metaDescription,
  };
}

const phaseImages = {
  youth: images.service.youth,
  adult: images.service.housing,
};

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);
  const t = dict.pages.services;

  const phases = (["youth", "adult"] as const).map((id) => ({
    id,
    ...t.items[id],
    image: phaseImages[id],
  }));

  return (
    <>
      <PageHeader
        title={t.title}
        description={t.banner}
        image={images.banner.services}
        homeHref={`/${lang}`}
        homeLabel={dict.common.home}
      />

      <LicensingNotice dict={dict.licensing} className="bg-surface" />

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 space-y-16">
          {phases.map((s, i) => (
            <Reveal key={s.id}>
              <article
                id={s.id}
                className={`scroll-mt-24 grid gap-8 lg:grid-cols-2 lg:items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl">
                  <Image src={s.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="glass rounded-2xl p-8 sm:p-10">
                  <p className="inline-block px-3 py-1 rounded-full bg-accent text-primary-dark text-xs font-bold uppercase tracking-wide">
                    {s.badge}
                  </p>
                  <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-primary">{s.title}</h2>
                  <p className="mt-4 text-ink-muted text-lg">{s.description}</p>
                  <ul className="mt-6 space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-ink">
                        <svg className="w-5 h-5 text-accent-dark shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/${lang}/contact`}
                    className="mt-8 inline-block px-6 py-3.5 rounded-2xl font-bold text-white bg-primary-solid hover:bg-primary-solid-hover transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    {t.accessThisSupport}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="services-faq-heading" className="bg-surface-alt">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <Reveal className="text-center">
            <h2 id="services-faq-heading" className="text-3xl font-extrabold text-primary">
              {t.faqHeading}
            </h2>
            <p className="mt-4 text-ink-muted">
              {t.faqIntro} {site.phone}.
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <FaqAccordion faqs={[...t.faqs]} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
