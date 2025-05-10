import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Products",
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
    defineField({
      name: "price",
      type: "number",
      title: "Price",
      validation: (Rule) => Rule.min(0).precision(2),
    }),
    defineField({
      name: "shop",
      type: "string",
      title: "Shop",
      options: {
        list: [
          { title: "Women's", value: "womens" },
          { title: "Men's", value: "mens" },
          { title: "Kids'", value: "kids" },
          { title: "Shoes", value: "shoes" },
          { title: "Equipment", value: "equipment" },
          { title: "By Activity", value: "by-activity" },
          { title: "Gift Cards", value: "gift-cards" },
          { title: "Sale", value: "sale" },
        ],
      },
    }),
    defineField({
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: [
          { title: "Jackets", value: "jackets" },
          { title: "Fleece", value: "fleece" },
          { title: "Sweatshirts & Hoodies", value: "sweatshirts-hoodies" },
          { title: "Sweaters", value: "sweaters" },
          { title: "Shirts", value: "shirts" },
          { title: "T-Shirts", value: "t-shirts" },
          { title: "Pants & Jeans", value: "pants-jeans" },
        ],
      },
    }),
    defineField({
      name: "variants",
      type: "array",
      title: "Variants",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "color",
              type: "string",
              title: "Color",
              options: {
                list: [
                  { title: "Red", value: "red" },
                  { title: "Blue", value: "blue" },
                  { title: "Black", value: "black" },
                  { title: "White", value: "white" },
                  // More color
                ],
              },
            }),
            defineField({
              name: "size",
              type: "string",
              title: "Size",
              options: {
                list: [
                  { title: "S", value: "S" },
                  { title: "M", value: "M" },
                  { title: "L", value: "L" },
                  { title: "XL", value: "XL" },
                  { title: "XXL", value: "XXL" },
                  // More size
                ],
              },
            }),
            defineField({
              name: "stockQuantity",
              type: "number",
              title: "Stock Quantity",
              validation: (Rule) => Rule.min(0).integer(),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
    },
  },
});
