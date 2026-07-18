import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import ImpactTracker from "@/components/ImpactTracker";
import Services from "@/components/Services";
import Events from "@/components/Events";
import DonateForm from "@/components/DonateForm";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ImpactTracker />
      <Services />
      <Events />

      {/* Donate */}
      <section
        id="donate"
        aria-labelledby="donate-heading"
        className="relative overflow-hidden bg-gradient-to-b from-surface to-primary-light scroll-mt-24"
      >
        <div className="blob w-96 h-96 bg-accent/40 bottom-0 -left-24" aria-hidden="true" />
        <div className="blob w-80 h-80 bg-primary/30 top-10 -right-16" aria-hidden="true" />
        <div id="get-involved" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="donate-heading" className="text-3xl sm:text-4xl font-extrabold text-primary">
              Give the Gift of Belonging
            </h2>
            <p className="mt-4 text-ink-muted">
              Every dollar stays local, funding homes, programs, and opportunities for people with
              developmental disabilities.
            </p>
            <p className="mt-2">
              <Link
                href="/get-involved"
                className="font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4 hover:text-primary-dark transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                More ways to get involved →
              </Link>
            </p>
          </Reveal>
          <Reveal>
            <DonateForm />
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
