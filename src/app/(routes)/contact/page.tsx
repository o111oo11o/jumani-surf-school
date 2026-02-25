import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { LocationMap } from "@/components/sections/location-map";
import { ContactMethodCard } from "@/components/shared/contact-method-card";
import { BookingForm } from "@/components/shared/booking-form";
import { createMetadata } from "@/lib/utils/metadata";
import { siteMeta } from "@/lib/constants/metadata";
import {
  hero,
  contactMethods,
  formHeading,
  locationHeading,
  locationAddress,
  locationDirections,
  locationTransferNote,
} from "@/lib/constants/contact";

export const metadata: Metadata = createMetadata(siteMeta.contact);

export default function ContactPage() {
  return (
    <>
      <HeroSection content={hero} />

      {/* Contact Methods */}
      <Section bg="sand">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method) => (
            <ContactMethodCard key={method.heading} method={method} />
          ))}
        </div>
      </Section>

      {/* Booking Form */}
      <Section bg="white">
        <div className="max-w-2xl mx-auto">
          <SectionEyebrow className="mb-3">Book</SectionEyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-8">
            {formHeading}
          </h2>
          <BookingForm />
        </div>
      </Section>

      {/* Location */}
      <Section bg="sand">
        <SectionEyebrow className="mb-3">Location</SectionEyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
          {locationHeading}
        </h2>
        <p className="text-text-muted mb-2">{locationAddress}</p>
        <p className="text-text-muted mb-2">{locationDirections}</p>
        <p className="text-sm text-teal-deep font-semibold mb-8">
          {locationTransferNote}
        </p>
      </Section>

      <LocationMap heading="Find Us on the Map" />
    </>
  );
}
