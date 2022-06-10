import { slugWithType } from '../slugWithType'
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
    // slugWithType(`premios-chinchorro`, ``),
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
      type: 'object',
      title: 'Gallery',
      fields: [
        {
          name: 'images',
          type: 'array',
          title: 'Images',
          of: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                },
              ],
            },
          ],
          options: {
            layout: 'grid',
          },
        },
        {
          name: 'display',
          type: 'string',
          title: 'Display as',
          description: 'How should we display these images?',
          options: {
            list: [
              { title: 'Stacked on top of eachother', value: 'stacked' },
              { title: 'In-line', value: 'inline' },
              { title: 'Carousel', value: 'carousel' },
            ],
            layout: 'radio', // <-- defaults to 'dropdown'
          },
        },
        {
          name: 'zoom',
          type: 'boolean',
          title: 'Zoom enabled',
          description: 'Should we enable zooming of images?',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: '',
      date: 'slug.current',
      media: 'gallery.images.0',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('/')[1]

      return {
        title: `Premios - ${year}`,
        date: selection.date,
        media: selection.media,
      }
    },
  },
}
