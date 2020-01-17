export default {
  type: 'object',
  name: 'boardPageEsp',
  title: 'Board Page Spanish',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label'
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare ({heading}) {
      return {
        title: `${heading}`,
        subtitle: 'Página Junta - Board Page Esp'
      }
    }
  }
}
