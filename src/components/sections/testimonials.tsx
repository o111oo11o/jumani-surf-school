import { Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/types";

type TestimonialsProps = {
  eyebrow?: string;
  heading: string;
  items: Testimonial[];
};

export function Testimonials({ eyebrow, heading, items }: TestimonialsProps) {
  return (
    <Section bg="sand">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((testimonial) => (
          <Card key={testimonial.name} className="p-6 md:p-8">
            <span
              className="font-handwritten text-5xl text-teal-deep/30 leading-none block mb-2"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote className="text-text leading-relaxed mb-4">
              {testimonial.quote}
            </blockquote>
            <footer className="text-sm text-text-muted">
              <span className="font-semibold text-dark">
                {testimonial.name}
              </span>
              , {testimonial.origin}
            </footer>
          </Card>
        ))}
      </div>
    </Section>
  );
}
