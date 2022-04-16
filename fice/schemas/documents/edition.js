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
    // {
    //   name: 'movies',
    //   title: 'Movies',
    //   type: 'array',
    //   of: [{ type: 'reference', to: { type: 'movie' } }],
    // },
  ],
  preview: {
    select: { title: 'year', media: 'image' },
  },
}
