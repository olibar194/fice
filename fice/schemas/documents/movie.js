import { MdLocalMovies as icon } from 'react-icons/md'
import { slugWithType } from '../slugWithType'
import edition from './edition'

export const movie = {
  name: 'movie',
  title: 'Movie',
  type: 'document',
  icon,
  fields: [
    {
      name: 'original',
      title: 'Título Original',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'edition',
      title: 'Edición',
      type: 'reference',
      to: { type: 'edition' },
      validation: (Rule) => Rule.required(),
    },

    slugWithType(`movies`, `original`),
    {
      name: 'title',
      title: 'Título',
      type: 'localeString',
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'localeBlock',
    },
    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'datetime',
    },
    {
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'director',
      title: 'Director',
      type: 'reference',
      to: { type: 'person' },
    },
    {
      name: 'castMembers',
      title: 'Cast Members',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'person' } }],
    },
    {
      name: 'crewMembers',
      title: 'Crew Members',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'person' } }],
    },
  ],
  preview: {
    select: {
      title: 'original',
      date: 'releaseDate',
      media: 'poster',
      castName0: 'castMembers.0.person.name',
      castName1: 'castMembers.1.person.name',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0]
      const cast = [
        selection.director,
        selection.castName0,
        selection.castName1,
      ]
        .filter(Boolean)
        .join(', ')

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        subtitle: cast,
        media: selection.media,
      }
    },
  },
}
