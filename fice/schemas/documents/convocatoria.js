import { MdOutlineLocalLibrary } from 'react-icons/md'
import { slugWithType } from '../slugWithType'

export default {
  name: 'call',
  title: 'Convocatorias',
  type: 'document',
  icon: MdOutlineLocalLibrary,
  fields: [
    {
      name: 'edition',
      title: 'Edición',
      type: 'reference',
      to: { type: 'edition' },
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
    slugWithType('convocatoria', ''),
    { name: 'info', title: 'Info Convocatoria', type: 'localeBlock' },
    {
      name: 'categoryCall',
      title: 'Categorías Convocatoria',
      type: 'array',
      of: [
        {
          name: 'call',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'localeString',
            },
            {
              name: 'link',
              title: 'Link Interno',
              type: 'string',
              description: 'Link que navega al ancla de la sección',
            },
            { name: 'info', title: 'Info Convocatoria', type: 'localeBlock' },
            {
              name: 'image',
              title: 'Imagen',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    // {
    //   name: 'links',
    //   title: 'Links Convocatoria',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'object',
    //       fields: [
    //         { name: 'url', type: 'url' },
    //         { name: 'buttons', type: 'localeString' },
    //       ],
    //       preview: {
    //         select: { title: 'buttons.es', subtitle: 'url' },
    //       },
    //     },
    //   ],
    // },
    {
      name: 'files',
      title: 'Archivos de la convocatoria',
      type: 'array',
      of: [{ type: 'file' }],
      description: 'PDFs o archivos relativos a la convocatoria',
    },
  ],
  preview: {
    select: { date: 'slug.current', media: 'image' },
    prepare(selection) {
      const year = selection.date && selection.date.split('/')[1]

      return {
        title: `Convocatoria - ${year}`,
        media: selection.media,
      }
    },
  },
}
