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
    <section className="flex flex-col items-center">
      {docType === 'home' && <Home page={data} />}
      {/* {docType === 'page' && <PageSingle page={pageData} />} */}
    </section>
  )
}

function getQueryFromSlug(slugArray = []) {
  type q = {
    [key: string]: string
  }

  const docQuery: q = {
    home: groq`*[_type == "edition" && slug.current == '/'][0]{
    ...,
    gallery {
      ...,
      images[] {
        ...,
        _type == "image" => {..., asset -> {...}}
      }
    },
    convo{
      ...,
      call -> { ...,
        categoryCall[] {
          ...,
          image {..., asset -> {...}},
          info {
            ...,
            es[] { 
            ...,
            _type == "image" => {..., asset -> {...}}
            },
          },
        },
        image{..., asset -> {...},},
        files[] {
          ...,
          _type == "file" => {..., asset -> {...}}
          
        },
        info{
          es[] {
            ...,
            _type == "image" => {..., asset -> {...}}
            },
          },
      },
    },
    logo {
      ...,
      _type == "image" => {..., asset -> {...}}
      },
    info{
      es[] {
        ...,
        _type == "image" => {..., asset -> {...}}
        },
    },
    infoVirtual{
      es[] {
        ...,
        _type == "image" => {..., asset -> {...}}
        },
    },
    cronograma {
        ...,
        _type == "image" => {..., asset -> {...}}
        
    },
    }`,
    edition: groq`*[_type == "edition" && slug.current == $slug][0]`,
    about: groq`*[_type == "about" && slug.current == $slug][0]`,
    page: groq`*[_type == "page" && slug.current == $slug][0]`,
    call: groq`*[_type == "call" && slug.current == $slug][0]`,
  }
  console.log('slug', slugArray)

  let queryParams = { slug: `/${slugArray.join('/')}` }

  let docType = 'edition'

  if (slugArray.length === 0) {
    return {
      docType: 'home',
      queryParams: { slug: '/' },
      query: docQuery.home,
    }
  }
  if (slugArray[1] === 'convocatoria') {
    // console.log('convo', slugArray)

    return {
      docType: 'call',
      queryParams: queryParams,
      query: docQuery.call,
    }
  }

  if (slugArray[0] === 'about') {
    console.log('about', slugArray)
    return {
      docType: 'about',
      queryParams: { slug: '/about' },
      query: docQuery.about,
    }
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
  const globalSettingsQuery = groq`*[_type == "index"][0]{
  ...,
  image {
    ...,
    asset -> {...}
  },
  acompanan{
    ...,
    images[] {
      ...,
      asset -> {...}
      }
  },
  apoyan{
    ...,
    images[] {
      ...,
      asset -> {...}
      }
  },
  crewMembers[] -> {
    ...,
    image {
      ...,
      asset -> {...}
      },
     role[] -> {
       ...
     }
  },
  info{
   es[] {
     ...,
     _type == "image" => {..., asset -> {...}}
     },
   },
}`

  const globalSettings = await client.fetch(globalSettingsQuery)

  // A helper function to work out what query we should run based on this slug

  if (params.slug !== undefined && params.slug[0] === 'about') {
    let docType = 'about'
    let pageData = null
    let query = null
    let queryParams = null
    return {
      props: {
        data: { query, queryParams, docType, pageData, globalSettings },
      },
    }
  }

  const { query, queryParams, docType } = getQueryFromSlug(params.slug)
  // Get the initial data for this page, using the correct query
  const pageData = await client.fetch(query, queryParams)
  // const pageData = await client.fetch(query, queryParams)

  return {
    props: {
      data: { query, queryParams, docType, pageData, globalSettings },
    },
  }
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    //   groq`*[_type in ["edition", "movies", "person", 'jury', 'activity', 'activities', 'awards', 'screening' ] && defined(slug.current)][].slug.current`
    groq`*[_type in ["edition", "about", "call"] && defined(slug.current)][].slug.current`
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
