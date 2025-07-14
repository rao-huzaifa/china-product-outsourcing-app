export default {
  name: 'brandLogo',
  title: 'Brand Logo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Brand Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Logo Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'website',
      title: 'Brand Website',
      type: 'url',
      description: 'Optional: Link to the brand website',
    },
  ],
} 