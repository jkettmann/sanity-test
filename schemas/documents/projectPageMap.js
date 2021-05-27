export default {
  title: 'Project Page Map',
  name: 'projectPageMap',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required().max(30),
    }
  ]
};