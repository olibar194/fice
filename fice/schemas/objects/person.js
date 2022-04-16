import { UserIcon } from '@sanity/icons'

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
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },
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
