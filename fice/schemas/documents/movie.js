import { MdLocalMovies as icon } from 'react-icons/md'
import { slugWithType } from '../slugWithType'

export const movie = {
  name: 'movie',
  title: 'Movie',
  type: 'document',
  icon,
  fields: [
    {
      name: 'original',
      title: 'Título Original',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'edition',
      title: 'Edición',
      type: 'reference',
      to: { type: 'edition' },
      validation: (Rule) => Rule.required(),
    },

    slugWithType(`movies`, `original`),
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'island',
      title: 'Island',
      type: 'reference',
      to: { type: 'island' },
    },
    {
      name: 'competition',
      title: 'Competencia',
      type: 'reference',
      to: { type: 'competition' },
    },
    {
      name: 'data',
      title: 'Ficha Técnica',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'localeString',
        },
        {
          name: 'type',
          title: 'Tipo',
          type: 'string',
          options: {
            list: [
              { title: 'Corto', value: 'corto' },
              { title: 'Largometraje', value: 'largo' },
            ],
          },
        },
        {
          name: 'storyline',
          title: 'Storyline',
          type: 'localeBlock',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'duration',
          title: 'Duración',
          type: 'number',
          description: 'Duración en minutos',
        },
        {
          name: 'year',
          title: 'Year',
          type: 'number',
        },
        // {
        //   name: 'genre',
        //   title: 'Genre',
        //   type: 'array',
        //   of: [{ type: 'reference', to: { type: 'genre' } }],
        // },
        {
          name: 'links',
          title: 'Links externos',
          type: 'array',
          of: [{ type: 'url' }],
          description: 'Links externos de referencia y redes sociales',
        },
        {
          name: 'director',
          title: 'Director',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'person' } }],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'writers',
          title: 'Writers',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'person' } }],
        },
        {
          name: 'producers',
          title: 'Producers',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'producer' } }],
        },
        {
          name: 'distributors',
          title: 'Distribuidores',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'producer' } }],
        },
        {
          name: 'countries',
          title: 'Países',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'country' } }],
        },
        {
          name: 'geo',
          title: 'Geobloqueo',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'country' } }],
        },
        {
          name: 'castMembers',
          title: 'Cast Members',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'person' } }],
        },
        {
          name: 'crewMembers',
          title: 'Crew Members',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'person' } }],
        },
      ],
    },
    {
      name: 'gallery',
      title: 'Galería',
      type: 'gallery',
    },
    {
      name: 'videos',
      title: 'videos Vimeo Pro',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'videosRef',
      title: 'videos Externos',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],

  // preview: {
  //   select: {
  //     title: 'original',
  //     date: 'slug.current',
  //     media: 'poster',
  //     castName0: 'castMembers.0.person.name',
  //     castName1: 'castMembers.1.person.name',
  //   },
  //   prepare(selection) {
  //     const year = selection.date && selection.date.split('/')[1]
  //     const cast = [
  //       selection.director,
  //       selection.castName0,
  //       selection.castName1,
  //     ]
  //       .filter(Boolean)
  //       .join(', ')

  //     return {
  //       title: `${selection.title} ${year ? `(${year})` : ''}`,
  //       date: selection.date,
  //       subtitle: cast,
  //       media: selection.media,
  //     }
  //   },
  // },
}
