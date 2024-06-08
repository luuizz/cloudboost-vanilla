import { defineField, defineType } from "sanity";
import { seoFields, heroFields, marketingFields, ctaFields } from "./groupFields";
import { settings } from "./settings";

export const home = defineType({
    name: 'home',
    title: 'Home',
    type: 'document',
    groups: [
        {
            name: 'seo',
            title: 'SEO',
        },
        {
            name: 'hero',
            title: 'Hero',
        },
        {
            name: 'marketing',
            title: 'Marketing',
        },
        {
            name: 'cta',
            title: 'CTA',
        }
    ],
    fields: [
        ...seoFields,
        ...heroFields,
        ...marketingFields,
        ...ctaFields,
    ],
    preview: {
        select: {
          title: 'title',
        },
      },
})