import { BsFillSkipEndCircleFill } from 'react-icons/bs'
import { slugWithType } from '../slugWithType'

export default {
  name: 'producer',
  title: 'Producer',
  type: 'document',
  localize: false,
  icon: BsFillSkipEndCircleFill,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please use "Firstname Lastname" format',
      validation: (Rule) => {
        Rule.required()
      },
    },
    slugWithType('producer'),
    // {
    //   name: 'slug',
    //   title: 'URL',
    //   type: 'slug',
    //   description:
    //     'generar URL para disponer de un enlace a la página de la persona, sino dejar vacío',
    //   options: {
    //     source: 'name',
    //     maxLength: 100,
    //   },
    // },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'localeBlock',
    },
    {
      name: 'links',
      title: 'Links externos',
      type: 'array',
      of: [{ type: 'url' }],
    },
  ],
  preview: {
    select: { title: 'name', media: 'image' },
  },
}
