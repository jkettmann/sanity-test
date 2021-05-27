
export default {
  title: 'Project Page Hero',
  name: 'projectPageHero',
  type: 'document',
  validation: Rule => Rule.custom((fields = {}) => {
    if (fields.subtitle2 && !fields.subtitle) {
      return 'Subtitle has to be set as well';
    }
    return true;
  }),
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.max(30),
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    },
    {
      title: 'Subtitle 2',
      name: 'subtitle2',
      type: 'string',
    },
  ]
};