import { createFileRoute } from "@tanstack/react-router";
import { SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { PropertyCard } from "@/components/PropertyCard";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { IMAGES, properties } from "@/lib/data";

export const Route = createFileRoute("/properties/")({
  head: () => ({
    meta: [
      { title: "Available Estate Plots in Yola | Dlama Global Homes" },
      {
        name: "description",
        content:
          "Browse affordable estate plots in Parkview, New City, and Hossana Estates. Flexible payment plans, verified titles, and prime locations in Yola, Adamawa State.",
      },
      { property: "og:title", content: "Estate Plots for Sale | Dlama Global Homes" },
      {
        property: "og:description",
        content: "Secure your plot with flexible payment plans and genuine documentation.",
      },
      { property: "og:url", content: "/properties" },
    ],
    links: [{ rel: "canonical", href: "/properties" }],
  }),
  component: PropertiesPage,
});

const plotSizes = ["All Sizes", "50×100", "100×100"] as const;
const statuses = ["All Status", "For Sale", "Pre-Sale"] as const;
const sorts = ["Newest First", "Price: Low to High", "Price: High to Low"] as const;
const locations = ["All Locations", "Numan Road", "Jimeta", "Yola South"] as const;

function PropertiesPage() {
  const [plotSize, setPlotSize] = useState<(typeof plotSizes)[number]>("All Sizes");
  const [status, setStatus] = useState<(typeof statuses)[number]>("All Status");
  const [location, setLocation] = useState<(typeof locations)[number]>("All Locations");
  const [sort, setSort] = useState<(typeof sorts)[number]>("Newest First");
  const [open, setOpen] = useState(true);

  const list = useMemo(() => {
    const filtered = properties.filter(
      (p) =>
        (plotSize === "All Sizes" || p.plotSize === plotSize) &&
        (status === "All Status" || p.status === status) &&
        (location === "All Locations" || p.location.includes(location)),
    );
    if (sort === "Price: High to Low") return [...filtered].sort((a, b) => b.price - a.price);
    if (sort === "Price: Low to High") return [...filtered].sort((a, b) => a.price - b.price);
    return filtered;
  }, [plotSize, status, location, sort]);

  return (
    <>
      <PageHero
        eyebrow="Our Estates"
        title="Available Plots in Prime Locations"
        body="Carefully selected estate plots across Yola with verified documentation, flexible payment plans, and strategic locations for growth."
        image={IMAGES.villa2}
      />

      <div className="sticky top-[68px] z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="container-lux py-4">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
            <p className="min-w-0 truncate text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
              {list.length} {list.length === 1 ? "plot" : "plots"} available
            </p>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="inline-flex shrink-0 items-center gap-2 text-[0.65rem] tracking-[0.24em] text-primary uppercase hover:text-accent"
            >
              <SlidersHorizontal className="h-4 w-4" /> {open ? "Hide" : "Show"} Filters
            </button>
          </div>

          <div
            className={`grid gap-5 overflow-hidden transition-all duration-500 md:grid-cols-4 ${
              open ? "mt-5 max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <Filter label="Plot Size">
              <select
                value={plotSize}
                onChange={(e) => setPlotSize(e.target.value as (typeof plotSizes)[number])}
                className="w-full bg-transparent text-sm text-primary focus:outline-none"
              >
                {plotSizes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Filter>
            <Filter label="Location">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value as (typeof locations)[number])}
                className="w-full bg-transparent text-sm text-primary focus:outline-none"
              >
                {locations.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Filter>
            <Filter label="Status">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as (typeof statuses)[number])}
                className="w-full bg-transparent text-sm text-primary focus:outline-none"
              >
                {statuses.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Filter>
            <Filter label="Sort By">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as (typeof sorts)[number])}
                className="w-full bg-transparent text-sm text-primary focus:outline-none"
              >
                {sorts.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Filter>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container-lux">
          {list.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {list.map((p, i) => (
                <Reveal key={p.id} delay={(i % 3) * 100}>
                  <PropertyCard property={p} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">
                No plots match your current filters.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try adjusting your search criteria or contact us for more options.
              </p>
              <button
                onClick={() => {
                  setPlotSize("All Sizes");
                  setStatus("All Status");
                  setLocation("All Locations");
                }}
                className="mt-6 text-sm text-accent hover:text-accent/80"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-lux max-w-3xl text-center">
          <Reveal>
            <h2 className="text-3xl text-primary">Can't Find What You're Looking For?</h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              We have more estates and plots coming soon. Register your interest and we'll notify you when new opportunities match your requirements.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/2348060774472?text=Hi%2C%20I%27m%20looking%20for%20a%20specific%20plot%20size%20or%20location"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1fb855]"
              >
                Message Us on WhatsApp
              </a>
              <a
                href="tel:08060774472"
                className="inline-flex items-center gap-2 border border-border bg-background px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-card"
              >
                Call 08060774472
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Limited Time Offers"
        title="Lock in today's discounted prices"
        body="Many of our estates are selling fast. Secure your plot now with our flexible payment plans and benefit from current promotional pricing."
      />
    </>
  );
}

function Filter({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="border border-border bg-card px-4 py-3">
      <span className="block text-[0.55rem] tracking-[0.26em] text-muted-foreground uppercase">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
