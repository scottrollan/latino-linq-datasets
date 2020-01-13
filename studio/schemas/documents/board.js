export default {
  name: 'board',
  type: 'document',
  title: 'Board Member',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'displayOrder',
      title: 'Order on page',
      type: 'number',
      description: '1 will be the first to be displayed, 2 will be the second, etc.'
    },
    {
      name: 'titleEsp',
      type: 'string',
      title: 'Título en español'
    },
    {
      name: 'titleEng',
      type: 'string',
      title: 'Title in English'
    },
    {
      name: 'bioEsp',
      type: 'text',
      title: 'Bio en español'
    },
    {
      name: 'bioEng',
      type: 'text',
      title: 'Bio in English'
    },
    {
      name: 'memberImage',
      type: 'image',
      title: 'Headshot'
    }
  ],

  preview: {
    select: {
      title: 'name',
      media: 'memberImage'
    }
  }
}
