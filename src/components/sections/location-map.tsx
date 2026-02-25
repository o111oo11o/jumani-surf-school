import { MapPin, Phone, Mail } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { business } from "@/lib/constants/business";

type LocationMapProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
};

export function LocationMap({ eyebrow, heading, description }: LocationMapProps) {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.5!2d${business.gps.lng}!3d${business.gps.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDEnNTQuMiJOIDgwwrAxNCcyNC4xIkU!5e0!3m2!1sen!2slk!4v1234567890`;

  return (
    <Section bg="white">
      {eyebrow && <SectionEyebrow className="mb-3">{eyebrow}</SectionEyebrow>}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-8">
        {heading}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-md overflow-hidden h-[300px] lg:h-full min-h-[300px]">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jumani Surf School location on Google Maps"
          />
        </div>

        <div className="flex flex-col justify-center">
          {description && (
            <p className="text-text-muted leading-relaxed mb-6">
              {description}
            </p>
          )}
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin
                size={20}
                className="mt-0.5 shrink-0 text-teal-deep"
              />
              <span className="text-text">{business.address}</span>
            </li>
            <li>
              <a
                href={`tel:${business.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-text hover:text-teal-deep transition-colors"
              >
                <Phone size={20} className="shrink-0 text-teal-deep" />
                {business.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-3 text-text hover:text-teal-deep transition-colors"
              >
                <Mail size={20} className="shrink-0 text-teal-deep" />
                {business.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
