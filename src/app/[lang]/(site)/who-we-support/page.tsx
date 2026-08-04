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
    title: `${dict.pages.whoWeSupport.title} — ${site.name}`,
    description: dict.pages.whoWeSupport.metaDescription,
  };
}

export default async function WhoWeSupportPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);
  const t = dict.pages.whoWeSupport;

  return (
    <>
      <PageHeader
        title={t.title}
        description={t.banner}
        image={images.whoWeSupport.banner}
        homeHref={`/${lang}`}
        homeLabel={dict.common.home}
      />

      <LicensingNotice dict={dict.licensing} />

      {/* Our Supports — bike photo + intro */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <figure className="relative h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={images.whoWeSupport.bike}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-4 bottom-4 glass rounded-2xl px-5 py-3 text-sm font-semibold text-ink">
                {t.imageCaption}
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">{t.supportsHeading}</h2>
            <p className="mt-6 text-xl text-ink font-semibold leading-relaxed">{t.intro}</p>
            <p className="mt-4 text-ink-muted text-lg leading-relaxed">{t.missionBody}</p>
          </Reveal>
        </div>
      </section>

      {/* Preserving What's Sacred */}
      <section className="bg-primary-solid text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold">{t.sacredHeading}</h2>
            <p className="mt-6 text-lg text-white/90 leading-relaxed">{t.sacredBody}</p>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {t.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <article className="card-soft card-soft-hover rounded-2xl p-8 h-full text-center">
                  <p className="text-4xl font-extrabold text-accent-dark mb-3">{i + 1}</p>
                  <h3 className="text-xl font-bold text-primary">{p.title}</h3>
                  <p className="mt-3 text-ink-muted">{p.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Individuality + commitment */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-lg text-ink leading-relaxed">{t.individualityBody}</p>
            <p className="mt-6 text-lg text-ink leading-relaxed">{t.commitmentBody}</p>
            <Link
              href={`/${lang}/services`}
              className="mt-8 inline-block px-8 py-4 rounded-2xl font-bold text-white bg-primary-solid hover:bg-primary-solid-hover transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {t.exploreServices}
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={images.whoWeSupport.care}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
