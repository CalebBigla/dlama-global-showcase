import { Link } from "@tanstack/react-router";
import { Calendar, Heart, Maximize2, Tag } from "lucide-react";
import { useState } from "react";
import type { Property } from "@/lib/data";
import { PromoPriceDisplay } from "./PromoPriceDisplay";

export function PropertyCard({ property }: { property: Property }) {
  const [saved, setSaved] = useState(false);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden bg-card shadow-[0_20px_50px_-40px_oklch(0.29_0.062_265_/_0.7)] transition-all duration-500 hover:shadow-[0_40px_70px_-40px_oklch(0.29_0.062_265_/_0.55)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
        <span
          className="absolute top-4 left-4 px-3 py-1.5 text-[0.6rem] tracking-[0.2em] text-navy-deep uppercase"
          style={{ backgroundImage: "var(--gradient-gold)" }}
        >
          {property.status}
        </span>
        {property.badge && (
          <span className="absolute top-14 left-4 bg-accent px-3 py-1.5 text-[0.6rem] tracking-[0.2em] text-accent-foreground uppercase">
            {property.badge}
          </span>
        )}
        <button
          type="button"
          aria-label={saved ? "Remove from saved" : "Save property"}
          onClick={() => setSaved((s) => !s)}
          className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-card/85 text-primary backdrop-blur transition-colors hover:text-accent"
        >
          <Heart className="h-4 w-4" fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="min-w-0">
          <p className="text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
            {property.location}
          </p>
          <h3 className="mt-2 truncate text-xl text-primary">{property.name}</h3>
          <PromoPriceDisplay property={property} className="mt-2" size="sm" />
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
          {property.plotSize && (
            <span className="flex items-center gap-1.5">
              <Maximize2 className="h-4 w-4 text-accent" /> {property.plotSize}
            </span>
          )}
          {property.paymentPlan && (
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-accent" /> {property.paymentPlan}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Tag className="h-4 w-4 text-accent" /> {property.type}
          </span>
        </div>
      </div>

      <Link
        to="/properties/$propertyId"
        params={{ propertyId: property.id }}
        className="absolute inset-0"
        aria-label={`View ${property.name}`}
      />
    </article>
  );
}
