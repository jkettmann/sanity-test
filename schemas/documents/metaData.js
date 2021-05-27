export default {
  title: 'Meta Data',
  name: 'metaData',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.max(60),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: Rule => Rule.max(250),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    }
  ]
};