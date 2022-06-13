import { UserIcon } from '@sanity/icons'
import { array } from 'prop-types'
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
      // description: "Dejar '/' en la edición del home",
      options: {
        source: 'year',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Portada',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      title: 'Info home',
      type: 'richText',
    },
    {
      name: 'cronograma',
      title: 'Cronograma',
      type: 'file',
      description: 'PDF del cronograma',
    },
    // {
    //   name: 'files',
    //   title: 'Archivos de la edición',
    //   type: 'array',
    //   of: [{ type: 'file' }],
    //   description: 'PDFs o archivos a descargar',
    // },
  ],
  preview: {
    select: { title: 'year', media: 'image' },
  },
}

import client from 'part:@sanity/base/client'

// const notExist = async (document, parent) => {d
//   console.log(document, parent)
//   let array = parent.document[parent.path[0]]
//   console.log(array)

//   if (!array.includes(document[0])) return true
//   else {
//     return 'Ya existe en la lista'
//   }
// }
const sameEdiciton = async (document, parent) => {
  let edi = await client.fetch(`*[_id == "${document._ref}"]`)
  let bool = edi[0].slug.current.split('/')[1] === parent.document.year
  console.log('es de edition', edi)
  return bool
}
