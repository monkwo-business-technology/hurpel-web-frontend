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

export const navSections: NavSection[] = [
  {
    label: "Who We Are",
    href: "/about",
    items: [
      {
        label: "Our Mission & Values",
        description: "Valued people, inclusive community — what drives us every day.",
        href: "/about#mission",
        image: "/images/about.svg",
      },
      {
        label: "Our Impact",
        description: "1,000+ people supported annually across 32 homes.",
        href: "/about#impact",
        image: "/images/community.svg",
      },
      {
        label: "Accreditation & Accountability",
        description: "Proudly FOCUS Accredited — see how we stay transparent.",
        href: "/about#accountability",
        image: "/images/volunteer.svg",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    items: [
      {
        label: "Employment Services",
        description: "Custom planning and placement for meaningful work.",
        href: "/services#employment",
        image: "/images/employment.svg",
      },
      {
        label: "Accommodation & Respite",
        description: "Safe group homes and short-term respite stays.",
        href: "/services#accommodation",
        image: "/images/housing.svg",
      },
      {
        label: "Child & Youth Services",
        description: "Family-centered workshops for growing minds.",
        href: "/services#youth",
        image: "/images/youth.svg",
      },
      {
        label: "Community Access",
        description: "Day programs, social and recreational activities.",
        href: "/services#community",
        image: "/images/community.svg",
      },
    ],
  },
  {
    label: "Upcoming Events",
    href: "/events",
    items: [
      {
        label: "#WaitingToBelong Campaign",
        description: "Everyone needs a safe place to live.",
        href: "/events#waiting-to-belong",
        image: "/images/hero-belong.svg",
      },
      {
        label: "The Serious(ly) Fun Run",
        description: "Saturday, September 26th, 2026 — walk, roll, or run.",
        href: "/events#fun-run",
        image: "/images/run.svg",
      },
      {
        label: "Smile Cookie Week",
        description: "Every cookie sold supports local programs.",
        href: "/events#smile-cookie",
        image: "/images/cookie.svg",
      },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    items: [
      {
        label: "Volunteer With Us",
        description: "Join 200+ active volunteers making inclusion real.",
        href: "/get-involved#volunteer",
        image: "/images/volunteer.svg",
      },
      {
        label: "Donate",
        description: "Give once or monthly — every dollar stays local.",
        href: "/donate",
        image: "/images/donate.svg",
      },
      {
        label: "Contact & Support",
        description: "Questions about services or partnership? Reach out.",
        href: "/contact",
        image: "/images/contact.svg",
      },
    ],
  },
];
