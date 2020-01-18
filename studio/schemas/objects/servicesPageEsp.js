export default {
    type: 'object',
    name: 'servicesPageEsp',
    title: 'Services Page in Spanish',
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
          subtitle: 'Services Page in Spanish'
        }
      }
    }
  }
  