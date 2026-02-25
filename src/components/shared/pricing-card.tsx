import { Check } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { PricingCard as PricingCardType } from "@/types";

type PricingCardProps = {
  card: PricingCardType;
  featured?: boolean;
};

export function PricingCard({ card, featured }: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative p-6 md:p-8 flex flex-col",
        featured && "border-teal-deep border-2"
      )}
    >
      {card.tag && (
        <span className="absolute -top-3 left-6 bg-lime-bright text-dark text-xs font-bold px-3 py-1 rounded-pill">
          {card.tag}
        </span>
      )}
      <h3 className="font-display text-2xl font-bold text-dark mb-1">
        {card.heading}
      </h3>
      <p className="text-sm text-text-muted mb-3">{card.subtitle}</p>
      <p className="text-text leading-relaxed mb-5">{card.description}</p>
      <ul className="space-y-2 mb-6 flex-1">
        {card.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-text">
            <Check
              size={16}
              className="mt-0.5 shrink-0 text-teal-deep"
            />
            {item}
          </li>
        ))}
      </ul>
      <div className="font-display text-2xl font-bold text-dark mb-4">
        {card.price}
      </div>
      <Button href={card.ctaHref} variant="primary" className="w-full">
        {card.ctaLabel}
      </Button>
    </Card>
  );
}
