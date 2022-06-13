import { BiWorld } from 'react-icons/bi'

export default {
  name: 'country',
  title: 'Country',
  type: 'document',
  icon: BiWorld,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'localeString',
    },
  ],
  preview: {
    select: {
      title: 'name.es',
    },
  },
}
