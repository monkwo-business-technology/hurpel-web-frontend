import { images } from "@/lib/images";
import type { Dictionary, Lang } from "@/i18n";

export type MegaItem = {
  label: string;
  description: string;
  href: string;
  image: string;
};

export type NavSection = {
  label: string;
  href: string;
  items: MegaItem[];
};

export function buildNavSections(dict: Dictionary, lang: Lang): NavSection[] {
  const s = dict.nav.sections;
  const p = (path: string) => `/${lang}${path}`;
  return [
    {
      label: s.about.label,
      href: p("/about"),
      items: [
        { ...s.about.items.mission, href: p("/about#mission"), image: images.about.mission },
        { ...s.about.items.impact, href: p("/about#impact"), image: images.story.two },
        {
          ...s.about.items.accountability,
          href: p("/about#accountability"),
          image: images.involve.partner,
        },
      ],
    },
    {
      label: s.whoWeSupport.label,
      href: p("/who-we-support"),
      items: [],
    },
    {
      label: s.services.label,
      href: p("/services"),
      items: [
        {
          ...s.services.items.employment,
          href: p("/services#employment"),
          image: images.service.employment,
        },
        {
          ...s.services.items.accommodation,
          href: p("/services#accommodation"),
          image: images.service.housing,
        },
        { ...s.services.items.youth, href: p("/services#youth"), image: images.service.youth },
        {
          ...s.services.items.community,
          href: p("/services#community"),
          image: images.service.community,
        },
      ],
    },
    {
      label: s.events.label,
      href: p("/events"),
      items: [
        { ...s.events.items.belong, href: p("/events#waiting-to-belong"), image: images.event.belong },
        { ...s.events.items.run, href: p("/events#fun-run"), image: images.event.run },
        { ...s.events.items.cookie, href: p("/events#smile-cookie"), image: images.event.cookie },
      ],
    },
    {
      label: s.impactOfGiving.label,
      href: p("/impact-of-giving"),
      items: [],
    },
    {
      label: s.getInvolved.label,
      href: p("/get-involved"),
      items: [
        {
          ...s.getInvolved.items.volunteer,
          href: p("/get-involved#volunteer"),
          image: images.involve.volunteer,
        },
        { ...s.getInvolved.items.donate, href: p("/donate"), image: images.involve.donate },
        { ...s.getInvolved.items.contact, href: p("/contact"), image: images.banner.contact },
      ],
    },
  ];
}
