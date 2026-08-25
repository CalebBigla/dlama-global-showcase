import type { Property } from "@/lib/data";

interface PromoPriceDisplayProps {
  property: Property;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function PromoPriceDisplay({ property, className = "", size = "md" }: PromoPriceDisplayProps) {
  const hasPromo = property.originalPrice && property.originalPrice > property.price;
  
  const sizeClasses = {
    sm: {
      original: "text-xs",
      current: "text-lg font-semibold",
    },
    md: {
      original: "text-sm",
      current: "text-2xl font-semibold",
    },
    lg: {
      original: "text-base",
      current: "text-3xl font-semibold",
    },
  };

  const formatAmount = (amount: number) => {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)}M`;
    }
    return amount.toLocaleString();
  };

  if (!hasPromo) {
    return (
      <div className={className}>
        <p className={`${sizeClasses[size].current} text-foreground`}>
          {property.currency}{formatAmount(property.price)}
        </p>
        {property.status === "For Rent" && (
          <span className="text-sm text-muted-foreground"> / month</span>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <p className={`${sizeClasses[size].original} text-red-600 line-through decoration-2`}>
        {property.currency}{formatAmount(property.originalPrice)}
      </p>
      <p className={`${sizeClasses[size].current} text-foreground`}>
        {property.currency}{formatAmount(property.price)}
        {property.status === "For Rent" && (
          <span className="text-sm text-muted-foreground"> / month</span>
        )}
      </p>
      {property.originalPrice && property.price && (
        <p className="text-xs font-medium text-accent">
          Save {property.currency}
          {(property.originalPrice - property.price).toLocaleString()}
        </p>
      )}
    </div>
  );
}
