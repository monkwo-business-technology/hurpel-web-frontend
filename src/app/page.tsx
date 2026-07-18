import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import TrustStrip from "@/components/TrustStrip";
import ImpactTracker from "@/components/ImpactTracker";
import Services from "@/components/Services";
import StoryCarousel from "@/components/StoryCarousel";
import Events from "@/components/Events";
import DonateBand from "@/components/DonateBand";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/images";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <TrustStrip />
      <Services />
      <ImpactTracker />
      <StoryCarousel />
      <Events />

      {/* Get involved split */}
      <section
        id="get-involved"
        aria-labelledby="involved-heading"
        className="bg-surface scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <Reveal className="text-center max-w-2xl mx-auto">
            <h2 id="involved-heading" className="text-3xl sm:text-4xl font-extrabold text-primary">
              Be Part of the Story
            </h2>
            <p className="mt-4 text-ink-muted">
              Volunteer your time or partner with us — inclusion is built by people like you.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                href: "/get-involved#volunteer",
                image: images.involve.volunteer,
                title: "Volunteer With Us",
                description:
                  "Join 200+ active volunteers — event crews, program companions, skills mentors, and more.",
                cta: "Apply to Volunteer",
              },
              {
                href: "/get-involved",
                image: images.involve.partner,
                title: "Partner With Us",
                description:
                  "Employers, sponsors, and community groups — let's build inclusion together.",
                cta: "Become a Partner",
              },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <Link
                  href={p.href}
                  className="group relative block h-80 rounded-2xl overflow-hidden shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <h3 className="text-2xl font-extrabold text-white">{p.title}</h3>
                    <p className="mt-2 text-white/85 max-w-md">{p.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 font-bold text-accent">
                      {p.cta}
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

      <DonateBand />
    </>
  );
}
