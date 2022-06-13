import { UserIcon } from '@sanity/icons'
import { array } from 'prop-types'
import { BiUserVoice } from 'react-icons/bi'
import { slugWithJury } from '../slugWithType'

export default {
  name: 'jury',
  title: 'Jurado',
  type: 'document',
  icon: BiUserVoice,
  fields: [
    {
      name: 'edition',
      title: 'Edición',
      type: 'reference',
      to: { type: 'edition' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Titulo',
      description:
        'El jurado general de la edición debe poseer URL y no es necesario titulo, para jurado específico de una competencia no necesita URL pero sí título',
      type: 'localeString',
    },
    slugWithJury(`jury`, ``),
    {
      name: 'jury',
      title: 'Jurado',
      type: 'array',
      description: 'Conjunto de juradxs de la edición',
      of: [
        {
          type: 'reference',
          to: { type: 'person' },
        },
      ],
      validation: (Rule) => [
        Rule.required()
          .min(1)
          .max(2)
          .error('Required field with at least 1 and at most 2 entries.'),
        Rule.unique(),
      ],
    },
  ],
  preview: {
    select: {
      title: 'title.es',
      date: 'edition.slug.current',
      castName0: 'jury.0.person.name',
      castName1: 'jury.1.person.name',
    },
    prepare(selection) {
      const cast = [selection.castName0, selection.castName1]
        .filter(Boolean)
        .join(', ')
      const title = !!selection.title ? selection.title : 'Juradx'
      return {
        title: `${title} - ${selection.date}`,
        subtitle: cast,
      }
    },
  },
}
