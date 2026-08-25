import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Compass, Gem, Globe2, Handshake, Quote, Search, Star } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-villa.jpg";
import { Counter } from "@/components/Counter";
import { CTASection } from "@/components/CTASection";
import { GoldButton, GoldLink } from "@/components/GoldButton";
import { PropertyCard } from "@/components/PropertyCard";
import { Reveal } from "@/components/Reveal";
import { SectionDivider } from "@/components/SectionDivider";
import { SectionHeading } from "@/components/SectionHeading";
import { articles, locations, properties, testimonials } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dlama Global Homes | Invest Smart, Live Better" },
      {
        name: "description",
        content:
          "Secure your dream plot in Yola, Adamawa State with flexible payment plans. Estate plots in Parkview, New City, and Hossana Estates with genuine documentation.",
      },
      { property: "og:title", content: "Dlama Global Homes | Invest Smart, Live Better" },
      {
        property: "og:description",
        content: "Affordable estate plots in Yola with flexible payment plans and secure land titles.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const stats = [
  { value: 100, suffix: "+", label: "Plots Sold" },
  { value: 3, suffix: "", label: "Active Estates" },
  { value: 1, suffix: "", label: "Year of Excellence" },
  { value: 100, suffix: "%", label: "Customer Satisfaction" },
];

const pillars = [
  {
    icon: Handshake,
    title: "Flexible Payment Plans",
    body: "3 to 6 month payment options that make land ownership accessible without financial strain.",
  },
  {
    icon: Gem,
    title: "Genuine Documentation",
    body: "All estates come with verified titles and Certificate of Occupancy. Your investment is secure.",
  },
  {
    icon: Compass,
    title: "Prime Locations",
    body: "Strategic estate locations in Jimeta, Yola South, and along major development corridors.",
  },
  {
    icon: Globe2,
    title: "Local Expertise",
    body: "Based in Yola, we know every estate, every road, and every opportunity in Adamawa State.",
  },
];

function Index() {
  const [offset, setOffset] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, []);

  const featured = properties.filter((p) => p.featured);

  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-deep">
        <img
          src={heroImage}
          alt="Luxury hillside villa at golden hour"
          width={1920}
          height={1200}
          className="absolute inset-0 h-[118%] w-full object-cover"
          style={{ transform: `translateY(${offset * 0.25}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/40 to-navy-deep/90" />

        <div className="container-lux relative pt-28 pb-24 text-center">
          <p className="animate-fade-up text-[0.65rem] tracking-[0.4em] text-accent uppercase">
            Dlama Global Homes
          </p>
          <h1
            className="animate-fade-up mx-auto mt-8 max-w-4xl text-5xl leading-[1.05] text-primary-foreground md:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Invest Smart.
            <br />
            <span className="gold-text">Live Better.</span>
          </h1>
          <p
            className="animate-fade-up mx-auto mt-7 max-w-xl text-sm leading-relaxed text-primary-foreground/75 md:text-base"
            style={{ animationDelay: "220ms" }}
          >
            Secure your future with affordable estate plots in Yola, Adamawa State. Flexible payment plans, genuine documentation, and prime locations.
          </p>

          <form
            className="animate-fade-up mx-auto mt-12 grid max-w-4xl gap-px overflow-hidden bg-primary-foreground/15 text-left backdrop-blur md:grid-cols-[1.2fr_1fr_1fr_auto]"
            style={{ animationDelay: "320ms" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="bg-navy-deep/70 px-5 py-4">
              <span className="block text-[0.55rem] tracking-[0.28em] text-accent uppercase">Estate</span>
              <select className="mt-1 w-full bg-transparent text-sm text-primary-foreground focus:outline-none">
                {["Any Estate", "Parkview Estate", "New City Estate", "Hossana Estate", "Jimeta Properties"].map((t) => (
                  <option key={t} className="text-primary">{t}</option>
                ))}
              </select>
            </label>
            <label className="bg-navy-deep/70 px-5 py-4">
              <span className="block text-[0.55rem] tracking-[0.28em] text-accent uppercase">Plot Size</span>
              <select className="mt-1 w-full bg-transparent text-sm text-primary-foreground focus:outline-none">
                {["Any Size", "50×100", "100×100"].map((t) => (
                  <option key={t} className="text-primary">{t}</option>
                ))}
              </select>
            </label>
            <label className="bg-navy-deep/70 px-5 py-4">
              <span className="block text-[0.55rem] tracking-[0.28em] text-accent uppercase">Price Range</span>
              <select className="mt-1 w-full bg-transparent text-sm text-primary-foreground focus:outline-none">
                {["Any Price", "₦500K – ₦1M", "₦1M – ₦2M", "₦2M – ₦3M", "₦3M+"].map((t) => (
                  <option key={t} className="text-primary">{t}</option>
                ))}
              </select>
            </label>
            <GoldButton type="submit" className="h-full px-8">
              <Search className="h-4 w-4" /> Search
            </GoldButton>
          </form>

          <div className="mt-16 flex justify-center text-primary-foreground/50">
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-primary-foreground">
        <div className="container-lux grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <p className="font-display text-4xl text-accent md:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-[0.62rem] tracking-[0.26em] text-primary-foreground/60 uppercase">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-28">
        <div className="container-lux">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="Our Estates"
              title="Featured Properties"
              body="Current opportunities across our premium estates in Yola. All prices include flexible payment options."
            />
            <Reveal delay={120}>
              <Link
                to="/properties"
                className="group inline-flex items-center gap-2 text-[0.68rem] tracking-[0.24em] text-primary uppercase hover:text-accent"
              >
                View all properties
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <PropertyCard property={p} />
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
            eyebrow="Why Choose Us"
            title="Making land ownership accessible and secure"
          />
          <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <p.icon className="h-7 w-7 text-accent" strokeWidth={1.2} />
                <h3 className="mt-6 text-xl text-primary">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-28">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Our Locations"
            title="Strategic Estate Locations"
            body="Prime residential estates across Yola and Adamawa State, carefully selected for growth potential."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {locations.map((l, i) => (
              <Reveal key={l.name} delay={i * 80}>
                <Link
                  to="/properties"
                  className="group relative block h-72 overflow-hidden"
                >
                  <img
                    src={l.image}
                    alt={l.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-2xl text-primary-foreground">{l.name}</h3>
                    <p className="mt-1 text-[0.62rem] tracking-[0.24em] text-accent uppercase">
                      {l.listings} available plots
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container-lux max-w-3xl text-center">
          <Quote className="mx-auto h-8 w-8 text-accent" strokeWidth={1} />
          <div className="relative mt-10 min-h-56">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
                }`}
              >
                <p className="font-display text-2xl leading-relaxed text-primary md:text-3xl">
                  “{t.quote}”
                </p>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <img src={t.photo} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                  <div className="text-left">
                    <p className="text-sm text-primary">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-px w-10 transition-colors ${i === active ? "bg-accent" : "bg-border"}`}
              />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-28">
        <div className="container-lux">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading eyebrow="Insights" title="Land Investment & Market Updates" />
            <Reveal delay={120}>
              <Link
                to="/insights"
                className="group inline-flex items-center gap-2 text-[0.68rem] tracking-[0.24em] text-primary uppercase hover:text-accent"
              >
                All insights
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {articles.slice(0, 3).map((a, i) => (
              <Reveal key={a.id} delay={i * 100}>
                <Link to="/insights" className="group block">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-5 text-[0.6rem] tracking-[0.26em] text-accent uppercase">
                    {a.category} · {a.readTime}
                  </p>
                  <h3 className="mt-3 text-xl leading-snug text-primary group-hover:text-accent-foreground">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
