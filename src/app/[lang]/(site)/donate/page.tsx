import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import DonateForm from "@/components/DonateForm";
import DonateOptions from "@/components/DonateOptions";
import FaqAccordion from "@/components/FaqAccordion";
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
    title: `${dict.pages.donate.title} — ${site.name}`,
    description: dict.pages.donate.metaDescription,
  };
}

export default async function DonatePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);
  const t = dict.pages.donate;

  return (
    <>
      <PageHeader
        title={t.title}
        description={t.banner}
        image={images.banner.donate}
        homeHref={`/${lang}`}
        homeLabel={dict.common.home}
      />
      <section className="relative overflow-hidden bg-gradient-to-b from-surface to-primary-light">
        <div className="blob w-96 h-96 bg-accent/40 bottom-0 -left-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <Reveal>
            <DonateForm dict={dict.donateForm} />
          </Reveal>
          <Reveal className="mt-10">
            <DonateOptions dict={dict.donateOptions} lang={lang as Lang} className="max-w-xl mx-auto" />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="donate-faq-heading" className="bg-surface-alt">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <Reveal className="text-center">
            <h2 id="donate-faq-heading" className="text-3xl font-extrabold text-primary">
              {t.faqHeading}
            </h2>
            <p className="mt-4 text-ink-muted">
              {t.faqIntro.replace("{charity}", site.ocn)}
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
