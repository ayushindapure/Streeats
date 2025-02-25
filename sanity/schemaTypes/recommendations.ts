import { defineField, defineType } from "sanity";

export const recommendations = defineType({
  name: "recommendations",
  title: "Recommendations",
  type: "document",
  fields: [
    defineField({
      name: "shop_name",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "views",
      type: "number",
    }),
    defineField({
        name: "address",
        type: "string",
      }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "price",
      type: "number",
    }),
    defineField({
      name: "category",
      type: "string",
      validation: (Rule) =>
        Rule.min(1).max(20).required().error("Please enter a category"),
    }),
    defineField({
      name: "image",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pitch",
      type: "string",
    }),
  ],
});