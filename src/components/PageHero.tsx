export function PageHero({
  eyebrow,
  title,
  body,
  image,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-navy-deep pt-32 pb-16">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/30" />
      <div className="container-lux relative">
        <p className="text-[0.65rem] tracking-[0.34em] text-accent uppercase">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-primary-foreground md:text-6xl">
          {title}
        </h1>
        {body ? (
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-primary-foreground/70">{body}</p>
        ) : null}
      </div>
    </section>
  );
}