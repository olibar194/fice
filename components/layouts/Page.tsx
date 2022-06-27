import { PortableText } from '@portabletext/react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import useScrollBlock from './../../hooks/useScrollBlock'
import Link from 'next/link'
import { url } from 'inspector'

export default function PAge({ page }: any) {
  const { pageData, globalSettings: global } = page
  const [blockScroll, allowScroll] = useScrollBlock()

  const [ref, isVisible] = useInView({ threshold: 0.7 })
  const [ref2, isVisible2] = useInView({ threshold: 0.6 })
  const [ref3, isVisible3] = useInView({ threshold: 0.2 })

  const [modalIsOpen, setIsOpen] = useState(false)
  const [checkedState, setCheckedState] = useState(0)
  const [type, setType] = useState('trailer')

  const openModal = (type: string, element: any) => {
    blockScroll()
    setType(type)
    setCheckedState(element)
    setIsOpen(true)
  }

  function closeModal() {
    allowScroll()
    setIsOpen(false)
  }

  function handleCheckedAnt(index: number) {
    index !== 0 && setCheckedState(index - 1)
  }

  function handleCheckedSig(index: number, len: number) {
    index + 1 < len && setCheckedState(index + 1)
  }

  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0.8,
      y: -10,
    },
  }
  const variants2 = {
    visible: {
      x: 0,
    },
    hidden: {
      y: -15,
    },
  }
  const variants3 = {
    visible: {
      x: 0,
    },
    hidden: {
      y: -20,
    },
  }

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

  return (
    <section className="flex w-full flex-col items-center justify-center">
      {/* banner */}

      <motion.section
        ref={ref}
        variants={variants}
        animate={isVisible ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative  w-full bg-cover bg-center"
        style={{
          height: '32rem',
          maxHeight: '50rem',
          backgroundImage: `url(${pageData.image.asset.url})`,
        }}
      ></motion.section>
      <section className=" max-w-6xl  p-4">
        {/* convocatoria info y buttons */}
        {global.convo.enabled && (
          <div className="my-8 flex flex-col items-center justify-center">
            <PortableText
              value={global.convo.info.es}
              components={myPortableTextComponents}
            />
            <div className="my-8 flex w-full flex-wrap items-center justify-center">
              {global.convo.links.map((value: any, index: any) => {
                return (
                  <div key={index} className=" p-2">
                    <button className="cursor-pointer  border-2 border-emerald-700 bg-emerald-200 p-4">
                      <a href={value.url} target={'_blank'}>
                        {value.buttons.es}
                      </a>
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* info */}
        <div className="my-8 flex flex-col items-center justify-center">
          <PortableText
            value={global.info.es}
            components={myPortableTextComponents}
          />

          {/* equipo */}

          <h1 className="p-8 text-center text-lg font-bold uppercase tracking-wide text-gray-800 sm:text-xl">
            Equipx
          </h1>
          <div className="flex flex-wrap items-center justify-center">
            {global.crewMembers.map((value: any, index: number) => {
              return (
                <div
                  key={index}
                  className="relative m-5 flex h-80 w-80 items-center justify-center border"
                >
                  <div
                    className="absolute h-full w-full opacity-50"
                    style={{
                      background: `url(${value.image.asset.url}) no-repeat center center `,
                    }}
                  ></div>
                  <h2 className="z-20 font-bold">{value.name}</h2>
                </div>
              )
            })}
          </div>

          {/* info virtual */}

          <h1 className="p-8 text-center text-lg font-bold uppercase tracking-wide text-gray-800 sm:text-xl">
            Info Virtual
          </h1>
          <PortableText
            value={global.infoVirtual.es}
            components={myPortableTextComponents}
          />

          {/* apoyan y acompañan */}
          <section className=" m-8 mx-2 pt-8 pb-2">
            <div className="body-font container mx-auto my-4 px-8  sm:px-12  lg:rounded-xl lg:px-20">
              <h1 className="p-8 text-center text-lg font-bold uppercase tracking-wide text-gray-800 sm:text-xl">
                apoyan
              </h1>
              <div className="flex flex-wrap items-center justify-center px-8">
                {global.apoyan.images.map((e: any, i: any) => {
                  return (
                    <div key={i} className="flex items-center justify-center ">
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

            <div className="body-font container mx-auto  px-8  sm:px-12 lg:rounded-xl lg:px-20">
              <h1 className="p-8 text-center text-lg font-bold uppercase tracking-wide text-gray-800 sm:text-xl">
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
        </div>
      </section>
    </section>
  )
}
