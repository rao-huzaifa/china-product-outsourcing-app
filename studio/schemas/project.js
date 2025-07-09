export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() },
    { name: 'category', title: 'Category', type: 'reference', to: [{ type: 'projectCategory' }], validation: Rule => Rule.required() },
    // Sidebar details as flexible name/value pairs
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
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform Name', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' }
          ]
        }
      ]
    },
    { name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true }, validation: Rule => Rule.required() },
    { name: 'descriptionTitle', title: 'Description Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] },
    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: Rule => Rule.min(2).max(10)
    }
  ]
} 