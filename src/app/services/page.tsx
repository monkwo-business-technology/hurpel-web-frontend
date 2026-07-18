import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Services — ${site.name}`,
  description:
    "Employment, accommodation and respite, child and youth programs, and community access services.",
};

const services = [
  {
    id: "employment",
    title: "Employment Services",
    image: "/images/employment.svg",
    description:
      "Custom employment planning and placement that matches individual strengths with meaningful work in the community.",
    points: [
      "Person-centered career planning",
      "Job coaching and on-site support",
      "Employer partnerships across the region",
    ],
  },
  {
    id: "accommodation",
    title: "Accommodation & Respite Services",
    image: "/images/housing.svg",
    description:
      "Safe, welcoming group homes and short-term respite stays that give families support when they need it most.",
    points: [
      "32 safe group homes",
      "3 dedicated respite locations",
      "24/7 trained residential staff",
    ],
  },
  {
    id: "youth",
    title: "Child & Youth Services",
    image: "/images/youth.svg",
    description:
      "Family-centered workshops and programs that help children and youth grow, learn, and belong.",
    points: [
      "Family-centered workshops",
      "School transition support",
      "Peer connection programs",
    ],
  },
  {
    id: "community",
    title: "Community Access Services",
    image: "/images/community.svg",
    description:
      "Day programs, social and recreational activities that open doors to friendship and full community participation.",
    points: [
      "Day programs across the city",
      "Social & recreational activities",
      "Volunteer-supported outings",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        description="Person-centered supports built around each individual, their family, and their goals."
        image="/images/community.svg"
      />

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {services.map((s, i) => (
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
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">{s.title}</h2>
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
                    href="/contact"
                    className="mt-8 inline-block px-6 py-3.5 rounded-2xl font-bold text-white bg-primary hover:bg-primary-dark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    Access This Support
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
