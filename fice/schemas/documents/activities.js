import { UserIcon } from '@sanity/icons'
import { array } from 'prop-types'
import { AiOutlineCarryOut } from 'react-icons/ai'
import { slugWithType } from '../slugWithType'

export default {
  name: 'activities',
  title: 'Actividades',
  type: 'document',
  fields: [
    {
      name: 'edition',
      title: 'Edición',
      type: 'reference',
      to: { type: 'edition' },
      validation: (Rule) => Rule.required(),
    },

    slugWithType(`activities`, ``),

    {
      name: 'activities',
      title: 'Actividades',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'activity' },
          validation: (Rule) => [
            Rule.custom(async (document, parent) => {
              let bool
              !!document
                ? (bool = await sameEdiciton(document, parent))
                : (bool = true)
              if (bool) return bool
              else {
                return 'No es del mismo año'
              }
            }),
          ],
        },
      ],
      validation: (Rule) => [Rule.unique()],
    },
  ],
  preview: {
    select: {
      title: 'edition.slug.current',
      date: 'edition.slug.current',
      castName0: 'activity.0.title.name',
      castName1: 'activity.1.title.name',
    },
    prepare(selection) {
      const cast = [selection.castName0, selection.castName1]
        .filter(Boolean)
        .join(', ')

      return {
        title: `Actividad - ${
          selection.date === '/' ? 'Home' : selection.date
        }`,
        subtitle: cast,
      }
    },
  },
}

import client from 'part:@sanity/base/client'

const sameEdiciton = async (document, parent) => {
  console.log(document, parent)
  let edi = await client.fetch(`*[_id == "${parent.document.edition._ref}"]`)
  let bool = edi[0].slug.current.split('/')[1] === parent.document.year
  console.log('es de edition', edi)
  return bool
}
