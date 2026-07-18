import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
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
    title: `${dict.pages.contact.title} — ${site.name}`,
    description: dict.pages.contact.metaDescription,
  };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Lang);
  const t = dict.pages.contact;

  return (
    <>
      <PageHeader
        title={t.title}
        description={t.banner}
        image={images.banner.contact}
        homeHref={`/${lang}`}
        homeLabel={dict.common.home}
      />
      <ContactSection dict={dict} />
    </>
  );
}
