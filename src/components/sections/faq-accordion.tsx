"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Section } from "@/components/layout/section";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import type { FAQItem } from "@/types";

type FAQAccordionProps = {
  eyebrow?: string;
  heading: string;
  items: FAQItem[];
};

function FAQItemComponent({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-5 text-left min-h-[48px] gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-display text-base font-bold text-dark">
          {item.question}
        </span>
        <ChevronDown
          size={20}
          className={cn(
            "shrink-0 text-teal-deep transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200",
          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-text-muted leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQAccordion({ eyebrow, heading, items }: FAQAccordionProps) {
  return (
    <Section bg="sand">
      <div className="max-w-3xl mx-auto">
        {eyebrow && (
          <SectionEyebrow className="mb-3">{eyebrow}</SectionEyebrow>
        )}
        <h2 className="font-display text-3xl md:text-4xl font-bold text-dark mb-8">
          {heading}
        </h2>
        <div>
          {items.map((item) => (
            <FAQItemComponent key={item.question} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
}
