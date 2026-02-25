import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { StepProcess } from "@/components/sections/step-process";
import { Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { CTABanner } from "@/components/sections/cta-banner";
import { BoardCard } from "@/components/shared/board-card";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/lib/utils/metadata";
import { siteMeta } from "@/lib/constants/metadata";
import {
  hero,
  stepsHeading,
  steps,
  boardsHeading,
  boards,
  rentalInfoHeading,
  rentalInfo,
  ctaBanner,
} from "@/lib/constants/board-rentals";

export const metadata: Metadata = createMetadata(siteMeta.boardRentals);

export default function BoardRentalsPage() {
  return (
    <>
      <HeroSection content={hero} />

      <StepProcess heading={stepsHeading} steps={steps} />

      {/* Boards */}
      <Section bg="sand">
        <div className="text-center mb-12">
          <SectionEyebrow className="justify-center mb-3">
            Equipment
          </SectionEyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark">
            {boardsHeading}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boards.map((board) => (
            <BoardCard key={board.name} board={board} />
          ))}
        </div>
      </Section>

      {/* Rental Info */}
      <Section bg="white">
        <SectionEyebrow className="mb-3">Info</SectionEyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-8">
          {rentalInfoHeading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rentalInfo.map((info) => (
            <Card key={info.heading} className="p-5" hover={false}>
              <h3 className="font-semibold text-dark mb-1">{info.heading}</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {info.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <CTABanner
        heading={ctaBanner.heading}
        subheading={ctaBanner.subheading}
        ctas={ctaBanner.ctas}
      />
    </>
  );
}
