import { languages } from '../languages'

export const localeString = {
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  // Dynamically define one field per language
  fields: languages.map((lang) => ({
    title: lang.title,
    name: lang.name,
    type: 'string',
    fieldset: lang.isDefault ? null : 'translations',
  })),
}
