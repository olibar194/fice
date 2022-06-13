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
        if (current) {
          if (current.endsWith('/')) {
            return `Slug cannot end with "/"`
          } else {
            return true
          }
        } else {
          return false
        }
      }),
  }
}

export function slugWithPremios() {
  return {
    name: `slug`,
    type: `slug`,
    title: 'Url',
    options: {
      isUnique: isUniqueAcrossAllDocuments,
      source: async (doc) => {
        let edition
        if (!!doc.edition) {
          edition = await getEdition(doc.edition._ref)
        }
        let slug = '/' + edition + '/' + formatSlug(doc.title.es)
        return slug
      },
      slugify: (value) => parseSlug(value),
    },
    validation: (Rule) =>
      Rule.custom(({ current }) => {
        if (current) {
          if (current.endsWith('/')) {
            return `Slug cannot end with "/"`
          }
        }
        return true
      }),
  }
}

export function slugWithJury() {
  return {
    name: `slug`,
    type: `slug`,
    title: 'Url',
    description: 'Dejar vacío para conjunto de juradx sin página propia',
    options: {
      isUnique: isUniqueAcrossAllDocuments,
      source: async (doc) => {
        let edition
        if (!!doc.edition) {
          edition = await getEdition(doc.edition._ref)
        }
        let slug
        doc.title !== undefined
          ? (slug = '/' + edition + '/' + formatSlug(doc.title.es))
          : (slug = '/' + edition + '/' + 'jury')
        return slug
      },
      slugify: (value) => parseSlug(value),
    },
  }
}
