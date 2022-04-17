import { UserIcon } from '@sanity/icons'
import { array } from 'prop-types'
import { AiOutlineCarryOut } from 'react-icons/ai'

export default {
  name: 'edition',
  title: 'Edición',
  type: 'document',
  icon: AiOutlineCarryOut,
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'year',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Portada',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'movies',
      title: 'Movies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'movie' },
          validation: (Rule) => [
            Rule.custom(async (document, parent) => {
              console.log(document)
              let bool = await sameEdiciton(document, parent)
              if (bool) return bool
              else {
                return 'No es del mismo año'
              }
            }),
          ],
        },
      ],
      validation: (Rule) => [
        Rule.required().min(1).error('Required field with at least 1 entry'),
      ],
    },
  ],
  preview: {
    select: { title: 'year', media: 'image' },
  },
}

import client from 'part:@sanity/base/client'

const sameEdiciton = async (document, parent) => {
  let edi = await client.fetch(`*[_id == "${document._ref}"]`)
  console.log(edi[0].slug.current.split('/')[1] === parent.document.year)
  let bool = edi[0].slug.current.split('/')[1] === parent.document.year

  return bool
}
