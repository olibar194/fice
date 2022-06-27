import { AiOutlineCarryOut } from 'react-icons/ai'

export default {
  name: 'edition',
  title: 'Edición',
  type: 'document',
  icon: AiOutlineCarryOut,
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL',
      type: 'slug',
      options: {
        source: 'year',
      },
      validation: (Rule) => Rule.required(),
    },
    { name: 'gallery', title: 'Carousel Home', type: 'gallery' },
    {
      name: 'convo',
      title: 'Convocatoria',
      type: 'document',
      fields: [
        {
          name: 'enabled',
          type: 'boolean',
          title: 'Convocatoria habilitada',
          description: 'La convocatoria sigue abierta?',
        },
        {
          name: 'call',
          title: 'Referencia Convocatoria',
          type: 'reference',
          to: { type: 'call' },
        },
      ],
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      oprtions: {
        hotspot: true,
      },
    },

    {
      name: 'color_p',
      title: 'colorPrimario',
      type: 'string',
    },
    {
      name: 'color_s',
      title: 'colorSecundario',
      type: 'string',
    },
    {
      name: 'color_t',
      title: 'colorTerciario',
      type: 'string',
    },
    {
      name: 'info',
      title: 'Info Edición',
      type: 'localeBlock',
    },
    {
      name: 'infoVirtual',
      title: 'Info Virtual',
      type: 'localeBlock',
    },
    // {
    //   name: 'links',
    //   title: 'Links Virtual',
    //   type: 'array',
    //   of: [{ type: 'url' }],
    // },
    // {
    //   name: 'imagesVirtual',
    //   title: 'Imágenes de Plataformas Virtuales',
    //   type: 'array',
    //   of: [{ type: 'image' }],
    // },
    {
      name: 'cronograma',
      title: 'Cronograma',
      type: 'file',
      description: 'PDF del cronograma',
    },
  ],
  preview: {
    select: { title: 'year', media: 'image' },
  },
}
