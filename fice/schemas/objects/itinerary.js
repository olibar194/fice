// import { MdLocalPlay as icon } from 'react-icons/md'

export default {
  name: 'itinerary',
  title: 'Itinerario',
  type: 'object',
  initialValue: {
    virtual: false,
    presencial: false,
  },
  fields: [
    {
      name: 'virtual',
      title: 'Virtual',
      type: 'boolean',
    },
    {
      name: 'presencial',
      title: 'Presencial',
      type: 'boolean',
    },
    {
      name: 'infoVirtual',
      title: 'Info Virtual',
      type: 'document',
      fields: [
        { name: 'info', title: 'Info', type: 'localeBlock' },
        {
          name: 'links',
          title: 'Links externos',
          type: 'array',
          of: [{ type: 'url' }],
        },
      ],
      hidden: ({ parent, value }) => !value && !parent?.virtual,
    },
    {
      name: 'infoPresencial',
      title: 'Info Presencial',
      type: 'document',
      fields: [{ name: 'lugar', title: 'lugar', type: 'geopoint' }],
      hidden: ({ parent, value }) => !value && !parent?.virtual,
    },
  ],
  preview: {},
}
