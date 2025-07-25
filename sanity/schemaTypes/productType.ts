import { TrolleyIcon } from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "product Image",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "intro",
      title: "Product Introduction",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Product Description",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Product Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "discount",
      title: "Discount Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "array",
      of: [{type: "reference", to: [{type: "category"}]}],
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
        name: "status",
        title: "Status",
        type: "string",
        options: {
            list: [
                {title: "New", value: "new"}, 
                {title: "Hot", value: "hot"},
                {title: "Sale", value: "sale"},
            ],
        },
    }),
    defineField({
        name: "variants",
        title: "Product Variants",
        type: "string",
        options: {
            list: [
                {title: "Size", value: "size"},
                {title: "Color", value: "color"},
            ],
        },
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "price",
    },
    prepare(selection) {
      const {title, media, subtitle} = selection;
      const image = media && media[0]
      return {
        title: title,
        subtitle: `$${subtitle}`,
        media,
      };
    },
  },
});