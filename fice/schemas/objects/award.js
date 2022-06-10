import { FaAward } from 'react-icons/fa'

export default {
  name: 'award',
  title: 'Premio',
  icon: FaAward,
  type: 'object',
  fields: [
    {
      name: 'award',
      title: 'Premio',
      type: 'localeString',
      description: '',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Tipo',
      type: 'string',
      options: {
        list: [
          { title: 'Corto', value: 'corto' },
          { title: 'Largometraje', value: 'largo' },
        ],
      },
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'localeBlock',
    },
    {
      name: 'winner',
      title: 'Ganador',
      type: 'reference',
      to: { type: 'movie' },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'award.es',
      subtitle: 'winner.original',
    },
  },
}
