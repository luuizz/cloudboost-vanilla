import { defineField, defineType } from "sanity";

export const featureType = defineType({
    name: 'feature',
    title: 'Feature',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nome da coleção',
            type: 'string'
        }),
    {
        name: 'dataRecursos',
        title: 'Data Recursos',
        type: 'array',
        of: [
            {
            type: 'object',
            fields: [
                {
                name: 'icon',
                title: 'Icon',
                type: 'image',
                options: {
                    hotspot: true,
                },
                },
                {
                name: 'altIcon',
                title: 'Alt Text for Icon',
                type: 'string',
                },
                {
                name: 'title',
                title: 'Title',
                type: 'string',
                },
                {
                name: 'text',
                title: 'Text',
                type: 'text',
                },
            ],
            preview: {
                select: {
                title: 'title',
                subtitle: 'text',
                media: 'icon',
                },
            },
            },
        ],
        },
    ]
})