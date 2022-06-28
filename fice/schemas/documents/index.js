import { type } from 'os'
import { BiHomeAlt } from 'react-icons/bi'
export default {
  name: 'index',
  title: 'Info general',
  type: 'document',
  icon: BiHomeAlt,
  fields: [
    {
      name: 'slug',
      title: 'URL',
      type: 'slug',
      // description: "Dejar '/' para el home",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
    },
    {
      name: 'image',
      title: 'Portada',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    { name: 'info', title: 'Info Fice', type: 'localeBlock' },
    {
      name: 'crewMembers',
      title: 'Miembros',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'person' } }],
    },
    { name: 'apoyan', title: 'Apoyan', type: 'gallery' },
    { name: 'acompanan', title: 'Acompañan', type: 'gallery' },
  ],
  preview: {
    select: {
      title: 'slug.current',
    },
    prepare(selection) {
      return {
        title: `Home`,
      }
    },
  },
}
