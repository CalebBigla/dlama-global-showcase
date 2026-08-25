import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { GoldButton } from "@/components/GoldButton";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionDivider } from "@/components/SectionDivider";
import { CTASection } from "@/components/CTASection";
import { IMAGES } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Dlama Global Homes | Get In Touch" },
      {
        name: "description",
        content:
          "Visit our office in Jimeta, Yola or reach us via phone, WhatsApp, or email. Get expert advice on estate plots and flexible payment plans.",
      },
      { property: "og:title", content: "Contact | Dlama Global Homes" },
      { property: "og:description", content: "Speak with our team about affordable estate plots in Yola." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const offices = [
  { 
    city: "Yola Head Office", 
    address: "No 43 Atiku Abubakar Way, opposite Sabru House, Jimeta, Yola, Adamawa State", 
    hours: "Mon–Sat 08:00–18:00 WAT", 
    phone: "08060774472" 
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Help You Find Your Perfect Plot"
        body="Whether you have questions about our estates, payment plans, or documentation process, our team is here to guide you every step of the way."
        image={IMAGES.villa}
      />

      <section className="py-24">
        <div className="container-lux grid gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl text-primary">Send an inquiry</h2>
            <div className="gold-rule mt-5 w-20" />
            <form
              className="mt-10 flex flex-col gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast.success("Thank you — our team will contact you shortly.");
              }}
            >
              <Field label="Full name">
                <input required className="field" placeholder="Your name" />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email">
                  <input required type="email" className="field" placeholder="you@email.com" />
                </Field>
                <Field label="Phone">
                  <input className="field" placeholder="080 0000 0000" />
                </Field>
              </div>
              <Field label="Estate interest">
                <select className="field">
                  {["Parkview Estate", "New City Estate", "Hossana Estate", "Other estates in Yola", "General inquiry"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field label="Message">
                <textarea rows={5} className="field" placeholder="Tell us about your land investment goals, preferred plot size, or any questions you have." />
              </Field>
              <GoldButton type="submit" className="self-start">
                {sent ? "Inquiry Sent" : "Send Inquiry"}
              </GoldButton>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="text-3xl text-primary">Visit Our Office</h2>
            <div className="gold-rule mt-5 w-20" />
            <Accordion type="single" collapsible className="mt-8" defaultValue="Yola Head Office">
              {offices.map((o) => (
                <AccordionItem key={o.city} value={o.city}>
                  <AccordionTrigger className="font-display text-xl">{o.city}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">{o.address}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{o.hours}</p>
                    <p className="mt-2 text-sm text-accent-foreground">{o.phone}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-10 space-y-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" /> 08060774472
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" /> info@dlamaglobalhomes.com
              </p>
              <a
                href="https://wa.me/2348060774472"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-accent transition-colors hover:text-accent/80"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp: 08060774472
              </a>
            </div>

            <div className="mt-10 overflow-hidden border border-border">
              <iframe
                title="Dlama Global Homes office location"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Jimeta,+Yola,+Adamawa+State,+Nigeria&output=embed"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      <CTASection
        eyebrow="Our Promise"
        title="Transparent Process. Flexible Plans. Genuine Documentation."
        body="From your first inquiry to receiving your land documents, we guide you through every step with complete transparency and professionalism."
      />
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[0.6rem] tracking-[0.26em] text-muted-foreground uppercase">{label}</span>
      <div className="mt-2 [&_.field]:w-full [&_.field]:border [&_.field]:border-border [&_.field]:bg-card [&_.field]:px-4 [&_.field]:py-3 [&_.field]:text-sm [&_.field]:transition-colors [&_.field]:focus:border-accent [&_.field]:focus:outline-none">
        {children}
      </div>
    </label>
  );
}