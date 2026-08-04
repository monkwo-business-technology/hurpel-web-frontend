import type { Metadata } from "next";
import Image from "next/image";
import DonateForm from "@/components/DonateForm";
import DonateOptions from "@/components/DonateOptions";
import BackButton from "@/components/BackButton";
import { site } from "@/lib/site";
import { getDictionary, type Lang } from "@/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);
  return {
    title: `${dict.pages.donateNow.title} — ${site.name}`,
    description: dict.pages.donateNow.metaDescription,
  };
}

export default async function DonateNowPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);
  const t = dict.pages.donateNow;

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface via-primary-light/40 to-surface">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <BackButton label={t.back} fallbackHref={`/${lang}`} />
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={40} height={40} />
            <span className="font-bold text-primary hidden sm:block">{site.name}</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary">{t.heading}</h1>
          <p className="mt-3 text-ink-muted">{t.subheading}</p>
        </div>

        <div className="mt-8 pb-16">
          <DonateOptions dict={dict.donateOptions} lang={lang as Lang} className="max-w-xl mx-auto" />
          <div className="my-10 flex items-center gap-4 max-w-xl mx-auto" aria-hidden="true">
            <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
            <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              {t.orPledge}
            </span>
            <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
          </div>
          <DonateForm dict={dict.donateForm} />
        </div>
      </div>
    </div>
  );
}
