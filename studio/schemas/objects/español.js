
export default {
    type: 'object',
    name: 'español',
    title: 'Spanish Menu',
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
          subtitle: 'Spanish Menu'
        }
      }
    }
  }
  