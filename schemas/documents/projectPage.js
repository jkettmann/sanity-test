export default {
  title: 'Project Page',
  name: 'projectPage',
  type: 'document',
  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        slugify: async (input) => {
          // do something async
          await Promise.resolve(input)
        }
      }
    },
    {
      title: 'Theme',
      name: 'theme',
      type: 'reference',
      to: [{ type: 'projectPageTheme' }]
    },
    {
      title: 'Meta Data',
      name: 'metaData',
      type: 'reference',
      to: [{ type: 'metaData' }]
    },
    {
      title: 'Sections',
      name: 'sections',
      type: 'array',
      of: [
        { type: 'projectPageHero' },
        { type: 'projectPageInfo' },
        { type: 'projectPageMap' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'slug.current',
      media: 'metaData.image'
    }
  }
}