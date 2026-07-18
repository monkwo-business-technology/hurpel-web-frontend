import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import DonateForm from "@/components/DonateForm";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: `Donate — ${site.name}`,
  description:
    "Give once or monthly. Every dollar stays local, funding homes, programs, and opportunities.",
};

export default function DonatePage() {
  return (
    <>
      <PageHeader
        title="Donate"
        description="Every dollar stays local, funding homes, programs, and opportunities for people with developmental disabilities."
        image={images.banner.donate}
      />
      <section className="relative overflow-hidden bg-gradient-to-b from-surface to-primary-light">
        <div className="blob w-96 h-96 bg-accent/40 bottom-0 -left-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <Reveal>
            <DonateForm />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="donate-faq-heading" className="bg-surface-alt">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <Reveal className="text-center">
            <h2 id="donate-faq-heading" className="text-3xl font-extrabold text-primary">
              Giving, Answered
            </h2>
            <p className="mt-4 text-ink-muted">
              Registered Charity {site.charityNumber} — accountable, audited, and local.
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <FaqAccordion
              faqs={[
                {
                  question: "Will I get a tax receipt?",
                  answer:
                    "Yes. As a registered Canadian charity, we issue official donation receipts for gifts of $20 or more — automatically by email for online gifts.",
                },
                {
                  question: "Where does my money actually go?",
                  answer:
                    "Every dollar stays local: group homes and respite spaces, employment coaching, youth programs, and community access activities. Our audited financials are available on request.",
                },
                {
                  question: "Can I dedicate my gift to someone?",
                  answer:
                    "Absolutely — choose \"Dedicate this gift\" during checkout to give in honor or in memory of someone, and we can notify the family if you wish.",
                },
                {
                  question: "Is monthly giving better than one-time?",
                  answer:
                    "Monthly gifts give us predictable funding to plan programs year-round, and you can change or cancel anytime. Both are deeply appreciated.",
                },
              ]}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
