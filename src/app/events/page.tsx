import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Upcoming Events — ${site.name}`,
  description:
    "Campaigns and events: #WaitingToBelong, the Serious(ly) Fun Run, and Smile Cookie Week.",
};

const events = [
  {
    id: "waiting-to-belong",
    tag: "#WaitingToBelongCampaign",
    title: "Everyone Needs A Safe Place to Live.",
    image: "/images/hero-belong.svg",
    description:
      "Too many people with developmental disabilities are still waiting for a safe, supported home. The #WaitingToBelong campaign funds new group home spaces and raises awareness with policymakers.",
    cta: { label: "Support the campaign", href: "/donate" },
  },
  {
    id: "fun-run",
    tag: "Community in Motion",
    title: "The Serious(ly) Fun Run",
    image: "/images/run.svg",
    description:
      "Save the date: Saturday, September 26th, 2026. A fully accessible route through the heart of the community — walk, roll, or run. Team registration, family-friendly, and 100% of proceeds stay local.",
    cta: { label: "Volunteer for race day", href: "/get-involved#volunteer" },
  },
  {
    id: "smile-cookie",
    tag: "Smile Cookie Week",
    title: "Partnership Drive",
    image: "/images/cookie.svg",
    description:
      "Every smile cookie sold at participating locations supports local programs. Grab a cookie, share a smile, change a life — and ask your workplace about matching partnerships.",
    cta: { label: "Become a partner", href: "/contact" },
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Upcoming Events"
        description="Show up, get moving, and stand with your neighbours."
        image="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {events.map((e, i) => (
            <Reveal key={e.id}>
              <article
                id={e.id}
                className={`scroll-mt-24 grid gap-8 lg:grid-cols-2 lg:items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl">
                  <Image src={e.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="glass rounded-2xl p-8 sm:p-10">
                  <p className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide">
                    {e.tag}
                  </p>
                  <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-ink">{e.title}</h2>
                  <p className="mt-4 text-ink-muted text-lg">{e.description}</p>
                  <Link
                    href={e.cta.href}
                    className="mt-8 inline-block px-6 py-3.5 rounded-2xl font-bold text-ink bg-accent hover:bg-accent-dark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    {e.cta.label}
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
