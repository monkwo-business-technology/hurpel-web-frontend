import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: `Call ${site.phone}, email ${site.email}, or send us a message.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="Questions about services, volunteering, or partnership? We'd love to hear from you."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80"
      />
      <ContactSection />
    </>
  );
}
