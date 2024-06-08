export const seoFields = [
    {
        name: 'title',
        title: 'SEO Title',
        type: 'string',
        group: 'seo',
    },
    {
        name: 'metaDescription',
        title: 'Meta description',
        type: 'text',
        group: 'seo',
    },
    {
        name: 'seoImage',
        title: 'OG Image',
        type: 'image',
        group: 'seo',
    }
];

export const heroFields = [
    {
        name: 'titleHero',
        type: 'string',
        title: 'Titulo Hero',
        group: 'hero',
    },
    {
        name: 'textHero',
        type: 'text',
        title: 'Texto da Hero Section',
        group: 'hero',
    },
    {
        name: 'logos',
        title: 'Logos de clientes',
        type: 'array',
        group: 'hero',
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
                        fields: [
                            {
                                name: 'altLogo',
                                title: 'Texto alternativo para o logo',
                                type: 'string',
                            }
                        ]
                    },
                    {
                        name: 'title',
                        title: 'Title da Imagem',
                        type: 'string',
                    }
                ],
                preview: {
                    select: {
                    media: 'icon',
                    title: 'title',
                    },
                },
            },
        ],
    },
    {
        name: 'reviewsNumber',
        type: 'number',
        title: 'Quantidade de Reviews',
        group: 'hero',
    }
]

export const marketingFields = [
    {
        name: 'marketTitle',
        type: 'string',
        title: 'Título da seção de Marketing e recursos',
        group: 'marketing',
    },
    {
        name: 'marketText',
        type: 'text',
        title: 'Texto complementar da seção de Marketing',
        group: 'marketing',
    },
    {
        name: 'topicosRecursos',
        title: 'Tópicos da dos cards de recursos',
        type: 'array',
        group: 'marketing',
        of: [
            {
            type: 'object',
            fields: [
                {
                    name: 'icon',
                    title: 'Ícone do card',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                          name: 'altIcon',
                          title: 'Texto alternativo para o ícone',
                          type: 'string',
                        }
                    ]
                },
                {
                    name: 'title',
                    title: 'Título do card',
                    type: 'string',
                },
                {
                    name: 'text',
                    title: 'Texto complementar do card',
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

export const ctaFields = [
    {
        name: 'titleCTA',
        type: 'string',
        title: 'Título do CTA',
        group: 'cta',
    },
    {
        name: 'textCTA',
        type: 'text',
        title: 'Texto do CTA',
        group: 'cta'
    },
    {
        name: 'labelButton',
        type: 'string',
        title: 'Texto do botão',
        group: 'cta',
    }
]