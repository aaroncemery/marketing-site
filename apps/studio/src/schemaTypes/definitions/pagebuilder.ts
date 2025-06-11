import {defineArrayMember, defineType} from 'sanity'

import {pageBuilderBlocks, headerBlockNames, contentBlockNames} from '../blocks'

export const pageBuilderBlockTypes = pageBuilderBlocks.map(({name}) => ({
  type: name,
}))

export const pageBuilder = defineType({
  name: 'pageBuilder',
  type: 'array',
  of: pageBuilderBlockTypes.map((block) => defineArrayMember(block)),
  options: {
    insertMenu: {
      groups: [
        {
          name: 'header',
          title: 'Header',
          of: headerBlockNames,
        },
        {
          name: 'content',
          title: 'Content',
          of: contentBlockNames,
        },
      ],
      views: [
        {
          name: 'grid',
        },
        {
          name: 'list',
        },
      ],
    },
  },
})
