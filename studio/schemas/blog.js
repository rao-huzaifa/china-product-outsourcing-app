export default {
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            },
          ],
        },
      ],
      description: 'Images to show beside the main image in the blog card/layout',
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        { name: 'title', title: 'CTA Title', type: 'string' },
        { name: 'description', title: 'CTA Description', type: 'text' },
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'website', title: 'Website', type: 'url' }
      ]
    },
    {
      name: 'features',
      title: 'Features/Points List',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'logisticsSummary',
      title: 'Logistics Summary',
      type: 'text'
    },
    {
      name: 'authorName',
      title: 'Author Name (if not team member)',
      type: 'string',
      description: 'Use this if the author is not a team member',
    },
    {
      name: 'author',
      title: 'Author (Team Member)',
      type: 'reference',
      to: [{ type: 'team' }],
      description: 'Reference a team member as the author',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blogCategory' }] }],
      validation: Rule => Rule.required().min(1),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'commentsCount',
      title: 'Comments Count',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url', title: 'Facebook' },
        { name: 'twitter', type: 'url', title: 'Twitter' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn' },
        { name: 'instagram', type: 'url', title: 'Instagram' },
      ],
    },
  ],
} 