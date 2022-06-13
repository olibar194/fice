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
      description: "Dejar '/' home",
    },
    { name: 'info', title: 'Info Fice', type: 'localeBlock' },
    {
      name: 'convo',
      title: 'Convocatoria',
      type: 'document',
      fields: [
        {
          name: 'enabled',
          type: 'boolean',
          title: 'Convocatoria habilitada',
          description: 'La convocatoria sigue abierta?',
        },
        {
          name: 'links',
          title: 'Links Convocatoria',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'url', type: 'url' },
                { name: 'buttons', type: 'localeString' },
              ],
              preview: {
                select: { title: 'buttons.es', subtitle: 'url' },
              },
            },
          ],
        },

        { name: 'info', title: 'Info Convocatoria', type: 'localeBlock' },
        {
          name: 'files',
          title: 'Archivos de la convocatoria',
          type: 'array',
          of: [{ type: 'file' }],
          description: 'PDFs o archivos relativos a la convocatoria',
        },
      ],
    },
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
