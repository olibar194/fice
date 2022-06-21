export default {
  name: 'break',
  type: 'object',
  title: 'Break',
  fields: [
    {
      name: 'style',
      type: 'string',
      title: 'Break style',
      options: {
        list: [
          { title: 'Space break', value: 'spaceBreak' },
          { title: 'Line break', value: 'lineBreak' },
          /* { title: "Page break", value: "pageBreak" },
          { title: "Section break", value: "sectionBreak" }, */
        ],
      },
    },
  ],
}
