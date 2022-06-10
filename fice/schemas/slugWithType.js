import slugify from 'slugify'
import { isUniqueAcrossAllDocuments } from './isUniqueAcrossAllDocuments'
import client from 'part:@sanity/base/client'

async function getEdition(ref) {
  console.log(ref, 'ref')
  let edi = await client.fetch(`*[_type == "edition" && _id == "${ref}"]`)
  console.log(edi[0].year)
  return edi[0].year
}

function formatSlug(input) {
  const slug = slugify(input, { lower: true })
  return slug
}

function parseSlug(input) {
  return input
}
export function slugWithType(prefix = ``, source = '', lang = '') {
  const slugStart = prefix ? `/${prefix}/` : `/`
  const specificLang = lang
  const slugEnd = source === '' ? `/${prefix}` : `/`

  return {
    name: `slug`,
    type: `slug`,
    title: 'Url',
    options: {
      isUnique: isUniqueAcrossAllDocuments,
      source: async (doc) => {
        //
        let edition
        if (!!doc.edition) {
          console.log(doc)
          edition = await getEdition(doc.edition._ref)
        }

        if (source !== '') {
          return (
            '/' +
            formatSlug(edition) +
            slugStart +
            formatSlug(
              lang === '' ? doc[`${source}`] : doc[`${source}`][`${lang}`]
            )
          )
        } else {
          return '/' + formatSlug(edition) + slugEnd
        }
      },
      slugify: (value) => parseSlug(value),
    },
    validation: (Rule) =>
      Rule.custom(({ current }) => {
        // if (typeof current === 'undefined') {
        //   return true
        // }

        if (current) {
          // if (!current.startsWith(edition)) {
          //   return `Slug must begin with "${edtion}". Click "Generate" to reset.`
          // }

          // if (current.slice(edition.length).split('').includes('/')) {
          //   return `Slug cannot have another "/" after "${edition}"`
          // }

          if (current.endsWith('/')) {
            return `Slug cannot end with "/"`
          }
        }

        return true
      }),
  }
}
