
export default {
  title: 'Project Page Theme',
  name: 'projectPageTheme',
  type: 'document',
  fields: [
    {
      title: 'Font 1',
      name: 'font1',
      type: 'file',
    },
    {
      title: 'Color 1',
      name: 'color1',
      type: 'string',
      validation: Rule => Rule.custom((input) => input.match(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/) !== null || 'Should be a hex color (e.g. #000 or #a4225d')
    },
  ]
};