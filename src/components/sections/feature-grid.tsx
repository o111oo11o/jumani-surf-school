import { Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import type { Feature } from "@/types";

type FeatureGridProps = {
  eyebrow?: string;
  heading: string;
  features: Feature[];
};

export function FeatureGrid({ eyebrow, heading, features }: FeatureGridProps) {
  return (
    <Section bg="white">
      <div className="text-center mb-12">
        {eyebrow && (
          <SectionEyebrow className="justify-center mb-3">
            {eyebrow}
          </SectionEyebrow>
        )}
        <h2 className="font-display text-3xl md:text-4xl font-bold text-dark">
          {heading}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.heading} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal-deep/10 text-teal-deep mb-4">
                <Icon size={24} />
              </div>
              <h3 className="font-display text-lg font-bold text-dark mb-2">
                {feature.heading}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
