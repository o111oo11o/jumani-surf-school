import { Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import type { StepItem } from "@/types";

type StepProcessProps = {
  eyebrow?: string;
  heading: string;
  steps: StepItem[];
};

export function StepProcess({ eyebrow, heading, steps }: StepProcessProps) {
  return (
    <Section bg="white">
      {eyebrow && <SectionEyebrow className="mb-3">{eyebrow}</SectionEyebrow>}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-10">
        {heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="text-center md:text-left">
            <div className="font-display text-5xl font-bold text-lime-bright mb-3">
              {step.number}
            </div>
            <h3 className="font-display text-xl font-bold text-dark mb-2">
              {step.heading}
            </h3>
            <p className="text-text-muted leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
