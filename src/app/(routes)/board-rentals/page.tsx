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
  hero as fallbackHero,
  stepsHeading,
  steps,
  boardsHeading,
  boards as fallbackBoards,
  rentalInfoHeading,
  rentalInfo,
  ctaBanner,
} from "@/lib/constants/board-rentals";
import { getRentalItems, getSiteSettings } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import { mergeHeroImage } from "@/lib/sanity/helpers";
import type { BoardType } from "@/types";

export const metadata: Metadata = createMetadata(siteMeta.boardRentals);

export default async function BoardRentalsPage() {
  const [cmsRentals, cmsSettings] = await Promise.all([
    getRentalItems(),
    getSiteSettings(),
  ]);

  const hero = mergeHeroImage(
    fallbackHero,
    cmsSettings?.pageHeroes?.boardRentals,
  );

  const boards: BoardType[] =
    cmsRentals.length > 0
      ? cmsRentals.map((item) => ({
          image: item.image
            ? urlFor(item.image).width(600).height(400).fit("crop").url()
            : "/images/gallery11.jpg",
          imageAlt: item.image?.alt ?? item.name,
          name: item.name,
          bestFor: item.category === "surfboard" ? "Surfers" : item.category,
          description: item.description,
          price: `from $${item.pricePerHour}/hr`,
          ctaLabel: "Rent This Board",
          ctaHref: "/contact",
        }))
      : fallbackBoards;

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
