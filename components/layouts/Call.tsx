import { PortableText } from '@portabletext/react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState, useContext } from 'react'
import useScrollBlock from '../../hooks/useScrollBlock'
import Link from 'next/link'
import { url } from 'inspector'
import colorContext from '../../contexts/colorContext'
import AccordionUI from '../accordionUI'
import { myPortableTextComponents } from './../portableTextComponents'

export default function Call({ page }: any) {
  const [Index, setIndex] = useState(false)

  const { color, setColor } = useContext(colorContext)

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

  console.log(pageData)

  return (
    <section className=" flex w-full flex-col items-center justify-center pt-32">
      {/* accordions */}

      <section className=" max-w-6xl  p-4">
        {/* convocatoria info y buttons */}
        {true && (
          <div className="flex flex-col items-center justify-center">
            <div
              className="mx-auto max-w-5xl text-center text-xl sm:text-left "
              style={{ color: `${color}` }}
            >
              <h1
                className="py-4 text-6xl font-bold sm:text-left sm:text-8xl sm:font-thin "
                style={{ color: `${color}` }}
              >
                OPEN CALL
              </h1>

              <PortableText
                value={pageData.info.es}
                components={myPortableTextComponents}
              />
            </div>
            <h1
              className="m-6 mb-2 text-3xl font-bold"
              style={{ color: `${color}` }}
            >
              Convocatorias:
            </h1>
            <div className="my-8 mt-2 flex w-full flex-col flex-wrap items-center justify-center">
              {pageData.categoryCall.map((value: any, index: any) => {
                return (
                  <>
                    <AccordionUI
                      title={value.title.es}
                      Id={index}
                      inpar={index % 2 == 1}
                      children={value}
                      Index={Index}
                      setIndex={setIndex}
                    ></AccordionUI>
                  </>
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
