import type { HeroContent, MenuCategory } from "@/types";

export const hero: HeroContent = {
  image: "/images/bar.jpg",
  imageAlt:
    "Jumani Smoothie Bar setup with tropical drinks on Dewata Beach",
  eyebrow: "Jumani Smoothie Bar",
  heading: "Fuel Up. Cool Down. Chill Out.",
  subheading:
    "Fresh tropical juices, real coffee, and Sri Lankan bites — right on the beach.",
  ctas: [
    { label: "See the Menu", href: "#menu", variant: "primary" },
  ],
};

export const barStory = {
  image: "/images/bar1.jpg",
  imageAlt: "Interior of Jumani Smoothie Bar with chalkboard menu",
  heading: "The Best Part of Your Surf Day",
  body: "Before and after your surf session, kick back at our beachside smoothie bar. Freshly squeezed tropical juices, proper coffee, homemade roti and snacks — all made with love by Fasil. Grab a stool, watch the waves, and let the good vibes flow.",
};

export const menuHeading = "Our Menu";

export const menuCategories: MenuCategory[] = [
  {
    heading: "Fresh Juices & Smoothies",
    items: [
      {
        name: "Mango Juice",
        description:
          "Freshly squeezed Sri Lankan mango — sweet and tropical.",
      },
      {
        name: "Banana Smoothie",
        description: "Blended banana with a creamy finish.",
      },
      {
        name: "Papaya Juice",
        description: "Light, refreshing, and packed with vitamins.",
      },
      {
        name: "Passion Fruit Juice",
        description: "Tangy and tropical — a local favorite.",
      },
      {
        name: "Pineapple Juice",
        description: "Sweet and refreshing golden pineapple.",
      },
      {
        name: "Mixed Fruit Smoothie",
        description: "A blend of the day's best tropical fruits.",
      },
    ],
  },
  {
    heading: "Coffee & Tea",
    items: [
      {
        name: "Cappuccino",
        description: "Rich espresso with steamed milk foam.",
      },
      {
        name: "Cafe Latte",
        description: "Smooth espresso with plenty of steamed milk.",
      },
      {
        name: "Latte Macchiato",
        description: "Layered milk and espresso — strong and creamy.",
      },
      {
        name: "Iced Coffee",
        description: "Cold-brewed and refreshing for hot beach days.",
      },
      {
        name: "Ceylon Tea",
        description: "Sri Lanka's finest — served hot or iced.",
      },
    ],
  },
  {
    heading: "Food & Snacks",
    items: [
      {
        name: "Roti",
        description:
          "A traditional Sri Lankan flatbread — Fasil's specialty. Savory or sweet fillings available.",
      },
      {
        name: "Wraps",
        description: "Fresh wraps with local ingredients.",
      },
      {
        name: "Pancakes",
        description:
          "Fluffy pancakes — perfect for a post-surf breakfast.",
      },
      {
        name: "Fruit Plate",
        description: "A platter of seasonal tropical fruits.",
      },
      {
        name: "Cake",
        description: "Homemade cake of the day.",
      },
      {
        name: "Ice Cream",
        description: "Cool down with a scoop after your session.",
      },
    ],
  },
];

export const galleryImages = [
  { src: "/images/bar.jpg", alt: "Jumani Smoothie Bar wide shot" },
  { src: "/images/bar1.jpg", alt: "Smoothie Bar interior" },
  { src: "/images/bar_menu.jpg", alt: "Chalkboard menu at the bar" },
  { src: "/images/gallery7.jpg", alt: "Fresh tropical drinks" },
];

export const ctaBanner = {
  heading: "Thirsty Yet?",
  subheading:
    "Come by for a fresh juice or coffee. We're right on Dewata Beach — no booking needed.",
  ctas: [
    {
      label: "Get Directions",
      href: "https://www.google.com/maps?q=6.031734,80.240029",
      variant: "primary" as const,
    },
    {
      label: "View on Instagram",
      href: "https://www.instagram.com/jumani_surf_school",
      variant: "secondary" as const,
    },
  ],
};
