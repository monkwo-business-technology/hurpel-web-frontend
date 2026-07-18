import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import DonateForm from "@/components/DonateForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

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
        image="/images/donate.svg"
      />
      <section className="relative overflow-hidden bg-gradient-to-b from-surface to-primary-light">
        <div className="blob w-96 h-96 bg-accent/40 bottom-0 -left-20" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <Reveal>
            <DonateForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
