// pages/movies/[slug].js
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import { usePreviewSubscription, urlFor } from '../lib/sanity'
import { getClient } from '../lib/sanity.server'
import { UrlObject } from 'url'

const movieQuery = groq`
  *[_type == "movie" && slug.current == $slug][0] {
    _id,
    title,
    overview,
    poster,
    "slug": slug.current
  }
`

export default function movie({ data }: any) {
  const router = useRouter()

  // const { data: movie } = usePreviewSubscription(movieQuery, {
  //   params: { slug: data.movie?.slug?.current },
  //   initialData: data?.movie,
  //   enabled: preview && data.movie?.slug?.current,
  // })

  console.log(data)

  return (
    <article>
      <h2>fice</h2>
      {/* <figure>{!!poster && <img src={urlFor(poster).url()} />}</figure>
      <PortableText value={overview} /> */}
    </article>
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
      queryParams: {},
      query: docQuery.home,
    }
  }

  const [slugStart] = slugArray

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
  console.log('params', params)

  const { query, queryParams, docType } = getQueryFromSlug(params.slug)

  // console.log(query, queryParams, docType)

  const query2 = groq`*[_type == "movie" && slug.current == '/2022/movies/pi'][0]`
  // Get the initial data for this page, using the correct query
  const pageData = await client.fetch(query2)

  return {
    props: {
      data: { query, queryParams, docType, pageData },
    },
  }
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type in ["edition", "movies", "person" ] && defined(slug.current)][].slug.current`
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
