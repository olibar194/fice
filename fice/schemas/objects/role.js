export default {
  name: 'role',
  title: 'Rol',
  type: 'document',
  localize: true,
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'localeString',
      validation: (Rule) =>
        Rule.fields({
          es: (fieldRule) => fieldRule.required(),
        }),
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'localeString',
    },
  ],
  preview: {
    select: { title: 'title.es' },
  },
}
