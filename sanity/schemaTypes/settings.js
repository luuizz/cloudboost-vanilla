import { defineType } from "sanity";
import { seoFields } from "./groupFields";

export const settings = defineType({
    name: 'settings',
    title: 'Configurações',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'SEO Title',
            type: 'string',
        },
        {
            name: 'metaDescription',
            title: 'Meta description',
            type: 'text',
        },
        {
            name: 'seoImage',
            title: 'OG Image',
            type: 'image',
        }
    ]
})