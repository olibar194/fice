import { slugWithPremios } from '../slugWithType'
import { FaTrophy } from 'react-icons/fa'
export default {
  name: 'awards',
  title: 'Premios',
  icon: FaTrophy,
  type: 'document',
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
      title: 'Título',
      type: 'localeString',
    },
    slugWithPremios(),
    {
      name: 'overview',
      title: 'Overview',
      type: 'localeBlock',
    },
    {
      name: 'competition',
      title: 'Categoría/Competencia',
      type: 'array',
      of: [{ type: 'competition', to: { type: 'competition' } }],
    },
    {
      name: 'gallery',
      type: 'gallery',
      title: 'Gallery',
    },
  ],
  preview: {
    select: {
      title: 'title.es',
      date: 'slug.current',
      media: 'gallery.images.0',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('/')[1]

      return {
        title: `${selection.title} - ${year}`,
        date: selection.date,
        media: selection.media,
      }
    },
  },
}
