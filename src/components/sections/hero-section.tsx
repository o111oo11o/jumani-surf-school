import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Button } from "@/components/ui/button";
import type { HeroContent } from "@/types";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  const { image, imageAlt, eyebrow, heading, subheading, ctas, compact } =
    content;

  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden",
        compact ? "min-h-[50vh]" : "min-h-[85vh] md:min-h-[90vh]"
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-24">
        {eyebrow && (
          <SectionEyebrow className="text-teal-mid mb-3 [&_span]:bg-teal-mid">
            {eyebrow}
          </SectionEyebrow>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-2xl">
          {heading}
        </h1>
        <p className="text-base md:text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
          {subheading}
        </p>
        {ctas && ctas.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-3">
            {ctas.map((cta) => (
              <Button
                key={cta.label}
                href={cta.href}
                variant={cta.variant}
              >
                {cta.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
