export default {
  name: 'hashtag',
  title: 'Hashtag',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'localeString',
    },
  ],
  preview: {
    select: {
      title: 'title.es',
    },
  },
}
