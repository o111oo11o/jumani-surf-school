import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { ServiceCard as ServiceCardType } from "@/types";

type ServiceCardProps = {
  service: ServiceCardType;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 md:h-56">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
        />
      </div>
      <div className="p-5 md:p-6">
        <h3 className="font-display text-xl font-bold text-dark mb-2">
          {service.heading}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed mb-4">
          {service.description}
        </p>
        <Link
          href={service.ctaHref}
          className="inline-flex items-center gap-1 text-sm font-bold text-teal-deep hover:gap-2 transition-all"
        >
          {service.ctaLabel}
          <ArrowRight size={16} />
        </Link>
      </div>
    </Card>
  );
}
