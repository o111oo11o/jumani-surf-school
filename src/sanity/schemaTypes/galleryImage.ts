import { defineField, defineType } from "sanity";

export const galleryImage = defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
    defineField({
      name: "section",
      title: "Section",
      type: "string",
      description: "Which page/section this image belongs to",
      options: {
        list: [
          { title: "Homepage", value: "homepage" },
          { title: "About", value: "about" },
          { title: "Smoothie Bar", value: "smoothie-bar" },
          { title: "General / All", value: "general" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Pin to the top of the gallery",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "image.alt",
      subtitle: "section",
      media: "image",
    },
  },
});
