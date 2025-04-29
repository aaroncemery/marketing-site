import {Star} from 'lucide-react'
import {defineField, defineType} from 'sanity'

import {buttonsField, richTextField} from '../common'

export const hero = defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  icon: Star,
  fields: [
    defineField({
      name: 'badge',
      type: 'string',
      title: 'Badge',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    richTextField,
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    }),
    buttonsField,
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({title}) => ({
      title,
      subtitle: 'Hero Block',
    }),
  },
})
