import type { Metadata } from "next";
import Image from "next/image";
import { HeroSection } from "@/components/sections/hero-section";
import { Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { LocationMap } from "@/components/sections/location-map";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { CTABanner } from "@/components/sections/cta-banner";
import { TeamMemberCard } from "@/components/shared/team-member-card";
import { createMetadata } from "@/lib/utils/metadata";
import { siteMeta } from "@/lib/constants/metadata";
import {
  hero,
  storyHeading,
  storyParagraphs,
  teamHeading,
  team,
  certificationsHeading,
  certificationsBody,
  certificateImages,
  locationHeading,
  locationBody,
  landmarks,
  galleryHeading,
  galleryImages,
  ctaBanner,
} from "@/lib/constants/about";

export const metadata: Metadata = createMetadata(siteMeta.about);

export default function AboutPage() {
  return (
    <>
      <HeroSection content={hero} />

      {/* Story */}
      <Section bg="white">
        <SectionEyebrow className="mb-3">Our Story</SectionEyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-8">
          {storyHeading}
        </h2>
        <div className="max-w-3xl space-y-5">
          {storyParagraphs.map((paragraph, i) => (
            <p key={i} className="text-text-muted leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section bg="sand">
        <div className="text-center mb-12">
          <SectionEyebrow className="justify-center mb-3">
            The Team
          </SectionEyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark">
            {teamHeading}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {team.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionEyebrow className="mb-3">Safety</SectionEyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
              {certificationsHeading}
            </h2>
            <p className="text-text-muted leading-relaxed mb-6">
              {certificationsBody}
            </p>
            <a
              href="https://www.isasurf.org/development-programs/coaching-instructing/certified-instructors-directory/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-teal-deep hover:underline"
            >
              View ISA Certified Instructors Directory
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {certificateImages.map((cert) => (
              <div
                key={cert.src}
                className="relative aspect-[3/4] rounded-sm overflow-hidden"
              >
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 33vw, 200px"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Location */}
      <Section bg="sand">
        <SectionEyebrow className="mb-3">Location</SectionEyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
          {locationHeading}
        </h2>
        <p className="text-text-muted leading-relaxed mb-6 max-w-3xl">
          {locationBody}
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 max-w-xl">
          {landmarks.map((landmark) => (
            <li
              key={landmark}
              className="flex items-center gap-2 text-sm text-text"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-deep shrink-0" />
              {landmark}
            </li>
          ))}
        </ul>
      </Section>

      <LocationMap heading="Find Us" />

      <GalleryGrid heading={galleryHeading} images={galleryImages} />

      <CTABanner
        heading={ctaBanner.heading}
        subheading={ctaBanner.subheading}
        ctas={ctaBanner.ctas}
      />
    </>
  );
}
