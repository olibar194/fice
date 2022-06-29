import { PortableText } from '@portabletext/react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import useScrollBlock from '../../hooks/useScrollBlock'
import Link from 'next/link'
import { url } from 'inspector'

export default function Call({ page }: any) {
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

  console.log(pageData)

  return (
    <section className=" flex w-full flex-col items-center justify-center">
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
        {true && (
          <div className="flex flex-col items-center justify-center">
            <PortableText
              value={pageData.info.es}
              components={myPortableTextComponents}
            />
            <h1 className="m-6 mb-2 text-2xl font-bold">Convocatorias:</h1>
            <div className="my-8 mt-2 flex w-full flex-col flex-wrap items-center justify-center">
              {pageData.categoryCall.map((value: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="my-4 w-full border border-teal-200 p-2"
                  >
                    <h1 className="m-2 my-4 text-2xl">{value.title.es}</h1>
                    <hr />
                    <img src={value.image.asset.url} className="my-4" alt="" />
                    <PortableText
                      value={value.info.es}
                      components={myPortableTextComponents}
                    />
                    {value.files !== null && (
                      <div className="my-4">
                        <hr />
                        <h1 className="my-4 ">Archivos:</h1>
                        {value.files.map((value: any, index: any) => {
                          return (
                            <button className="cursor-pointer  border-2 border-emerald-700 bg-emerald-200 p-4">
                              <a href={value.url} target={'_blank'}>
                                Archivo {index + 1}
                              </a>
                            </button>
                          )
                        })}
                      </div>
                    )}
                    <hr />
                    <h1 className="my-4">Link al formulario:</h1>
                    <a href={value.link_f} target={'_blank'}>
                      <button className="cursor-pointer  border-2 border-emerald-700 bg-emerald-200 p-4">
                        Formulario
                      </button>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* info */}
      </section>
    </section>
  )
}
