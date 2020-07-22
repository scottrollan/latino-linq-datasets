export default {
  name: 'event',
  type: 'document',
  title: 'Events',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'titleEsp',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'start',
      title: 'Start Date,',
      type: 'datetime',
      options: {
        dateFormat: 'MM-DD-YYYY',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
    },
    {
      name: 'end',
      title: 'End Date',
      type: 'datetime',
      options: {
        dateFormat: 'MM-DD-YYYY',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
    },
    {
      name: 'allDay',
      type: 'boolean',
      title: 'All Day Event?',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Event Info (English)',
    },
    {
      name: 'descriptionEsp',
      type: 'string',
      title: 'Información del Evento (español)',
    },
    {
      name: 'link',
      type: 'url',
      title: 'URL to Event (if any)',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
