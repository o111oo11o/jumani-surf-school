import { urlFor } from "./image";
import type { SanityPageHeroImage, SanityGalleryImage } from "./queries";
import type { HeroContent } from "@/types";

/**
 * Merges a CMS hero image override into a fallback HeroContent object.
 * If no CMS image exists the fallback is returned unchanged.
 */
export function mergeHeroImage(
  fallback: HeroContent,
  cmsImage: SanityPageHeroImage | undefined | null,
): HeroContent {
  if (!cmsImage?.asset?._ref) return fallback;
  return {
    ...fallback,
    image: urlFor(cmsImage).width(1920).height(1080).fit("crop").url(),
    imageAlt: cmsImage.alt ?? fallback.imageAlt,
  };
}

/**
 * Converts an array of Sanity gallery images to the { src, alt } format
 * expected by <GalleryGrid>. Falls back to the provided local images if
 * the CMS array is empty.
 */
export function resolveGallery(
  cmsImages: SanityGalleryImage[],
  fallback: { src: string; alt: string }[],
): { src: string; alt: string }[] {
  if (cmsImages.length === 0) return fallback;
  return cmsImages.map((item) => ({
    src: urlFor(item.image).width(1200).height(900).fit("crop").url(),
    alt: item.image.alt ?? item.caption ?? "",
  }));
}
