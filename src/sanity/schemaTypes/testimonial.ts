import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Customer Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Testimonial Quote",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
    }),
    defineField({
      name: "service",
      title: "Service Used",
      type: "string",
      options: {
        list: ["surf-lessons", "board-rentals", "smoothie-bar", "all"],
      },
    }),
    defineField({
      name: "image",
      title: "Customer Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "quote",
      media: "image",
    },
  },
});
