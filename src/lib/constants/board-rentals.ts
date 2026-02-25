import type { HeroContent, StepItem, BoardType } from "@/types";

export const hero: HeroContent = {
  image: "/images/gallery10.jpg",
  imageAlt: "Surfboards lined up on Dewata Beach ready for rental",
  eyebrow: "Board Rentals",
  heading: "Grab a Board and Go",
  subheading:
    "Quality surfboards for every level. No lesson needed — just rent, surf, and return.",
  ctas: [
    { label: "Check Availability", href: "/contact", variant: "primary" },
  ],
};

export const stepsHeading = "Renting Is Easy";

export const steps: StepItem[] = [
  {
    number: "01",
    heading: "Choose Your Board",
    description:
      "Tell us your level and we'll help you pick the perfect board.",
  },
  {
    number: "02",
    heading: "Hit the Waves",
    description:
      "Head out to the break at your own pace. Our spot is uncrowded and perfect for free surfing.",
  },
  {
    number: "03",
    heading: "Return & Relax",
    description:
      "Drop the board back and grab a fresh juice or smoothie at our bar.",
  },
];

export const boardsHeading = "Our Boards";

export const boards: BoardType[] = [
  {
    image: "/images/gallery11.jpg",
    imageAlt: "Foam longboard for beginner surfers",
    name: "Foam Longboard",
    bestFor: "Beginners",
    description:
      "Stable and forgiving. The perfect board to learn on — lots of float and easy to catch waves.",
    price: "from $5/hr",
    ctaLabel: "Rent This Board",
    ctaHref: "/contact",
  },
  {
    image: "/images/gallery12.jpg",
    imageAlt: "Fiberglass longboard for intermediate surfers",
    name: "Fiberglass Longboard",
    bestFor: "Intermediate",
    description:
      "Classic longboard feel. Great for cruising and nose riding once you've got the basics down.",
    price: "from $7/hr",
    ctaLabel: "Rent This Board",
    ctaHref: "/contact",
  },
  {
    image: "/images/gallery13.jpg",
    imageAlt: "Funboard for progressing surfers",
    name: "Funboard / Mini Mal",
    bestFor: "Intermediate",
    description:
      "The sweet spot between stability and maneuverability. Ideal for progressing surfers.",
    price: "from $7/hr",
    ctaLabel: "Rent This Board",
    ctaHref: "/contact",
  },
  {
    image: "/images/gallery14.jpg",
    imageAlt: "Shortboard for experienced surfers",
    name: "Shortboard",
    bestFor: "Advanced",
    description:
      "For experienced surfers looking to carve. Responsive and fast in quality waves.",
    price: "from $8/hr",
    ctaLabel: "Rent This Board",
    ctaHref: "/contact",
  },
];

export const rentalInfoHeading = "Good to Know";

export const rentalInfo = [
  {
    heading: "Equipment included",
    description: "Board + leash. Rash guards available on request.",
  },
  {
    heading: "Rental periods",
    description: "Hourly, half-day, or full-day rates available.",
  },
  {
    heading: "Deposit",
    description: "A small refundable deposit may be required.",
  },
  {
    heading: "Condition",
    description:
      "All boards are regularly maintained and in great condition.",
  },
  {
    heading: "Recommendation",
    description:
      "Not sure which board? We're happy to help you choose based on your experience.",
  },
];

export const ctaBanner = {
  heading: "Skip the Lesson, Grab a Board",
  subheading:
    "Already know how to surf? Rent a quality board and enjoy uncrowded waves at Dewata Beach.",
  ctas: [
    {
      label: "Reserve a Board",
      href: "/contact",
      variant: "primary" as const,
    },
  ],
};
