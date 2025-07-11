import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import project from './schemas/project'
import projectCategory from './schemas/projectCategory'

export default defineConfig({
  name: 'default',
  title: 'China Products Outsourcing  App',

  projectId: 'hjoc1p23',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [project, projectCategory],
  },
})
