// pages/movies/[slug].js
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import { usePreviewSubscription, urlFor } from '../lib/sanity'
import { getClient } from '../lib/sanity.server'
import dynamic from 'next/dynamic'

const movieQuery = groq`
  *[_type == "movie" && slug.current == $slug][0] {
    _id,
    title,
    overview,
    poster,
    "slug": slug.current
  }
`

const Home = dynamic(() => import('../components/layouts/Home'))
const PageSingle = dynamic(() => import('../components/layouts/Page'))

export default function Page({ data, preview }: any) {
  const { data: pageData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.pageData,
    enabled: preview,
  })

  const { docType } = data

  console.log(data, docType)

  return (
    <>
      {docType === 'home' && <Home page={pageData} />}
      {docType === 'page' && <PageSingle page={pageData} />}
    </>
  )
}

function getQueryFromSlug(slugArray = []) {
  type q = {
    [key: string]: string
  }

  const docQuery: q = {
    home: groq`*[_type == "home"][0]`,
    news: groq`*[_type == "article" && slug.current == $slug][0]`,
    page: groq`*[_type == "page" && slug.current == $slug][0]`,
  }
  console.log('slug', slugArray)

  if (slugArray.length === 0) {
    return {
      docType: 'home',
      queryParams: { slug: '/' },
      query: docQuery.home,
    }
  }

  const [slugStart] = slugArray
  console.log(slugStart, 'slugstart')

  // We now have to re-combine the slug array to match our slug in Sanity.
  let queryParams = { slug: `/${slugArray.join('/')}` }

  let docType
  // Keep extending this section to match the slug against the docQuery object keys
  if (docQuery.hasOwnProperty(slugStart)) {
    docType = slugStart
  } else {
    docType = `page`
  }

  return {
    docType,
    queryParams,
    query: docQuery[docType],
  }
}

export async function getStaticProps({ params }: any) {
  const client = await getClient()

  // Every website has a bunch of global content that every page needs, too!

  // const globalSettings = await client.fetch(globalSettingsQuery)

  // A helper function to work out what query we should run based on this slug

  const { query, queryParams, docType } = getQueryFromSlug(params.slug)

  const query2 = groq`*[_type == "movie" && slug.current == '/2022/movies/pi'][0]`
  // Get the initial data for this page, using the correct query
  const pageData = await client.fetch(query2)
  // const pageData = await client.fetch(query, queryParams)

  return {
    props: {
      data: { query, queryParams, docType, pageData },
    },
  }
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type in ["edition", "movies", "person", 'jury', 'activity', 'activities', 'awards', 'screening' ] && defined(slug.current)][].slug.current`
  )

  // Split the slug strings to arrays (as required by Next.js)
  const paths2 = paths.map((slug: string) => ({
    params: { slug: slug.split('/').filter((p) => p) },
  }))

  return {
    paths: paths2,
    fallback: false,
  }
}
