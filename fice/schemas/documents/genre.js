export default {
  name: 'genre',
  title: 'Genre',
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
      title: 'name.en',
    },
  },
}
