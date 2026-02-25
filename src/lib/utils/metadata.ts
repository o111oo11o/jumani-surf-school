import type { Metadata } from "next";
import type { PageMeta } from "@/types";

export function createMetadata(page: PageMeta): Metadata {
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
      siteName: "Jumani Surf School",
    },
  };
}
