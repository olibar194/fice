import { PortableText } from '@portabletext/react'
// import { useInView } from 'react-intersection-observer'
// import { motion } from 'framer-motion'
// import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState, useContext } from 'react'
// import useScrollBlock from './../../hooks/useScrollBlock'
import Link from 'next/link'
// import { url } from 'inspector'
import EmblaCarousel from './../EmblaCarousel'
import colorContext from '../../contexts/colorContext'

export default function Home({ page }: any) {
  const { globalSettings: global, pageData: data } = page
  let images = data.gallery.images
  let title: any = []

  const myPortableTextComponents = {
    types: {
      image: ({ value }: any) => {
        return <img src={value.asset.url} />
      },
      callToAction: ({ value, isInline }: any) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
      break: ({ value }: any) => {
        const { style } = value
        if (style === 'lineBreak') {
          return <hr className="mx-8 my-4" />
        }
        if (style === 'spaceBreak') {
          return (
            <>
              <br />
            </>
          )
        } else {
          return <br />
        }
      },
    },

    marks: {
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith('/')
          ? 'noreferrer noopener'
          : undefined
        return (
          <a href={value.href} rel={rel}>
            {children}
          </a>
        )
      },
    },
  }
  const { color, setColor } = useContext(colorContext)

  useEffect(() => {
    data.color_p !== undefined && setColor(data.color_p)
  }, [page])

  console.log(data.convo.enabled)

  return (
    <section className="flex w-full flex-col items-center justify-center">
      {/* banner */}

      <EmblaCarousel
        call={data.convo.enabled ? data.convo.call : null}
        titles={title}
        slides={images}
      />

      <section className=" max-w-6xl  p-4">
        {data.convo.enabled && (
          <div className="my-8 flex flex-col items-center justify-center">
            <PortableText
              value={data.convo.call.info.es}
              components={myPortableTextComponents}
            />
            <div className="my-8 flex w-full flex-wrap items-center justify-center">
              {data.convo.call.categoryCall.map((value: any, index: any) => {
                return (
                  <div key={index} className=" p-2">
                    <Link
                      href={`/2022/open-call${value.link}`}
                      target={'_blank'}
                    >
                      <button className="cursor-pointer  rounded border-2 border-emerald-700 bg-emerald-200 p-4">
                        {value.title.es}
                      </button>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        )}
        <section className=" m-8 mx-2 pt-8 pb-2">
          <div className="body-font container mx-auto my-4 px-8  sm:px-12  lg:rounded-xl lg:px-20">
            <h1 className=" text-center text-lg font-bold capitalize tracking-wide text-gray-800 sm:text-xl">
              apoyan
            </h1>
            <div className="flex flex-wrap items-center justify-center px-8">
              {global.apoyan.images.map((e: any, i: any) => {
                return (
                  <div key={i} className="flex items-center justify-center ">
                    <img
                      src={e.asset.url}
                      alt=""
                      className="m-4 block h-60 object-contain"
                    />
                  </div>
                )
              })}
            </div>
          </div>

          <div className="body-font container mx-auto  px-8  sm:px-12 lg:rounded-xl lg:px-20">
            <h1 className=" text-center text-lg font-bold capitalize tracking-wide text-gray-800 sm:text-xl">
              acompañan
            </h1>
            <div className="flex flex-wrap  items-center justify-center ">
              {global.acompanan.images.map((e: any, i: any) => {
                return (
                  <div
                    key={i}
                    className="col-span-6 flex items-center justify-center sm:col-span-4 md:col-span-3 xl:col-span-2"
                  >
                    <img
                      src={e.asset.url}
                      alt=""
                      className="m-4 block h-40 object-contain"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}
