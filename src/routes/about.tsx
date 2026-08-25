import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionDivider } from "@/components/SectionDivider";
import { SectionHeading } from "@/components/SectionHeading";
import { IMAGES } from "@/lib/data";
import ceoImage from "@/assets/CEO.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dlama Global Homes | Our Story" },
      {
        name: "description",
        content:
          "Dlama Global Homes is your trusted partner for affordable estate plots in Yola, Adamawa State. We offer flexible payment plans and genuine land documentation.",
      },
      { property: "og:title", content: "About Dlama Global Homes" },
      { property: "og:description", content: "Making land ownership accessible in Adamawa State." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const milestones = [
  { year: "2026", title: "Founded in Yola", body: "Dlama Haruna Kwaji establishes Dlama Global Homes with a vision to make land ownership accessible to every Nigerian family through transparent processes and flexible payment solutions." },
  { year: "2026", title: "First Estate Launched", body: "Parkview Estate opens as our flagship development, setting new standards for affordable estate plots along Numan Road corridor." },
  { year: "2026", title: "C of O Partnerships", body: "Secured partnerships with government agencies to expedite Certificate of Occupancy processing for all estate developments." },
  { year: "2026", title: "100+ Plots Sold", body: "Reached our first milestone of 100 satisfied landowners, establishing trust in the Adamawa real estate market." },
  { year: "2027", title: "Multi-Estate Portfolio", body: "Expanded to operate across 6+ strategic estates in Jimeta and Yola South, becoming Adamawa's trusted land investment partner." },
];

const values = [
  { title: "Mission", body: "To make land ownership accessible to every Nigerian family through transparent processes, flexible payment plans, and genuine documentation." },
  { title: "Vision", body: "To be Adamawa State's most trusted real estate company, known for integrity, affordability, and customer satisfaction." },
  { title: "Values", body: "Transparency in every transaction. Flexibility in payment terms. Genuine documentation for peace of mind. Customer satisfaction above all." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Building Trust Through Accessible Land Ownership"
        body="Founded in 2026 by Dlama Haruna Kwaji, Dlama Global Homes was built on the belief that every Nigerian deserves to own land. We make it possible through flexible payment plans and transparent processes."
        image={IMAGES.interior}
      />

      <section className="py-28">
        <div className="container-lux grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <img src={IMAGES.villa3} alt="Estate development in Yola" loading="lazy" className="w-full object-cover" />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Who We Are"
              title="Your Partner in Land Investment"
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Founded in 2026 by Dlama Haruna Kwaji, Dlama Global Homes was established to address the need for transparent, affordable land ownership in Adamawa State. As MD/CEO, Dlama Haruna Kwaji brings a commitment to making real estate investment accessible to every Nigerian family.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Based in Jimeta, Yola, we specialize in helping families and investors secure prime estate plots across Adamawa State. We understand that buying land is one of the most important investments you'll ever make. That's why we've built our business on three pillars: affordable pricing with genuine discounts, flexible payment plans that fit your budget, and complete transparency in documentation.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              From Parkview Estate on Numan Road to Hossana Estate in Yola South, we carefully select locations with strong growth potential and excellent infrastructure. Our team walks you through every step, from plot selection to final documentation, ensuring your investment is secure and your experience is seamless.
            </p>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      <section className="py-28">
        <div className="container-lux">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.5fr]">
            <Reveal>
              <img 
                src={ceoImage} 
                alt="Dlama Haruna Kwaji - MD/CEO" 
                className="w-full object-cover shadow-[0_30px_70px_-40px_oklch(0.29_0.062_265_/_0.6)]" 
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[0.65rem] tracking-[0.34em] text-accent uppercase">Leadership</p>
              <h2 className="mt-4 text-3xl text-primary md:text-4xl">Meet Our MD/CEO</h2>
              <div className="gold-rule mt-5 w-16" />
              <h3 className="mt-6 text-2xl text-primary">Dlama Haruna Kwaji</h3>
              <p className="mt-2 text-sm text-muted-foreground">Managing Director & Chief Executive Officer</p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                "At Dlama Global Homes, we believe that land ownership shouldn't be a privilege for the few—it should be accessible to every Nigerian family. That's why we created flexible payment plans that work with your budget, not against it."
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                "Our commitment is simple: verified titles, transparent pricing, and genuine support from the day you inquire to the day you receive your documentation. When you invest with Dlama Global Homes, you're not just buying land—you're securing your family's future."
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:08060774472"
                  className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary"
                >
                  Contact the CEO
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-28">
        <div className="container-lux">
          <SectionHeading
            align="center"
            eyebrow="Our Journey"
            title="Growing with Yola, one plot at a time"
          />
          <div className="mx-auto mt-16 max-w-4xl space-y-10">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 80}>
                <div className="grid gap-6 lg:grid-cols-[140px_1fr]">
                  <p className="font-display text-4xl text-accent">{m.year}</p>
                  <div>
                    <h3 className="text-2xl text-primary">{m.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-28">
        <div className="container-lux">
          <SectionHeading
            align="center"
            eyebrow="Our Purpose"
            title="Mission, Vision & Values"
          />
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="border-l-2 border-accent pl-6">
                  <h3 className="text-xl text-primary">{v.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-28">
        <div className="container-lux">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <SectionHeading
                align="center"
                eyebrow="Our Commitment"
                title="Why Families Trust Dlama Global Homes"
              />
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                {[
                  { label: "Verified Titles", desc: "All estates come with proper documentation and C of O where applicable" },
                  { label: "Flexible Terms", desc: "3-6 month payment plans designed to fit your budget" },
                  { label: "Prime Locations", desc: "Strategic estates in growing areas of Jimeta and Yola South" },
                  { label: "After-Sales Support", desc: "Continued assistance through documentation and development" },
                ].map((item, i) => (
                  <Reveal key={item.label} delay={i * 80}>
                    <div className="text-left">
                      <h4 className="text-lg text-primary">{item.label}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
