import { GrFireball } from 'react-icons/gr'

export default {
  name: 'competition',
  title: 'Competencias',
  type: 'object',
  icon: GrFireball,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'localeString',
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'localeBlock',
    },
    {
      name: 'awards',
      title: 'Premios',
      type: 'array',
      of: [
        {
          type: 'award',
        },
      ],
    },
    {
      name: 'jury',
      title: 'Jurado',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'jury' },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name.es',
    },
  },
}
