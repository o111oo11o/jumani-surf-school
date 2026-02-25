import type { HeroContent, TeamMember } from "@/types";

export const hero: HeroContent = {
  image: "/images/gallery18.jpg",
  imageAlt:
    "Wide shot of Dewata Beach at golden hour with palm trees and turquoise water",
  eyebrow: "About Us",
  heading: "Our Story",
  subheading:
    "A small surf school with a big heart, on one of Galle's most beautiful beaches.",
};

export const storyHeading = "How It All Started";

export const storyParagraphs = [
  "Jumani Surf School was born in December 2019 from Mani's lifelong love of the ocean. After years of surfing and teaching across Sri Lanka's south coast, he opened his own school on Dewata Beach — a beautiful bay where palm trees and turquoise water meet local fishing boats and a tight-knit community.",
  "Dewata Beach sits between Galle Fort and Unawatuna, just a five-minute tuk-tuk ride from both. While the main section of the beach has become popular, Jumani is tucked away at the quieter western end — five minutes' walk from the other schools. This gives our lessons a private, uncrowded feel with plenty of space in the water.",
  "What makes this spot truly special is the sunset. Facing the full sweep of the bay — from famous Jungle Beach to the iconic Closenburg Hotel viewpoint — our bar has one of the best sunset seats on the south coast. Grab a juice, watch the sky turn gold, and feel why we built this place.",
];

export const teamHeading = "Meet the Team";

export const team: TeamMember[] = [
  {
    image: "/images/hero-surf.jpg",
    imageAlt: "Mani, founder and head surf instructor at Jumani Surf School",
    name: "Mani (M. Rismy)",
    role: "Founder & Head Surf Instructor",
    certifications: "ISA/ILS Certified Surf Instructor & Lifeguard",
    bio: "Mani is the heart of Jumani Surf School. An ISA and ILS certified surf instructor and lifeguard, he has years of experience teaching surfers of all levels. Opening his own school in 2019 was a lifelong dream. Known for his infectious smile and genuine passion for the ocean, Mani's goal is simple — get you standing on a wave and grinning from ear to ear.",
  },
  {
    image: "/images/hero-surf.jpg",
    imageAlt: "Fasil, smoothie bar manager and chef at Jumani",
    name: "Fasil",
    role: "Smoothie Bar Manager & Chef",
    bio: "Fasil is the soul of the Jumani Smoothie Bar. He was there from day one helping build the school and bar from the ground up. His roti, wraps, and pancakes are legendary among regulars. When he's not cooking, he's probably in the water. Come by, say hello, and let him make you something delicious.",
  },
];

export const certificationsHeading = "Internationally Certified";
export const certificationsBody =
  "Mani holds ISA (International Surfing Association) and ILS (International Life Saving) certifications — the global gold standard for surf instruction and water safety. Your safety is our priority.";
export const certificateImages = [
  {
    src: "/images/certificate_rismy.jpg",
    alt: "Mani's certification document",
  },
  {
    src: "/images/certificate_rismy1.jpg",
    alt: "Additional certification for Mani",
  },
  {
    src: "/images/isa_certificate_rismy.jpg",
    alt: "ISA certification for Mani",
  },
];

export const locationHeading = "Where We Are";
export const locationBody =
  "We're on Dewata Beach, on the road between Galle Fort and Unawatuna (Matara Road). The area was devastated by the 2004 tsunami and has been lovingly rebuilt by the local community. Today it's a vibrant stretch of coast that blends paradise with real Sri Lankan life — exactly the way we like it.";
export const landmarks = [
  "5-minute tuk-tuk ride from Galle Fort",
  "5-minute tuk-tuk ride from Unawatuna",
  "Walking distance to Jungle Beach",
  "Facing Closenburg Hotel & Viewpoint across the bay",
];

export const galleryHeading = "Life at Jumani";
export const galleryImages = [
  { src: "/images/gallery1.jpg", alt: "Surfing at Dewata Beach" },
  { src: "/images/gallery2.jpg", alt: "Beach life" },
  { src: "/images/gallery3.jpg", alt: "Surf lesson in the water" },
  { src: "/images/gallery4.jpg", alt: "Golden hour surf session" },
  { src: "/images/gallery5.jpg", alt: "Learning to surf" },
  { src: "/images/gallery6.jpg", alt: "Sunset at Dewata Beach" },
  { src: "/images/gallery7.jpg", alt: "Smoothie bar drinks" },
  { src: "/images/gallery8.jpg", alt: "Relaxing at the bar" },
  { src: "/images/gallery9.jpg", alt: "Surf community" },
  { src: "/images/gallery15.jpg", alt: "Beach vibes" },
  { src: "/images/gallery16.jpg", alt: "Catching waves" },
  { src: "/images/gallery20.jpg", alt: "Jumani community" },
];

export const ctaBanner = {
  heading: "Come Surf With Us",
  subheading:
    "Whether it's your first wave or your thousandth — we're here for it.",
  ctas: [
    { label: "Book a Lesson", href: "/contact", variant: "primary" as const },
    {
      label: "Rent a Board",
      href: "/board-rentals",
      variant: "secondary" as const,
    },
  ],
};
