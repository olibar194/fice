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
    },
    {
      name: 'movie',
      title: 'Movie',
      type: 'reference',
      to: [{ type: 'movie' }],
      description: 'Which movie or activity are we screening',
      hidden: ({ document }) => document?.activity,
    },
    {
      name: 'activity',
      title: 'Actividad',
      type: 'reference',
      to: [{ type: 'activity' }],
      description: 'Which movie or activity are we screening',
      hidden: ({ document }) => document?.movie,
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
      description:
        'Set to published when this screening should be visible on a front-end',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
      description: 'Where will the screening take place?',
    },
    {
      name: 'beginAt',
      title: 'Starts at',
      type: 'datetime',
      description: 'When does the screening start?',
    },
    {
      name: 'endAt',
      title: 'Ends at',
      type: 'datetime',
      description: 'When does the screening end?',
    },
    {
      name: 'allowedGuests',
      title: 'Who can come?',
      type: 'string',
      options: {
        list: [
          { title: 'Members', value: 'members' },
          { title: 'Members and friends', value: 'friends' },
          { title: 'Anyone', value: 'anyone' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'infoUrl',
      title: 'More info at',
      type: 'url',
      description:
        'URL to imdb.com, rottentomatoes.com or some other place with reviews, stats, etc',
    },
    {
      name: 'ticket',
      title: 'Ticket',
      type: 'file',
      description: 'PDF for printing a physical ticket',
    },
  ],
  preview: {
    select: {
      title: 'title.es',
      media: 'icon',
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
