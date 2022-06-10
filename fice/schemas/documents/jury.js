import { UserIcon } from '@sanity/icons'
import { array } from 'prop-types'
import { BiUserVoice } from 'react-icons/bi'
import { slugWithType } from '../slugWithType'

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

    slugWithType(`jury`, ``),
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
      title: 'edition.slug.current',
      date: 'edition.slug.current',
      castName0: 'jury.0.person.name',
      castName1: 'jury.1.person.name',
    },
    prepare(selection) {
      const cast = [selection.castName0, selection.castName1]
        .filter(Boolean)
        .join(', ')

      return {
        title: `Juradx - ${selection.date}`,
        subtitle: cast,
      }
    },
  },
}
