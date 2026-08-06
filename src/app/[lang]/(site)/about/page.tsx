import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ImpactTracker from "@/components/ImpactTracker";
import LicensingNotice from "@/components/LicensingNotice";

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
    title: `${dict.pages.about.title} — ${site.name}`,
    description: dict.pages.about.metaDescription,
  };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);
  const t = dict.pages.about;

  return (
    <>
      <PageHeader
        title={t.title}
        description={t.banner}
        image={images.banner.about}
        homeHref={`/${lang}`}
        homeLabel={dict.common.home}
      />

      <section id="mission" className="bg-surface scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <Reveal className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-primary">{t.missionHeading}</h2>
            <p className="mt-4 text-ink-muted text-lg">
              {dict.pages.home.description} {t.missionBody}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <article className="glass rounded-2xl p-8 h-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-ink">{v.title}</h3>
                  <p className="mt-3 text-ink-muted">{v.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div id="impact" className="scroll-mt-24">
        <ImpactTracker dict={dict.impact} />
      </div>


      <section id="leadership" aria-labelledby="leadership-heading" className="bg-surface scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 id="leadership-heading" className="text-3xl font-extrabold text-primary">
              {t.leadershipHeading}
            </h2>
            <p className="mt-4 text-ink-muted text-lg leading-relaxed">{t.leadershipBody}</p>
            <p className="mt-6 inline-block px-4 py-2 rounded-2xl bg-primary/10 text-sm font-semibold text-primary">
              {t.leadershipNote}
            </p>
          </Reveal>
          <Reveal delay={150}>
            {/* Photo collage — decorative, so every image is alt="" */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-44 sm:h-56 rounded-2xl overflow-hidden shadow-lg row-span-2 h-full">
                <Image
                  src={images.about.mission}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 sm:h-40 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={images.involve.partner}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 sm:h-40 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={images.involve.volunteer}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <LicensingNotice dict={dict.licensing} />

      <section id="accountability" className="bg-surface-alt scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-primary">{t.accountabilityHeading}</h2>
            <p className="mt-4 text-ink-muted text-lg">
              {t.accountabilityBody} ({dict.common.charityLine} {site.ocn})
            </p>
            <Link
              href={`/${lang}/get-involved`}
              className="mt-8 inline-block px-8 py-4 rounded-2xl font-bold text-primary-dark bg-accent hover:bg-accent-dark transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {t.getInvolvedCta}
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
              <Image src={images.involve.partner} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>


    </>
  );
}
