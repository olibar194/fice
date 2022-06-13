import { MdLocalPlay as icon } from 'react-icons/md'

export default {
  name: 'screening',
  title: 'Evento',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
      description: 'E.g.: Our first ever screening of Gattaca',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL',
      type: 'slug',
      options: {
        source: 'title.es',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'movie',
      title: 'Movie',
      type: 'reference',
      to: [{ type: 'movie' }],
      description: 'Which movie or/and activity are we screening',
      // hidden: ({ document }) => document?.activity,
    },
    {
      name: 'activity',
      title: 'Actividad',
      type: 'reference',
      to: [{ type: 'activity' }],
      description: 'Which movie or/and activity are we screening',
      // hidden: ({ document }) => document?.movie,
    },
    // {
    //   name: 'published',
    //   title: 'Published',
    //   type: 'boolean',
    //   description:
    //     'Set to published when this screening should be visible on a front-end',
    // },

    // {
    //   name: 'allowedGuests',
    //   title: 'Who can come?',
    //   type: 'string',
    //   options: {
    //     list: [
    //       { title: 'Members', value: 'members' },
    //       { title: 'Members and friends', value: 'friends' },
    //       { title: 'Anyone', value: 'anyone' },
    //     ],
    //     layout: 'radio',
    //   },
    // },
    {
      name: 'castMembers',
      title: 'Coordinan',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'person' } }],
    },
    {
      name: 'crewMembers',
      title: 'Participan',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'person' } }],
    },
    {
      name: 'producers',
      title: 'Producers',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'producer' } }],
    },
    {
      name: 'links',
      title: 'Links externos',
      type: 'array',
      of: [{ type: 'url' }],
    },
    { name: 'itinerary', title: 'Itinerario', type: 'itinerary' },
    {
      name: 'ticket',
      title: 'Ticket',
      type: 'file',
      description: 'PDF for printing a physical ticket/archivo del evento',
    },
  ],
  preview: {
    select: {
      title: 'title.es',
      media: 'poster',
    },

    // prepare(selection) {
    //   const year = selection.date && selection.date.split('-')[0]
    //   const cast = [
    //     selection.director,
    //     selection.castName0,
    //     selection.castName1,
    //   ]
    //     .filter(Boolean)
    //     .join(', ')

    //   return {
    //     title: `${selection.title} ${year ? `(${year})` : ''}`,
    //     date: selection.date,
    //     subtitle: cast,
    //     media: selection.media,
    //   }
    // },
  },
}
