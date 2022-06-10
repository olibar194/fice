import { slugWithType } from '../slugWithType'

export default {
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Imágenes',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          // fields: [
          //   {
          //     name: 'alt',
          //     type: 'string',
          //     title: 'Alternative text',
          //   },
          // ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    // {
    //   name: 'title',
    //   type: 'string',
    //   title: 'Type of gallery',
    //   description: 'Title of the section',
    //   options: {
    //     list: [
    //       { title: 'Gallery', value: 'gallery' },
    //       { title: 'Dossier', value: 'dossier' },
    //       { title: 'Stills', value: 'stills' },
    //       { title: 'Making Of', value: 'making-of' },
    //     ],
    //     layout: 'radio', // <-- defaults to 'dropdown'
    //   },
    // },
    // {
    //   name: 'display',
    //   type: 'string',
    //   title: 'Display as',
    //   description: 'How should we display these images?',
    //   options: {
    //     list: [
    //       { title: 'Stacked on top of eachother', value: 'stacked' },
    //       { title: 'In-line', value: 'inline' },
    //       { title: 'Carousel', value: 'carousel' },
    //     ],
    //     layout: 'radio', // <-- defaults to 'dropdown'
    //   },
    // },
    // {
    //   name: 'zoom',
    //   type: 'boolean',
    //   title: 'Zoom enabled',
    //   description: 'Should we enable zooming of images?',
    // },
  ],

  preview: {
    select: {
      title: '',
      date: 'slug.current',
      media: 'gallery.images.0',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('/')[1]

      return {
        title: `Premios - ${year}`,
        date: selection.date,
        media: selection.media,
      }
    },
  },
}
