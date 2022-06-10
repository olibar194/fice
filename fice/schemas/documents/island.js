import { GiIsland } from 'react-icons/gi'

export default {
  name: 'island',
  title: 'Islas',
  icon: GiIsland,
  type: 'document',
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
