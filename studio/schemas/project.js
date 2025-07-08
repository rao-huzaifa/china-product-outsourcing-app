export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'category', title: 'Category', type: 'reference', to: [{ type: 'projectCategory' }] },
    { name: 'summary', title: 'Summary', type: 'text' },
    { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] },
    { name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } },
    { name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image' }] },
    { name: 'date', title: 'Date', type: 'date' },
    {
      name: 'sidebarDetails',
      title: 'Sidebar Project Details',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Detail Name', type: 'string' },
            { name: 'value', title: 'Detail Value', type: 'string' }
          ]
        }
      ]
    }
  ]
} 