import { MdLocalMovies as icon, MdPeopleAlt } from 'react-icons/md'
import { slugWithType } from '../slugWithType'
import edition from './edition'

export const activity = {
  name: 'activity',
  title: 'Actividad',
  type: 'document',
  icon: MdPeopleAlt,
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'localeString',
      validation: (Rule) =>
        Rule.fields({
          es: (fieldRule) => fieldRule.required(),
        }),
    },
    {
      name: 'edition',
      title: 'Edición',
      type: 'reference',
      to: { type: 'edition' },
      validation: (Rule) => Rule.required(),
    },

    slugWithType(`activity`, `title`, 'es'),
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
      title: 'title.es',
      date: 'edition.slug.current',
      media: 'poster',
      castName0: 'castMembers.0.person.name',
      castName1: 'castMembers.1.person.name',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0]
      const cast = [selection.castName0, selection.castName1]
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
