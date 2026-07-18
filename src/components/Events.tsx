import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const events = [
  {
    href: "/events#waiting-to-belong",
    tag: "#WaitingToBelongCampaign",
    title: "Everyone Needs A Safe Place to Live.",
    image: "/images/hero-belong.svg",
    description:
      "Help us close the housing gap for people with developmental disabilities waiting for a safe, supported home.",
    cta: "Join the campaign",
  },
  {
    href: "/events#fun-run",
    tag: "Community in Motion",
    title: "The Serious(ly) Fun Run",
    image: "/images/run.svg",
    description:
      "Save the date: Saturday, September 26th, 2026. Walk, roll, or run — everyone belongs at the start line.",
    cta: "Save the date",
  },
  {
    href: "/events#smile-cookie",
    tag: "Smile Cookie Week",
    title: "Partnership Drive",
    image: "/images/cookie.svg",
    description:
      "Every smile cookie sold supports local programs. Grab a cookie, share a smile, change a life.",
    cta: "Find a location",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="relative overflow-hidden bg-white scroll-mt-24"
    >
      <div className="blob w-72 h-72 bg-accent/35 top-10 -right-16" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 id="events-heading" className="text-3xl sm:text-4xl font-extrabold text-primary">
            Upcoming Events & Campaigns
          </h2>
          <p className="mt-4 text-ink-muted">
            Show up, get moving, and stand with your neighbours.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {events.map((e, i) => (
            <Reveal key={e.tag} delay={i * 100}>
              <Link
                href={e.href}
                className="group block h-full glass rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={e.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <p className="absolute top-4 left-4 px-3 py-1 rounded-full glass-strong text-xs font-bold tracking-wide text-primary">
                    {e.tag}
                  </p>
                </div>
                <div className="p-7 flex flex-col">
                  <h3 className="text-xl font-bold text-ink group-hover:text-primary transition-colors">
                    {e.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted flex-1">
                    {e.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">
                    {e.cta}
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
