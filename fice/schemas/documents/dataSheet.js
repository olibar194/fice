import { BiSpreadsheet as icon } from 'react-icons/bi'

export default {
  name: 'dataSheet',
  title: 'Ficha',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'state',
      title: 'State',
      type: 'reference',
      to: [{ type: 'state' }],
    },
    {
      name: 'storyline',
      title: 'Storyline',
      type: 'localeBlock',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'datetime',
      // release date deberia parsear dates para idiomas
    },
    {
      name: 'genre',
      title: 'Genre',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'genre' } }],
    },
    {
      name: 'links',
      title: 'Links externos',
      type: 'array',
      of: [{ type: 'url' }],
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
      name: 'director',
      title: 'Director',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'person' } }],
      validation: (Rule) => Rule.required(),
    },
    // podriamos preguntar si hace falta o es al pedo esta data

    {
      name: 'writers',
      title: 'Writers',
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
      name: 'prodService',
      title: 'Production Service',
      type: 'reference',
      to: [{ type: 'prodService' }],
    },
    {
      name: 'countries',
      title: 'Country',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'country' } }],
    },
  ],
  preview: {
    select: {
      title: 'original',
      date: 'slug.current',
      media: 'poster',
      director: 'director[0].name',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('/')[1]
      const cast = [selection.director].filter(Boolean).join(', ')

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        subtitle: cast,
        media: selection.media,
      }
    },
  },
}
