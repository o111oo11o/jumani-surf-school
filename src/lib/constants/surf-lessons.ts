import type {
  HeroContent,
  StepItem,
  PricingCard,
  FAQItem,
} from "@/types";

export const hero: HeroContent = {
  image: "/images/gallery5.jpg",
  imageAlt: "Surf lesson in action with instructor and student in the water",
  eyebrow: "Surf Lessons",
  heading: "Ride Your First Wave Today",
  subheading:
    "ISA-certified instruction for every level. Private or group sessions on Dewata Beach.",
  ctas: [{ label: "Book a Lesson", href: "/contact", variant: "primary" }],
};

export const stepsHeading = "How a Surf Lesson Works";

export const steps: StepItem[] = [
  {
    number: "01",
    heading: "Beach Theory",
    description:
      "We start on the sand — board handling, paddling technique, popup mechanics, and ocean safety.",
  },
  {
    number: "02",
    heading: "Into the Water",
    description:
      "Your instructor stays by your side as you practice catching waves and standing up.",
  },
  {
    number: "03",
    heading: "Surf & Improve",
    description:
      "Extended sessions and multi-day packages let you progress from white water to green waves.",
  },
];

export const pricingHeading = "Choose Your Lesson";

export const pricingCards: PricingCard[] = [
  {
    tag: "Most Popular",
    heading: "Beginner Lesson",
    subtitle: "Private or Group",
    description:
      "Perfect for first-timers. Learn the fundamentals — paddling, standing up, and riding white water waves. Theory on the beach followed by hands-on instruction in the water.",
    includes: [
      "Beach theory & exercises",
      "1 hour in-water instruction",
      "Surfboard & rash guard provided",
      "Instructor by your side the entire time",
      "Transfer service (pickup & drop-off)",
    ],
    price: "from $35",
    ctaLabel: "Book Beginner Lesson",
    ctaHref: "/contact",
  },
  {
    heading: "Intermediate & Advanced",
    subtitle: "Private or Group",
    description:
      "Already standing up? Time to level up. Learn to read waves, catch green (unbroken) waves, perform cutbacks, duck dives, and more.",
    includes: [
      "Wave reading & positioning",
      "1 hour in-water coaching",
      "Surfboard provided",
      "Video analysis (if available)",
      "Transfer service (pickup & drop-off)",
    ],
    price: "from $40",
    ctaLabel: "Book Advanced Lesson",
    ctaHref: "/contact",
  },
  {
    tag: "Best Value",
    heading: "Surf Package",
    subtitle: "3 or 5 Days",
    description:
      "Go from zero to confident surfer. Multi-day packages give you consistent practice and faster progression. Customizable to your goals.",
    includes: [
      "Everything in beginner/intermediate lessons",
      "Multiple sessions over 3 or 5 days",
      "Progressive skill building",
      "Personalized feedback",
      "Transfer service included daily",
    ],
    price: "from $90",
    ctaLabel: "Book Surf Package",
    ctaHref: "/contact",
  },
];

export const instructor = {
  image: "/images/hero-surf.jpg",
  imageAlt: "Mani, ISA-certified surf instructor at Jumani Surf School",
  heading: "Learn from the Best",
  body: "Your instructor Mani is ISA/ILS certified (International Surfing Association) — the global standard for surf instruction and water safety. With years of experience and a genuine love for teaching, he'll have you riding waves with a smile.",
  badge: "ISA Certified Instructor",
  cta: { label: "Meet the Team", href: "/about" },
};

export const faqHeading = "Frequently Asked Questions";

export const faqs: FAQItem[] = [
  {
    question: "Do I need any experience?",
    answer:
      "Not at all! Our beginner lessons are designed for complete first-timers. We'll teach you everything from scratch on the beach before you even touch the water.",
  },
  {
    question: "What should I bring?",
    answer:
      "Just bring swimwear, sunscreen, and a towel. We provide the surfboard, rash guard, and all equipment you need.",
  },
  {
    question: "How long is a lesson?",
    answer:
      "A regular lesson includes beach theory plus 1 hour of in-water instruction. Extended lessons and multi-day packages are also available.",
  },
  {
    question: "Is it safe?",
    answer:
      "Absolutely. Mani is ISA/ILS certified as both a surf instructor and lifeguard. Safety is our top priority. We only surf when conditions are appropriate for your level.",
  },
  {
    question: "Can I book a private lesson?",
    answer:
      "Yes! All our lessons are available as private or group sessions. Private lessons offer one-on-one attention for faster progression.",
  },
  {
    question: "Do you offer a transfer service?",
    answer:
      "Yes, we provide free pickup and drop-off from your hotel or guesthouse in the Galle/Unawatuna area.",
  },
  {
    question: "What's the best time of year to surf?",
    answer:
      "Sri Lanka's south coast has two main seasons. November–April offers the most consistent waves at Dewata Beach. We're open year-round and will always find the best conditions for your level.",
  },
  {
    question: "What age can start surfing?",
    answer:
      "We welcome surfers of all ages! Kids, teens, adults — everyone is welcome. For young children we adjust the lesson to be safe and fun.",
  },
];

export const ctaBanner = {
  heading: "Your Wave Is Waiting",
  subheading: "Book a lesson and let's get you in the water.",
  ctas: [
    { label: "Book a Lesson", href: "/contact", variant: "primary" as const },
    {
      label: "WhatsApp Us",
      href: "https://wa.me/94772460681",
      variant: "whatsapp" as const,
    },
  ],
};
