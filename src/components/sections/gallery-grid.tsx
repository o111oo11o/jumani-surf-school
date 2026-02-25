import Image from "next/image";
import { Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryGridProps = {
  eyebrow?: string;
  heading: string;
  images: GalleryImage[];
};

export function GalleryGrid({ eyebrow, heading, images }: GalleryGridProps) {
  return (
    <Section bg="sand">
      <div className="text-center mb-10">
        {eyebrow && (
          <SectionEyebrow className="justify-center mb-3">
            {eyebrow}
          </SectionEyebrow>
        )}
        <h2 className="font-display text-3xl md:text-4xl font-bold text-dark">
          {heading}
        </h2>
      </div>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
        {images.map((img, i) => (
          <div
            key={img.src}
            className="break-inside-avoid rounded-md overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={i % 3 === 0 ? 450 : i % 3 === 1 ? 350 : 400}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
