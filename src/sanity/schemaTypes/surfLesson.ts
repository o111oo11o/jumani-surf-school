import { defineField, defineType } from "sanity";

export const surfLesson = defineType({
  name: "surfLesson",
  title: "Surf Lesson",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "lessonType",
      title: "Lesson Type",
      type: "string",
      options: {
        list: ["beginner", "intermediate", "advanced"],
        layout: "radio",
      },
    }),
    defineField({
      name: "format",
      title: "Format",
      type: "string",
      options: {
        list: ["private", "group"],
        layout: "radio",
      },
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
    }),
    defineField({
      name: "fullDescription",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "duration",
      title: "Duration (hours)",
      type: "number",
    }),
    defineField({
      name: "price",
      title: "Price (USD)",
      type: "number",
    }),
    defineField({
      name: "maxParticipants",
      title: "Maximum Participants",
      type: "number",
    }),
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
        }),
      ],
    }),
    defineField({
      name: "highlights",
      title: "Lesson Highlights",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
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
      title: "title",
      subtitle: "lessonType",
      media: "image",
    },
  },
});
