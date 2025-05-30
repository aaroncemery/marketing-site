import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/schemaTypes'
import {iconPicker} from 'sanity-plugin-icon-picker'

import {structure} from './src/structure'

export default defineConfig({
  name: 'default',
  title: 'Marketing Site',

  projectId: 'cu0muw3p',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool(), iconPicker()],

  schema: {
    types: schemaTypes,
  },
})
