import { MdLocalMovies as icon } from 'react-icons/md'
import { slugWithType } from '../slugWithType'

const asyncSlug = async (input) => {
  console.log('caca')
  console.log(input)
  return 'caca'
}
export default {
  name: 'production',
  title: 'Producción',
  type: 'document',
  icon,
  fields: [
    // elementos para slug
    {
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      to: { type: 'category' },
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'original',
      title: 'Título Original',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    //
    slugWithType('production'),
    {
      name: 'dataSheet',
      title: 'Ficha Técnica',
      type: 'dataSheet',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seasons',
      title: 'Temporadas',
      description: 'Dejar vacío para aquellas producciones que no sean Series',
      type: 'number',
    },
    {
      name: 'episodes',
      title: 'Episodios',
      description: 'Dejar vacío para aquellas producciones que no sean Series',
      type: 'number',
    },
    {
      name: 'duration',
      title: 'Duration',

      type: 'number',
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
    // {
    //   name: 'edition',
    //   title: 'Edición',
    //   type: 'reference',
    //   to: { type: 'edition' },
    //   validation: (Rule) => Rule.required(),
    // },

    // slugWithType(`movies`, `original`),
    // {
    //   name: 'title',
    //   title: 'Título',
    //   type: 'localeString',
    // },
    // {
    //   name: 'overview',
    //   title: 'Overview',
    //   type: 'localeBlock',
    // },
    // {
    //   name: 'releaseDate',
    //   title: 'Release date',
    //   type: 'datetime',
    // },
    // {
    //   name: 'externalId',
    //   title: 'External ID',
    //   type: 'number',
    // },
    // {
    //   name: 'poster',
    //   title: 'Poster Image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // },
    // {
    //   name: 'director',
    //   title: 'Director',
    //   type: 'reference',
    //   to: { type: 'person' },
    // },
    // {
    //   name: 'castMembers',
    //   title: 'Cast Members',
    //   type: 'array',
    //   of: [{ type: 'reference', to: { type: 'person' } }],
    // },
    // {
    //   name: 'crewMembers',
    //   title: 'Crew Members',
    //   type: 'array',
    //   of: [{ type: 'reference', to: { type: 'person' } }],
    // },
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
