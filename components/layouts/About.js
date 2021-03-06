import { PortableText } from '@portabletext/react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState, useContext } from 'react'
import useScrollBlock from '../../hooks/useScrollBlock'
import Link from 'next/link'
// import { url } from 'inspector'
import ReactCardFlip from 'react-card-flip'
import Card from '../card'
import colorContext from '../../contexts/colorContext'

export default function About({ page }) {
  const { pageData: data, globalSettings: global } = page

  const { color, setColor } = useContext(colorContext)

  const [blockScroll, allowScroll] = useScrollBlock()

  const [ref, isVisible] = useInView({ threshold: 0.7 })
  const [ref2, isVisible2] = useInView({ threshold: 0.6 })
  const [ref3, isVisible3] = useInView({ threshold: 0.2 })

  const [modalIsOpen, setIsOpen] = useState(false)
  const [checkedState, setCheckedState] = useState(0)
  const [type, setType] = useState('trailer')

  const openModal = (type, element) => {
    blockScroll()
    setType(type)
    setCheckedState(element)
    setIsOpen(true)
  }

  function closeModal() {
    allowScroll()
    setIsOpen(false)
  }

  function handleCheckedAnt(index) {
    index !== 0 && setCheckedState(index - 1)
  }

  function handleCheckedSig(index, len) {
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
      image: ({ value }) => {
        return <img src={value.asset.url} />
      },
      callToAction: ({ value, isInline }) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
      break: ({ value }) => {
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
      link: ({ children, value }) => {
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

  // const [isOpen, setIsOpen] = useState(false)

  const [isFlipped, setisFlipped] = useState({
    card0: false,
    card1: false,
    card12: false,
    card2: false,
    card3: false,
    card4: false,
    card5: false,
    card6: false,
    card7: false,
  })
  const { card0, card1, card12, card2, card3, card4, card5, card6, card7 } =
    isFlipped

  function handleClick(e) {
    let id = e.target.id
    setisFlipped({
      ...isFlipped,
      [id]: !isFlipped[id],
    })
  }

  // function setOpen() {
  //   setIsOpen(true)
  // }

  return (
    <section className="flex w-full max-w-6xl flex-col items-center justify-center p-2 sm:p-4">
      <div
        className="mx-auto max-w-5xl pt-32 text-center text-xl  sm:text-left"
        style={{ color: `${color}` }}
      >
        <h1
          className="py-4 text-6xl font-bold sm:text-left sm:text-8xl sm:font-thin "
          style={{ color: `${color}` }}
        >
          SOBRE EL FICE
        </h1>
        <div className="p-2">
          <PortableText
            value={global.info.es}
            components={myPortableTextComponents}
          />
        </div>
      </div>
      <section className="my-8 flex max-w-6xl flex-col items-center p-4">
        <h1
          className="my-8 text-2xl font-bold sm:text-3xl"
          style={{ color: `${color}` }}
        >
          Equipx
        </h1>
        <div className="- mb-16 block justify-center sm:flex sm:flex-wrap">
          <div className="my-1 contents w-full px-2 sm:px-16 lg:w-full">
            {global.crewMembers.map((value, index) => {
              return (
                <>
                  <ReactCardFlip
                    key={index}
                    isFlipped={isFlipped['card' + index]}
                  >
                    <span
                      id={`card${index}`}
                      onMouseEnter={handleClick}
                      onClick={handleClick}
                      className=" z-20 mr-8 flex justify-center p-2"
                      key="front"
                    >
                      <Card
                        id={`card${index}`}
                        img={value.image.asset.url}
                        nombre={value.name}
                        rol={'rol'}
                      ></Card>
                    </span>

                    <div
                      id={`card${index}`}
                      onMouseLeave={handleClick}
                      className="z-20 mr-8  flex justify-center p-2"
                      key="back"
                    >
                      <Card
                        id={`card${index}`}
                        t1={`miembra${index}`}
                        t2={''}
                      ></Card>
                    </div>
                  </ReactCardFlip>
                </>
              )
            })}
          </div>
        </div>
      </section>
    </section>
  )
}
