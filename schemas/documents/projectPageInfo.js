export default {
  title: 'Project Page Info',
  name: 'projectPageInfo',
  type: 'document',
  fields: [
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        { type: 'image' }
      ]
    }
  ]
};