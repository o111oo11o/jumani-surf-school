import { jsonLdBase } from "@/lib/constants/metadata";

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBase) }}
    />
  );
}
