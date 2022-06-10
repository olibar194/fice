export default {
  name: 'home',
  title: 'HomePage',
  type: 'document',
  localize: false,
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'color',
      title: 'color',
      type: 'string',
    },
  ],
}
