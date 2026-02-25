import type { PageMeta } from "@/types";

export const siteMeta: Record<string, PageMeta> = {
  home: {
    title:
      "Jumani Surf School — Surf Lessons, Board Rentals & Smoothie Bar · Dewata Beach, Galle, Sri Lanka",
    description:
      "ISA-certified surf lessons for all levels, surfboard rentals, and a beachside smoothie bar on Dewata Beach, Galle. Private & group lessons, free transfer service. Book now!",
  },
  surfLessons: {
    title:
      "Surf Lessons — Beginner to Advanced · Jumani Surf School, Galle",
    description:
      "ISA-certified surf instruction on Dewata Beach. Beginner, intermediate, and advanced lessons — private or group. Includes beach theory, in-water coaching, equipment, and free transfer.",
  },
  boardRentals: {
    title:
      "Surfboard Rentals — Dewata Beach, Galle · Jumani Surf School",
    description:
      "Rent quality surfboards on Dewata Beach. Longboards, funboards, and shortboards for all levels. Hourly and daily rates available.",
  },
  smoothieBar: {
    title:
      "Jumani Smoothie Bar — Fresh Juices, Coffee & Food · Dewata Beach",
    description:
      "Fresh mango, papaya, passion fruit juices, real coffee, and Sri Lankan roti right on the beach. The perfect pre- and post-surf hangout in Galle.",
  },
  about: {
    title:
      "About Us — Meet the Team · Jumani Surf School, Galle",
    description:
      "Meet Mani (ISA-certified instructor) and Fasil at Jumani Surf School on Dewata Beach, Galle. Our story, team, certifications, and location info.",
  },
  contact: {
    title:
      "Contact & Book — Jumani Surf School, Dewata Beach, Galle",
    description:
      "Book a surf lesson, reserve a board, or reach out via WhatsApp. Free transfer service from Galle Fort and Unawatuna.",
  },
};

export const jsonLdBase = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Jumani Surf School & Smoothie Bar",
  url: "https://www.jumanisurfschool.com",
  image: "https://www.jumanisurfschool.com/images/hero-surf.jpg",
  telephone: "+94772460681",
  email: "jumanisurfschool@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "560 Matara Road",
    addressLocality: "Katugoda, Galle",
    addressRegion: "Southern Province",
    postalCode: "80000",
    addressCountry: "LK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.031734,
    longitude: 80.240029,
  },
  sameAs: ["https://www.instagram.com/jumani_surf_school"],
};
