import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import type { CTAButton } from "@/types";

type CTABannerProps = {
  heading: string;
  subheading: string;
  ctas: CTAButton[];
};

export function CTABanner({ heading, subheading, ctas }: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark via-dark-soft to-[#0d3b35] py-16 md:py-24">
      {/* Decorative gradient orb */}
      <div className="absolute -top-1/2 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-teal-deep/10 blur-3xl pointer-events-none" />

      <Container>
        <div className="text-center max-w-2xl mx-auto relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {heading}
          </h2>
          <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed">
            {subheading}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            {ctas.map((cta) => (
              <Button key={cta.label} href={cta.href} variant={cta.variant}>
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
      </Container>

      {/* Bottom gradient strip */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-deep via-green-fresh via-lime-bright to-yellow-glow" />
    </section>
  );
}
