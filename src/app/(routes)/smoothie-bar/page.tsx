import type { Metadata } from "next";
import Image from "next/image";
import { HeroSection } from "@/components/sections/hero-section";
import { Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { CTABanner } from "@/components/sections/cta-banner";
import { MenuCategorySection } from "@/components/shared/menu-category";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/lib/utils/metadata";
import { siteMeta } from "@/lib/constants/metadata";
import {
  hero as fallbackHero,
  barStory,
  menuHeading,
  menuCategories as fallbackMenuCategories,
  galleryImages as fallbackGallery,
  ctaBanner,
} from "@/lib/constants/smoothie-bar";
import {
  getSmoothieProducts,
  getSiteSettings,
  getGalleryImages,
} from "@/lib/sanity/queries";
import { mergeHeroImage, resolveGallery } from "@/lib/sanity/helpers";
import type { MenuCategory } from "@/types";

export const metadata: Metadata = createMetadata(siteMeta.smoothieBar);

const categoryLabels: Record<string, string> = {
  smoothie: "Fresh Juices & Smoothies",
  juice: "Fresh Juices & Smoothies",
  "hot-drinks": "Coffee & Tea",
  food: "Food & Snacks",
  snacks: "Food & Snacks",
};

const categoryOrder = [
  "Fresh Juices & Smoothies",
  "Coffee & Tea",
  "Food & Snacks",
];

export default async function SmoothieBarPage() {
  const [cmsProducts, cmsGallery, cmsSettings] = await Promise.all([
    getSmoothieProducts(),
    getGalleryImages("smoothie-bar"),
    getSiteSettings(),
  ]);

  const hero = mergeHeroImage(
    fallbackHero,
    cmsSettings?.pageHeroes?.smoothieBar,
  );

  let menuCategories: MenuCategory[];
  if (cmsProducts.length > 0) {
    const grouped = new Map<string, { name: string; description: string }[]>();
    for (const product of cmsProducts) {
      const label = categoryLabels[product.category] ?? product.category;
      if (!grouped.has(label)) grouped.set(label, []);
      grouped.get(label)!.push({
        name: product.name,
        description: product.description,
      });
    }
    menuCategories = categoryOrder
      .filter((label) => grouped.has(label))
      .map((label) => ({ heading: label, items: grouped.get(label)! }));
  } else {
    menuCategories = fallbackMenuCategories;
  }

  const galleryImages = resolveGallery(cmsGallery, fallbackGallery);

  return (
    <>
      <HeroSection content={hero} />

      {/* Bar Story */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-[300px] lg:h-[400px] rounded-md overflow-hidden">
            <Image
              src={barStory.image}
              alt={barStory.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div>
            <SectionEyebrow className="mb-3">The Bar</SectionEyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-4">
              {barStory.heading}
            </h2>
            <p className="text-text-muted leading-relaxed">{barStory.body}</p>
          </div>
        </div>
      </Section>

      {/* Menu */}
      <Section bg="sand" id="menu">
        <div className="text-center mb-12">
          <SectionEyebrow className="justify-center mb-3">Menu</SectionEyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark">
            {menuHeading}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuCategories.map((category) => (
            <Card key={category.heading} className="p-6" hover={false}>
              <MenuCategorySection category={category} />
            </Card>
          ))}
        </div>
      </Section>

      <GalleryGrid heading="The Vibes" images={galleryImages} />

      <CTABanner
        heading={ctaBanner.heading}
        subheading={ctaBanner.subheading}
        ctas={ctaBanner.ctas}
      />
    </>
  );
}
