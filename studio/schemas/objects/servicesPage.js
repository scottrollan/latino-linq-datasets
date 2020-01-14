export default {
  type: 'object',
  name: 'servicesPage',
  title: 'Services Page',
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
        subtitle: 'Services Page'
      }
    }
  }
}
