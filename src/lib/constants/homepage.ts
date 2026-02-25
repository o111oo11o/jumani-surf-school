import {
  ShieldCheck,
  MapPin,
  GraduationCap,
  Car,
  Sun,
  Coffee,
} from "lucide-react";
import type {
  HeroContent,
  ServiceCard,
  Feature,
  Testimonial,
  CTAButton,
} from "@/types";

export const hero: HeroContent = {
  image: "/images/hero-surf1.jpg",
  imageAlt:
    "Surf action shot at Dewata Beach, Galle, Sri Lanka at golden hour",
  eyebrow: "Dewata Beach, Galle, Sri Lanka",
  heading: "Learn to Surf. Relax Your Soul.",
  subheading:
    "ISA-certified surf lessons, board rentals, and a smoothie bar on one of Sri Lanka's most beautiful beaches.",
  ctas: [
    { label: "Book a Lesson", href: "/contact", variant: "primary" },
    {
      label: "Explore Our Services",
      href: "#services",
      variant: "secondary",
    },
  ],
};

export const services: ServiceCard[] = [
  {
    image: "/images/gallery5.jpg",
    imageAlt: "Surf instructor teaching a student on Dewata Beach",
    heading: "Surf Lessons",
    description:
      "From your first wave to advanced maneuvers. ISA-certified instruction for beginners, intermediates, and advanced surfers — private or group.",
    ctaLabel: "View Lessons",
    ctaHref: "/surf-lessons",
  },
  {
    image: "/images/gallery10.jpg",
    imageAlt: "Surfboards lined up on the beach ready for rental",
    heading: "Board Rentals",
    description:
      "Quality surfboards for every level. Pick the right board and hit the waves at your own pace.",
    ctaLabel: "See Boards",
    ctaHref: "/board-rentals",
  },
  {
    image: "/images/bar.jpg",
    imageAlt:
      "Jumani Smoothie Bar with fresh tropical drinks on Dewata Beach",
    heading: "Smoothie Bar",
    description:
      "Fresh tropical juices, coffee, and Sri Lankan bites. Fuel up before your session or unwind after.",
    ctaLabel: "View Menu",
    ctaHref: "/smoothie-bar",
  },
];

export const servicesHeading = "Everything You Need for the Perfect Surf Day";

export const story = {
  image: "/images/hero-surf.jpg",
  imageAlt: "Mani and Fasil, the team behind Jumani Surf School",
  eyebrow: "Our Story",
  heading: "More Than a Surf School",
  body: "Jumani Surf School is a small, personal surf school and smoothie bar on Dewata Beach — a beautiful bay where palm trees and blue water meet local fishing boats and a community rebuilt with love after the 2004 tsunami. We're away from the crowds, with stunning sunsets facing Jungle Beach and the Closenburg viewpoint. Mani (ISA/ILS certified) and Fasil welcome you like family.",
  cta: { label: "Meet the Team", href: "/about" } as CTAButton,
};

export const featuresHeading = "Why Jumani?";

export const features: Feature[] = [
  {
    icon: ShieldCheck,
    heading: "ISA Certified",
    description:
      "Internationally certified surf instructor and lifeguard for your safety.",
  },
  {
    icon: MapPin,
    heading: "Private Beach Spot",
    description:
      "Our own quiet stretch of beach, away from the crowded surf zone.",
  },
  {
    icon: GraduationCap,
    heading: "All Levels Welcome",
    description:
      "Complete beginners to advanced surfers — everyone has a place here.",
  },
  {
    icon: Car,
    heading: "Transfer Service",
    description:
      "Free pickup and drop-off from your accommodation in the Galle area.",
  },
  {
    icon: Sun,
    heading: "Stunning Sunsets",
    description:
      "Watch the sunset over Jungle Beach from our bar after your session.",
  },
  {
    icon: Coffee,
    heading: "Surf & Chill",
    description:
      "Lessons, boards, smoothies, and food — everything in one place.",
  },
];

export const testimonialsHeading = "What Our Surfers Say";

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mani is an amazing teacher! I stood up on my first lesson and couldn't stop smiling. The smoothie bar afterwards was the perfect way to end the day.",
    name: "Sarah K.",
    origin: "Germany",
  },
  {
    quote:
      "Best surf school in the Galle area. Private spot, no crowds, and the sunset is unreal. We came back every day of our trip.",
    name: "Tom & Lisa",
    origin: "Australia",
  },
  {
    quote:
      "The whole vibe is so welcoming. Mani made us feel like family. Can't recommend enough!",
    name: "Marco R.",
    origin: "Italy",
  },
];

export const galleryHeading = "Life at Jumani";

export const galleryImages = [
  { src: "/images/gallery1.jpg", alt: "Surfing at Dewata Beach" },
  { src: "/images/gallery3.jpg", alt: "Surf lesson in the water" },
  { src: "/images/gallery6.jpg", alt: "Golden hour on Dewata Beach" },
  { src: "/images/gallery8.jpg", alt: "Relaxing at Jumani Smoothie Bar" },
  { src: "/images/gallery12.jpg", alt: "Catching waves at sunset" },
  { src: "/images/gallery15.jpg", alt: "Beach life at Jumani" },
  { src: "/images/gallery18.jpg", alt: "Surf and sunset views" },
  { src: "/images/gallery20.jpg", alt: "Community vibes at Dewata Beach" },
];

export const locationHeading = "Find Us";
export const locationDescription =
  "We're on Dewata Beach, just a 5-minute tuk-tuk ride from Galle Fort and Unawatuna.";

export const ctaBanner = {
  heading: "Ready to Catch Your First Wave?",
  subheading:
    "Book a lesson, grab a board, or just come by for a smoothie. We're here every day.",
  ctas: [
    { label: "Book Now", href: "/contact", variant: "primary" as const },
    {
      label: "WhatsApp Us",
      href: "https://wa.me/94772460681",
      variant: "whatsapp" as const,
    },
  ],
};
