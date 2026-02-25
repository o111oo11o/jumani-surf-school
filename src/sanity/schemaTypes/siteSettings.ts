import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
    defineField({
      name: "contact",
      title: "Contact Information",
      type: "object",
      fields: [
        defineField({
          name: "email",
          title: "Email",
          type: "email",
        }),
        defineField({
          name: "phone",
          title: "Phone",
          type: "string",
        }),
        defineField({
          name: "whatsapp",
          title: "WhatsApp",
          type: "string",
        }),
        defineField({
          name: "address",
          title: "Address",
          type: "text",
        }),
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "object",
      fields: [
        defineField({
          name: "instagram",
          title: "Instagram",
          type: "url",
        }),
        defineField({
          name: "facebook",
          title: "Facebook",
          type: "url",
        }),
      ],
    }),
    defineField({
      name: "pageHeroes",
      title: "Page Hero Images",
      description: "Override hero images for each page. Upload an image here to replace the default.",
      type: "object",
      fields: [
        defineField({
          name: "homepage",
          title: "Homepage Hero",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
        }),
        defineField({
          name: "surfLessons",
          title: "Surf Lessons Hero",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
        }),
        defineField({
          name: "boardRentals",
          title: "Board Rentals Hero",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
        }),
        defineField({
          name: "smoothieBar",
          title: "Smoothie Bar Hero",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
        }),
        defineField({
          name: "about",
          title: "About Hero",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
        }),
        defineField({
          name: "contact",
          title: "Contact Hero",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "siteName",
      subtitle: "tagline",
    },
  },
});
