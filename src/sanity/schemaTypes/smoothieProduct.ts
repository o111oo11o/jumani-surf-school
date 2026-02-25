import { defineField, defineType } from "sanity";

export const smoothieProduct = defineType({
  name: "smoothieProduct",
  title: "Smoothie Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["smoothie", "juice", "hot-drinks", "food", "snacks"],
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "price",
      title: "Price (USD)",
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
      name: "isVegan",
      title: "Vegan",
      type: "boolean",
    }),
    defineField({
      name: "isPopular",
      title: "Popular",
      type: "boolean",
    }),
    defineField({
      name: "available",
      title: "Available",
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
      title: "name",
      subtitle: "category",
      media: "image",
    },
  },
});
