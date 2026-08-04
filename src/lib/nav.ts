import { images } from "@/lib/images";
import type { Dictionary, Lang } from "@/i18n";

export type MegaItem = {
  label: string;
  description: string;
  href: string;
  image: string;
};

export type NavGroup = {
  label: string;
  href: string;
  items: MegaItem[];
  /** Optional pill shown beside the group heading, e.g. "Coming soon". */
  badge?: string;
};

export type NavSection = {
  label: string;
  href: string;
  items: MegaItem[];
  groups?: NavGroup[];
};

export function buildNavSections(dict: Dictionary, lang: Lang): NavSection[] {
  const s = dict.nav.sections;
  const p = (path: string) => `/${lang}${path}`;
  return [
    {
      label: s.home.label,
      href: p(""),
      items: [],
    },
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
      label: s.services.label,
      href: p("/services"),
      items: [
        { ...s.services.items.youth, href: p("/services#youth"), image: images.service.youth },
        { ...s.services.items.adult, href: p("/services#adult"), image: images.service.housing },
        {
          ...s.services.items.licensing,
          href: p("/services#licensing"),
          image: images.about.mission,
        },
      ],
    },
    {
      label: s.community.label,
      href: p("/get-involved"),
      items: [],
      groups: [
        {
          label: s.whoWeSupport.label,
          href: p("/who-we-support"),
          items: [
            {
              label: s.whoWeSupport.label,
              description: s.whoWeSupport.description,
              href: p("/who-we-support"),
              image: images.whoWeSupport.bike,
            },
          ],
        },
        {
          label: s.events.label,
          href: p("/events"),
          badge: dict.nav.comingSoon,
          items: [
            {
              ...s.events.items.belong,
              href: p("/events#waiting-to-belong"),
              image: images.event.belong,
            },
            { ...s.events.items.run, href: p("/events#fun-run"), image: images.event.run },
            { ...s.events.items.cookie, href: p("/events#smile-cookie"), image: images.event.cookie },
          ],
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
      ],
    },
    {
      label: s.impactOfGiving.label,
      href: p("/impact-of-giving"),
      items: [],
    },
    {
      label: s.contact.label,
      href: p("/contact"),
      items: [],
    },
  ];
}
