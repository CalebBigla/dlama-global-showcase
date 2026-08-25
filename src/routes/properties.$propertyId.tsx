import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Calendar,
  Check,
  Heart,
  MapPin,
  Maximize2,
  MessageCircle,
  Phone,
  Share2,
  Tag,
} from "lucide-react";
import { useState } from "react";
import { CTASection } from "@/components/CTASection";
import { GoldButton } from "@/components/GoldButton";
import { PropertyCard } from "@/components/PropertyCard";
import { Reveal } from "@/components/Reveal";
import { SectionDivider } from "@/components/SectionDivider";
import { SectionHeading } from "@/components/SectionHeading";
import { PromoPriceDisplay } from "@/components/PromoPriceDisplay";
import { agents, properties } from "@/lib/data";
import { toast } from "sonner";

export const Route = createFileRoute("/properties/$propertyId")({
  loader: ({ params }) => {
    const property = properties.find((p) => p.id === params.propertyId);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Property unavailable | Dlama Global Homes" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.property;
    return {
      meta: [
        { title: `${p.name}, ${p.location} | Dlama Global Homes` },
        { name: "description", content: p.description.slice(0, 155) },
        { property: "og:title", content: `${p.name} — ${p.plotSize || ""} Plot` },
        { property: "og:description", content: p.description.slice(0, 155) },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/properties/${params.propertyId}` },
      ],
      links: [{ rel: "canonical", href: `/properties/${params.propertyId}` }],
    };
  },
  component: PropertyDetail,
});

function PropertyDetail() {
  const { property } = Route.useLoaderData();
  const [activeImage, setActiveImage] = useState(0);
  const [saved, setSaved] = useState(false);
  const agent = agents.find((a) => a.id === property.agentId)!;
  const similar = properties.filter((p) => p.id !== property.id && p.location === property.location).slice(0, 3);

  return (
    <>
      <section className="bg-navy-deep pt-28 pb-10">
        <div className="container-lux">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={property.gallery[activeImage]}
              alt={property.name}
              className="h-full w-full object-cover transition-opacity duration-500"
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-4">
            {property.gallery.map((g, i) => (
              <button
                key={g + i}
                type="button"
                onClick={() => setActiveImage(i)}
                aria-label={`View image ${i + 1}`}
                className={`aspect-[4/3] overflow-hidden transition-opacity ${
                  i === activeImage ? "opacity-100 ring-2 ring-accent" : "opacity-55 hover:opacity-90"
                }`}
              >
                <img src={g} alt="" loading="lazy" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="sticky top-[68px] z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="container-lux flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3">
              <h1 className="truncate text-2xl text-primary">{property.name}</h1>
              {property.badge && (
                <span className="shrink-0 bg-accent px-3 py-1 text-[0.6rem] tracking-[0.2em] text-accent-foreground uppercase">
                  {property.badge}
                </span>
              )}
            </div>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-accent" /> {property.location}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setSaved((s) => !s)}
              aria-label="Save property"
              className="text-primary hover:text-accent"
            >
              <Heart className="h-5 w-5" fill={saved ? "currentColor" : "none"} />
            </button>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                toast.success("Link copied to clipboard");
              }}
              aria-label="Share property"
              className="text-primary hover:text-accent"
            >
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container-lux grid gap-16 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="flex flex-wrap gap-8 border-y border-border py-6 text-sm">
              {property.plotSize && (
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Maximize2 className="h-4 w-4 text-accent" /> {property.plotSize}
                </span>
              )}
              {property.paymentPlan && (
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4 text-accent" /> {property.paymentPlan} payment plan
                </span>
              )}
              <span className="flex items-center gap-2 text-muted-foreground">
                <Tag className="h-4 w-4 text-accent" /> {property.type}
              </span>
              <span
                className="px-3 py-1 text-[0.6rem] tracking-[0.2em] text-navy-deep uppercase"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                {property.status}
              </span>
            </div>

            <Reveal className="mt-12">
              <h2 className="text-3xl text-primary">Pricing & Payment Options</h2>
              <div className="mt-6 border border-border bg-secondary p-8">
                <PromoPriceDisplay property={property} size="lg" />
                {property.paymentPlan && (
                  <div className="mt-6 border-t border-border pt-6">
                    <h3 className="text-lg font-semibold text-primary">Flexible Payment Plan Available</h3>
                    <p className="mt-2 text-muted-foreground">
                      Spread your payment over {property.paymentPlan} with our flexible payment plan. No hidden fees, no interest charges.
                    </p>
                    {property.originalPrice && (
                      <p className="mt-3 text-sm text-accent">
                        💰 Limited time offer — save {property.currency}
                        {(property.originalPrice - property.price).toLocaleString()} when you secure your plot now
                      </p>
                    )}
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="text-3xl text-primary">About This Estate</h2>
              <p className="mt-6 text-base leading-loose text-muted-foreground">{property.description}</p>
              {property.badge && (
                <div className="my-8 border-l-2 border-accent pl-6">
                  <p className="font-display text-xl leading-relaxed text-primary">
                    {property.badge} — This estate comes with verified land documentation for your peace of mind.
                  </p>
                </div>
              )}
              <p className="text-base leading-loose text-muted-foreground">
                Site visits are available by appointment. Our team will walk you through the estate layout, infrastructure progress, and documentation process.
              </p>
            </Reveal>

            <Reveal className="mt-16">
              <h2 className="text-3xl text-primary">Features & Amenities</h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {property.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-16">
              <h2 className="text-3xl text-primary">Estate Location</h2>
              <p className="mt-4 text-sm text-muted-foreground">
                <MapPin className="inline h-4 w-4 text-accent" /> {property.location}, {property.country}
              </p>
              <div className="mt-6 overflow-hidden border border-border">
                <iframe
                  title={`Map of ${property.location}`}
                  className="h-80 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    `${property.location}, ${property.country}`,
                  )}&output=embed`}
                />
              </div>
            </Reveal>

            <Reveal className="mt-16">
              <div className="border border-accent/20 bg-accent/5 p-8">
                <h3 className="text-2xl text-primary">Why Buy Land in This Estate?</h3>
                <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>
                      <strong className="text-primary">Verified Documentation:</strong> All plots come with proper land titles and clear ownership
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>
                      <strong className="text-primary">Strategic Location:</strong> Growing area with excellent access to major roads and amenities
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>
                      <strong className="text-primary">Flexible Payment:</strong> Affordable payment plans that work with your budget
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>
                      <strong className="text-primary">Investment Potential:</strong> Prime location in a developing area of Adamawa State
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-40 lg:self-start">
            <div className="border border-border bg-card p-8 shadow-[0_30px_70px_-50px_oklch(0.29_0.062_265_/_0.6)]">
              <h3 className="text-xl text-primary">Interested in This Plot?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below or contact us directly via WhatsApp or phone.
              </p>

              <form
                className="mt-6 flex flex-col gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success("Request received — our team will contact you shortly!");
                }}
              >
                <input
                  required
                  placeholder="Full name"
                  className="border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone number"
                  className="border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                />
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                />
                <textarea
                  rows={4}
                  defaultValue={`I'm interested in ${property.name} (${property.plotSize}). Please provide more details about payment plans and documentation.`}
                  className="border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                />
                <GoldButton type="submit">Request Site Visit</GoldButton>
              </form>

              <div className="mt-6 space-y-3 border-t border-border pt-6">
                <a
                  href={`https://wa.me/2348060774472?text=${encodeURIComponent(
                    `Hi, I'm interested in ${property.name} at ${property.location}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-accent transition-colors hover:text-accent/80"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp: 08060774472
                </a>
                <a href="tel:08060774472" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-accent">
                  <Phone className="h-4 w-4" />
                  Call: 08060774472
                </a>
              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <img src={agent.photo} alt={agent.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-primary">{agent.name}</p>
                  <p className="text-xs text-muted-foreground">{agent.title}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 border border-border bg-secondary p-6">
              <h4 className="text-sm font-semibold text-primary">Need Help Deciding?</h4>
              <p className="mt-2 text-xs text-muted-foreground">
                Our team can help you compare different plot sizes, review payment options, and answer all your questions about the documentation process.
              </p>
              <Link to="/contact" className="mt-4 inline-block text-xs text-accent hover:text-accent/80">
                Visit Our Office →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {similar.length > 0 && (
        <>
          <SectionDivider />
          <section className="py-24">
            <div className="container-lux">
              <SectionHeading eyebrow="More Options" title={`Other plots in ${property.location.split(",")[0]}`} />
              <div className="mt-12 grid gap-8 md:grid-cols-3">
                {similar.map((p, i) => (
                  <Reveal key={p.id} delay={i * 100}>
                    <PropertyCard property={p} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <CTASection />
    </>
  );
}
