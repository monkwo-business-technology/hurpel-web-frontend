import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ImpactTracker from "@/components/ImpactTracker";
import Reveal from "@/components/Reveal";
import StoryCarousel from "@/components/StoryCarousel";
import { site } from "@/lib/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: `Who We Are — ${site.name}`,
  description:
    "Our mission, our impact, and our accountability: quality supports for people with developmental disabilities.",
};

const values = [
  {
    title: "Dignity First",
    description:
      "Every person has the right to be heard, respected, and supported on their own terms.",
  },
  {
    title: "Family Partnership",
    description:
      "We collaborate with families and caregivers as equal partners in every support plan.",
  },
  {
    title: "Community Belonging",
    description:
      "Inclusion means real friendships, real jobs, and real homes — right here in the community.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Who We Are"
        description="A community organization providing quality supports for people with developmental disabilities to live fulfilled lives."
        image={images.banner.about}
      />

      <section id="mission" className="bg-surface scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <Reveal className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-primary">Our Mission & Values</h2>
            <p className="mt-4 text-ink-muted text-lg">
              {site.description} We believe everyone deserves a safe place to live, meaningful
              work, and a community that celebrates them.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <article className="glass rounded-2xl p-8 h-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-ink">{v.title}</h3>
                  <p className="mt-3 text-ink-muted">{v.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div id="impact" className="scroll-mt-24">
        <ImpactTracker />
      </div>

      <section id="accountability" className="bg-white scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-primary">
              Accreditation & Accountability
            </h2>
            <p className="mt-4 text-ink-muted text-lg">
              We are proudly FOCUS Accredited for maximum accountability. As a registered charity
              ({site.charityNumber}), every dollar is tracked, audited, and reported — so you can
              give and partner with total confidence.
            </p>
            <Link
              href="/get-involved"
              className="mt-8 inline-block px-8 py-4 rounded-2xl font-bold text-ink bg-accent hover:bg-accent-dark transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Get Involved
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
              <Image src={images.involve.partner} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <StoryCarousel />
    </>
  );
}
