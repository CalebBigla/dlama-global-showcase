import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  inverted?: boolean;
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-[0.65rem] tracking-[0.34em] text-accent uppercase">{eyebrow}</p>
      <h2
        className={`mt-5 text-4xl leading-[1.1] md:text-5xl ${
          inverted ? "text-primary-foreground" : "text-primary"
        }`}
      >
        {title}
      </h2>
      <div
        className={`gold-rule mt-6 h-px w-24 ${align === "center" ? "mx-auto" : ""}`}
        style={{ backgroundImage: "var(--gradient-gold)" }}
      />
      {body ? (
        <p
          className={`mt-6 text-sm leading-relaxed ${
            inverted ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          {body}
        </p>
      ) : null}
    </Reveal>
  );
}