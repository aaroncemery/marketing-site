import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Marketing Site',

  projectId: 'cu0muw3p',
  dataset: 'view-test-2',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
