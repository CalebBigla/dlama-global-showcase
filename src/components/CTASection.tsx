import { GoldLink } from "./GoldButton";
import { Reveal } from "./Reveal";

export function CTASection({
  eyebrow = "Ready to Invest?",
  title = "Secure Your Plot Today with Flexible Payment Plans",
  body = "Join hundreds of satisfied landowners who chose Dlama Global Homes for verified titles, prime locations, and transparent processes.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-navy-deep py-24 text-primary-foreground">
      <Reveal className="container-lux max-w-3xl text-center">
        <p className="text-[0.65rem] tracking-[0.34em] text-accent uppercase">{eyebrow}</p>
        <h2 className="mt-6 text-4xl leading-tight text-primary-foreground md:text-5xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-primary-foreground/70">{body}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <GoldLink to="/contact">Book Site Visit</GoldLink>
          <GoldLink to="/properties" variant="light">
            View Available Estates
          </GoldLink>
        </div>
      </Reveal>
    </section>
  );
}