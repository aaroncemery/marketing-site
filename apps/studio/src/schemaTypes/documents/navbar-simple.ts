import {defineType, defineField, defineArrayMember} from 'sanity'

export const navbarSimple = defineType({
  name: 'navbar-simple',
  title: 'Site Navigation - Simple',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Navigation Title',
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Links',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'navItem',
          title: 'Navigation Item',
          fields: [
            defineField({
              name: 'label',
              type: 'string',
              title: 'Label',
            }),
            defineField({
              name: 'link',
              type: 'array',
              validation: (rule) => rule.max(1).required(),
              of: [
                {
                  name: 'internalLink',
                  type: 'object',
                  title: 'Internal Link',
                  fields: [
                    {
                      name: 'internalReference',
                      type: 'reference',
                      to: [{type: 'page'}, {type: 'product'}, {type: 'blog'}],
                    },
                  ],
                  preview: {
                    select: {
                      title: 'internalReference.title',
                      internalUrl: 'internalReference.slug.current',
                    },
                    prepare({title, internalUrl}) {
                      return {
                        title: title || 'Untitled Link',
                        subtitle: internalUrl || 'No page selected',
                      }
                    },
                  },
                },
                {
                  name: 'externalLink',
                  type: 'object',
                  title: 'External Link',
                  fields: [{name: 'url', type: 'url'}],
                },
              ],
            }),
            defineField({
              name: 'openInNewTab',
              type: 'boolean',
              initialValue: false,
            }),
          ],
        }),
      ],
    }),
  ],
})
