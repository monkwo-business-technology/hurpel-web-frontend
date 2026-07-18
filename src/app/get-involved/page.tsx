import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Get Involved — ${site.name}`,
  description: "Volunteer, donate, or partner with us to build a more inclusive community.",
};

const roles = [
  "Event-day crews (Fun Run, Smile Cookie Week)",
  "Program companions for day activities",
  "Skills mentors for employment services",
  "Board and committee volunteers",
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        title="Get Involved"
        description="Join 200+ active volunteers and 250 member families making inclusion real."
        image="/images/volunteer.svg"
      />

      <section id="volunteer" className="bg-surface scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-primary">Volunteer With Us</h2>
            <p className="mt-4 text-ink-muted text-lg">
              Whatever your skills or schedule, there&apos;s a place for you here.
            </p>
            <ul className="mt-6 space-y-3">
              {roles.map((r) => (
                <li key={r} className="flex items-center gap-3 text-ink">
                  <svg className="w-5 h-5 text-accent-dark shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  {r}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-block px-8 py-4 rounded-2xl font-bold text-white bg-primary hover:bg-primary-dark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Apply to Volunteer
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/volunteer.svg" alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="glass rounded-2xl p-10 h-full text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-extrabold text-primary">Give the Gift of Belonging</h2>
              <p className="mt-3 text-ink-muted">
                One-time or monthly — every dollar stays local, funding homes, programs, and
                opportunities.
              </p>
              <Link
                href="/donate"
                className="mt-6 inline-block px-8 py-4 rounded-2xl font-bold text-ink bg-accent hover:bg-accent-dark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Donate Now
              </Link>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article className="glass rounded-2xl p-10 h-full text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-extrabold text-primary">Partner With Us</h2>
              <p className="mt-3 text-ink-muted">
                Employers, sponsors, and community groups — let&apos;s build inclusion together.
                Call {site.phone} or send us a message.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block px-8 py-4 rounded-2xl font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Contact Us
              </Link>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
