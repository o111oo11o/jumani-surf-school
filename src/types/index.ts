import type { LucideIcon } from "lucide-react";

export type CTAButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "whatsapp";
};

export type HeroContent = {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  heading: string;
  subheading: string;
  ctas?: CTAButton[];
  compact?: boolean;
};

export type ServiceCard = {
  image: string;
  imageAlt: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export type Feature = {
  icon: LucideIcon;
  heading: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  origin: string;
};

export type TeamMember = {
  image: string;
  imageAlt: string;
  name: string;
  role: string;
  certifications?: string;
  bio: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type PricingCard = {
  tag?: string;
  heading: string;
  subtitle: string;
  description: string;
  includes: string[];
  price: string;
  ctaLabel: string;
  ctaHref: string;
};

export type BoardType = {
  image: string;
  imageAlt: string;
  name: string;
  bestFor: string;
  description: string;
  price: string;
  ctaLabel: string;
  ctaHref: string;
};

export type MenuItem = {
  name: string;
  description: string;
};

export type MenuCategory = {
  heading: string;
  items: MenuItem[];
};

export type ContactMethod = {
  icon: LucideIcon;
  heading: string;
  detail: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type StepItem = {
  number: string;
  heading: string;
  description: string;
};

export type PageMeta = {
  title: string;
  description: string;
};
