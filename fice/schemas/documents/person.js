import { UserIcon } from '@sanity/icons'
import { slugWithType } from '../slugWithType'

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  localize: false,
  icon: UserIcon,
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
    {
      description: 'Utilizar roles en español',
      name: 'role',
      title: 'Rol',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'role' } }],
    },
    // slugWithType('person', ''),
    // {
    //   name: 'slug',
    //   title: 'URL',
    //   type: 'slug',
    //   description:
    //     'generar URL para disponer de un enlace a la página de la persona, sino dejar vacío',
    //   // options: {
    //   //   source: 'name',
    //   //   maxLength: 100,
    //   // },
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
  ],
  preview: {
    select: { title: 'name', media: 'image' },
  },
}
