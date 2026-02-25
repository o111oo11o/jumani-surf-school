import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { ContactMethod } from "@/types";

type ContactMethodCardProps = {
  method: ContactMethod;
};

export function ContactMethodCard({ method }: ContactMethodCardProps) {
  const Icon = method.icon;

  return (
    <Card className="p-6 text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-deep/10 text-teal-deep mb-4">
        <Icon size={24} />
      </div>
      <h3 className="font-display text-lg font-bold text-dark mb-1">
        {method.heading}
      </h3>
      <p className="text-sm font-semibold text-teal-deep mb-1">
        {method.detail}
      </p>
      <p className="text-sm text-text-muted mb-4">{method.description}</p>
      <Button
        href={method.ctaHref}
        variant={method.heading === "WhatsApp" ? "whatsapp" : "secondary"}
        className="text-sm"
      >
        {method.ctaLabel}
      </Button>
    </Card>
  );
}
