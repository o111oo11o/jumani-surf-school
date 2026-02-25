import type { SchemaTypeDefinition } from "sanity";
import { surfLesson } from "./surfLesson";
import { rentalItem } from "./rentalItem";
import { smoothieProduct } from "./smoothieProduct";
import { teamMember } from "./teamMember";
import { testimonial } from "./testimonial";
import { faq } from "./faq";
import { siteSettings } from "./siteSettings";
import { galleryImage } from "./galleryImage";

export const schemaTypes: SchemaTypeDefinition[] = [
  surfLesson,
  rentalItem,
  smoothieProduct,
  teamMember,
  testimonial,
  faq,
  siteSettings,
  galleryImage,
];
