export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'URL',
      type: 'slug',
      description: "Dejar '/' para el home",
      validation: (Rule) => Rule.required(),
    },
  ],
}
