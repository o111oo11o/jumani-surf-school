import { MessageCircle, Mail, Instagram } from "lucide-react";
import type { HeroContent, ContactMethod } from "@/types";

export const hero: HeroContent = {
  image: "/images/gallery18.jpg",
  imageAlt: "Dewata Beach, Galle, Sri Lanka",
  eyebrow: "Get In Touch",
  heading: "Let's Get You in the Water",
  subheading:
    "Book a lesson, reserve a board, or just ask us anything. We usually reply within a few hours.",
  compact: true,
};

export const contactMethods: ContactMethod[] = [
  {
    icon: MessageCircle,
    heading: "WhatsApp",
    detail: "+94 77 246 0681",
    description: "Fastest way to reach us. Tap to chat.",
    ctaLabel: "Open WhatsApp",
    ctaHref: "https://wa.me/94772460681",
  },
  {
    icon: Mail,
    heading: "Email",
    detail: "jumanisurfschool@gmail.com",
    description: "For bookings, questions, or group inquiries.",
    ctaLabel: "Send Email",
    ctaHref: "mailto:jumanisurfschool@gmail.com",
  },
  {
    icon: Instagram,
    heading: "Instagram",
    detail: "@jumani_surf_school",
    description:
      "Follow us for daily surf updates and behind-the-scenes.",
    ctaLabel: "Follow Us",
    ctaHref: "https://www.instagram.com/jumani_surf_school",
  },
];

export const formHeading = "Send a Booking Request";

export const serviceOptions = [
  "Surf Lesson — Beginner",
  "Surf Lesson — Intermediate/Advanced",
  "Multi-Day Surf Package",
  "Board Rental",
  "General Inquiry",
];

export const successMessage =
  "Thanks! We'll get back to you within a few hours.";

export const locationHeading = "Find Us on Dewata Beach";
export const locationAddress =
  "560 Matara Road, Katugoda, Galle 80000, Sri Lanka";
export const locationDirections =
  "Between Galle Fort and Unawatuna, on the Matara Road. Look for the colorful smoothie bar on the beach side.";
export const locationTransferNote =
  "We offer a free transfer service — let us know where you're staying and we'll pick you up!";
