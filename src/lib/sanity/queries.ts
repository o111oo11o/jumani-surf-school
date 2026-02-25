import { client } from "./client";

// --- Surf Lessons ---

export type SanitySurfLesson = {
  _id: string;
  title: string;
  lessonType: "beginner" | "intermediate" | "advanced";
  format: "private" | "group";
  description: string;
  duration: number;
  price: number;
  maxParticipants: number;
  image: SanityImage | null;
  highlights: string[];
  requirements: string[];
  featured: boolean;
  order: number;
};

export type SanityImage = {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  alt?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
};

export async function getSurfLessons(): Promise<SanitySurfLesson[]> {
  return client.fetch(
    `*[_type == "surfLesson"] | order(order asc) {
      _id,
      title,
      lessonType,
      format,
      description,
      duration,
      price,
      maxParticipants,
      image { ..., alt },
      highlights,
      requirements,
      featured,
      order
    }`,
  );
}

// --- Rental Items ---

export type SanityRentalItem = {
  _id: string;
  name: string;
  category: "surfboard" | "wetsuit" | "accessories";
  description: string;
  pricePerHour: number;
  pricePerDay: number;
  image: SanityImage | null;
  available: boolean;
  featured: boolean;
  order: number;
};

export async function getRentalItems(): Promise<SanityRentalItem[]> {
  return client.fetch(
    `*[_type == "rentalItem" && available == true] | order(order asc) {
      _id,
      name,
      category,
      description,
      pricePerHour,
      pricePerDay,
      image { ..., alt },
      available,
      featured,
      order
    }`,
  );
}

// --- Smoothie Products ---

export type SanitySmoothieProduct = {
  _id: string;
  name: string;
  category: "smoothie" | "juice" | "hot-drinks" | "food" | "snacks";
  description: string;
  ingredients: string[];
  price: number;
  image: SanityImage | null;
  isVegan: boolean;
  isPopular: boolean;
  available: boolean;
  order: number;
};

export async function getSmoothieProducts(): Promise<
  SanitySmoothieProduct[]
> {
  return client.fetch(
    `*[_type == "smoothieProduct" && available == true] | order(order asc) {
      _id,
      name,
      category,
      description,
      ingredients,
      price,
      image { ..., alt },
      isVegan,
      isPopular,
      available,
      order
    }`,
  );
}

// --- Team Members ---

export type SanityTeamMember = {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image: SanityImage | null;
  certifications: string[];
  order: number;
};

export async function getTeamMembers(): Promise<SanityTeamMember[]> {
  return client.fetch(
    `*[_type == "teamMember"] | order(order asc) {
      _id,
      name,
      role,
      bio,
      image { ..., alt },
      certifications,
      order
    }`,
  );
}

// --- Testimonials ---

export type SanityTestimonial = {
  _id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  service: "surf-lessons" | "board-rentals" | "smoothie-bar" | "all";
  featured: boolean;
  date: string;
};

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  return client.fetch(
    `*[_type == "testimonial" && featured == true] {
      _id,
      name,
      location,
      quote,
      rating,
      service,
      featured,
      date
    }`,
  );
}

// --- FAQs ---

export type SanityFaq = {
  _id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
};

export async function getFaqs(
  category?: string,
): Promise<SanityFaq[]> {
  if (category) {
    return client.fetch(
      `*[_type == "faq" && category == $category] | order(order asc) {
        _id,
        question,
        answer,
        category,
        order
      }`,
      { category },
    );
  }
  return client.fetch(
    `*[_type == "faq"] | order(order asc) {
      _id,
      question,
      answer,
      category,
      order
    }`,
  );
}

// --- Site Settings ---

export type SanityPageHeroImage = {
  asset: { _ref: string; _type: "reference" };
  alt?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
};

export type SanitySiteSettings = {
  _id: string;
  siteName: string;
  tagline: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    address: string;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
  };
  pageHeroes?: {
    homepage?: SanityPageHeroImage;
    surfLessons?: SanityPageHeroImage;
    boardRentals?: SanityPageHeroImage;
    smoothieBar?: SanityPageHeroImage;
    about?: SanityPageHeroImage;
    contact?: SanityPageHeroImage;
  };
};

export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      _id,
      siteName,
      tagline,
      description,
      contact,
      socialLinks,
      pageHeroes {
        homepage { ..., alt },
        surfLessons { ..., alt },
        boardRentals { ..., alt },
        smoothieBar { ..., alt },
        about { ..., alt },
        contact { ..., alt }
      }
    }`,
  );
}

// --- Gallery Images ---

export type SanityGalleryImage = {
  _id: string;
  image: SanityImage;
  caption?: string;
  section: "homepage" | "about" | "smoothie-bar" | "general";
  order?: number;
  featured?: boolean;
};

export async function getGalleryImages(
  section: "homepage" | "about" | "smoothie-bar",
): Promise<SanityGalleryImage[]> {
  return client.fetch(
    `*[_type == "galleryImage" && section == $section] | order(featured desc, order asc) {
      _id,
      image { ..., alt },
      caption,
      section,
      order,
      featured
    }`,
    { section },
  );
}
