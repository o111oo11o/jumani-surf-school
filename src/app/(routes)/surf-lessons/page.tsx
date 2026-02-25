import type { Metadata } from "next";
import Image from "next/image";
import { HeroSection } from "@/components/sections/hero-section";
import { StepProcess } from "@/components/sections/step-process";
import { Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTABanner } from "@/components/sections/cta-banner";
import { PricingCard } from "@/components/shared/pricing-card";
import { createMetadata } from "@/lib/utils/metadata";
import { siteMeta } from "@/lib/constants/metadata";
import {
  hero,
  stepsHeading,
  steps,
  pricingHeading,
  pricingCards,
  instructor,
  faqHeading,
  faqs,
  ctaBanner,
} from "@/lib/constants/surf-lessons";

export const metadata: Metadata = createMetadata(siteMeta.surfLessons);

export default function SurfLessonsPage() {
  return (
    <>
      <HeroSection content={hero} />

      <StepProcess heading={stepsHeading} steps={steps} />

      {/* Pricing */}
      <Section bg="sand">
        <div className="text-center mb-12">
          <SectionEyebrow className="justify-center mb-3">
            Pricing
          </SectionEyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark">
            {pricingHeading}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingCards.map((card) => (
            <PricingCard
              key={card.heading}
              card={card}
              featured={card.tag === "Most Popular"}
            />
          ))}
        </div>
      </Section>

      {/* Instructor */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-[300px] lg:h-[400px] rounded-md overflow-hidden">
            <Image
              src={instructor.image}
              alt={instructor.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div>
            <SectionEyebrow className="mb-3">Your Instructor</SectionEyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
              {instructor.heading}
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              {instructor.body}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-teal-deep bg-teal-deep/10 px-3 py-1.5 rounded-pill mb-6">
              {instructor.badge}
            </span>
            <div>
              <Button href={instructor.cta.href} variant="secondary">
                {instructor.cta.label}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <FAQAccordion heading={faqHeading} items={faqs} />

      <CTABanner
        heading={ctaBanner.heading}
        subheading={ctaBanner.subheading}
        ctas={ctaBanner.ctas}
      />
    </>
  );
}
