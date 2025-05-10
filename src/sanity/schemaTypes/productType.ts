import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
    },
  },
});
