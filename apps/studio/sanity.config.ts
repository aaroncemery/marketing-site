import {defineConfig, defineField} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/schemaTypes'
import {iconPicker} from 'sanity-plugin-icon-picker'
import {fieldLevelExperiments} from '@sanity/personalization-plugin'

import {structure} from './src/structure'

export default defineConfig({
  name: 'default',
  title: 'Marketing Site',

  projectId: 'cu0muw3p',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    visionTool(),
    iconPicker(),
    fieldLevelExperiments({
      // field types that you want to be able to emperiment on
      fields: ['string'],
      // hardcoded experiments and variants
      experiments: [
        {
          id: 'blog-title',
          label: 'Blog Title',
          variants: [
            {
              id: 'control',
              label: 'Control',
            },
            {
              id: 'variant',
              label: 'Variant',
            },
          ],
        },
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
