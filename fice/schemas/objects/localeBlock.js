import { languages } from '../languages'

export const localeBlock = {
  title: 'localeBlock',
  name: 'localeBlock',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  fields: languages.map((lang) => ({
    title: lang.title,
    name: lang.name,
    type: 'array',
    of: [
      {
        type: 'block',
      },
      {
        type: 'break',
      },
      {
        type: 'image',
      },
    ],

    fieldset: lang.isDefault ? null : 'translations',
  })),
}
