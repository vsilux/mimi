import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'fonts',
    title: 'Fonts',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: (Rule) => Rule.required(),
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'fonts',
            title: 'Fonts',
            type: 'array',
            validation: (Rule) => Rule.required(),
            of: [{ type: 'file' }]
        }),
        defineField({
            name: 'fontcss',
            title: 'fonts.css',
            type: 'file',
            validation: (Rule) => Rule.required(),
        }),
    ],
})
