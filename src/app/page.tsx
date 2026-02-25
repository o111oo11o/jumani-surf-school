import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/sections/hero-section";
import { Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Button } from "@/components/ui/button";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { LocationMap } from "@/components/sections/location-map";
import { CTABanner } from "@/components/sections/cta-banner";
import { ServiceCard } from "@/components/shared/service-card";
import {
  hero,
  services,
  servicesHeading,
  story,
  featuresHeading,
  features,
  testimonialsHeading,
  testimonials,
  galleryHeading,
  galleryImages,
  locationHeading,
  locationDescription,
  ctaBanner,
} from "@/lib/constants/homepage";

export default function HomePage() {
  return (
    <>
      <HeroSection content={hero} />

      {/* Services */}
      <Section bg="sand" id="services">
        <div className="text-center mb-12">
          <SectionEyebrow className="justify-center mb-3">
            Our Services
          </SectionEyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark">
            {servicesHeading}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.heading} service={service} />
          ))}
        </div>
      </Section>

      {/* Story */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-[300px] lg:h-[450px] rounded-md overflow-hidden">
            <Image
              src={story.image}
              alt={story.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div>
            <SectionEyebrow className="mb-3">{story.eyebrow}</SectionEyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
              {story.heading}
            </h2>
            <p className="text-text-muted leading-relaxed mb-6">
              {story.body}
            </p>
            <Button href={story.cta.href} variant="secondary">
              {story.cta.label}
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Section>

      <FeatureGrid heading={featuresHeading} features={features} />

      <Testimonials heading={testimonialsHeading} items={testimonials} />

      <GalleryGrid heading={galleryHeading} images={galleryImages} />

      <LocationMap
        heading={locationHeading}
        description={locationDescription}
      />

      <CTABanner
        heading={ctaBanner.heading}
        subheading={ctaBanner.subheading}
        ctas={ctaBanner.ctas}
      />
    </>
  );
}
