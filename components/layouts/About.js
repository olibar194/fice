import { PortableText } from '@portabletext/react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import useScrollBlock from '../../hooks/useScrollBlock'
import Link from 'next/link'
// import { url } from 'inspector'
import ReactCardFlip from 'react-card-flip'
import Card from '../card'

export default function About({ page }) {
  const { pageData: data, globalSettings: global } = page
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
    <section className="flex w-full flex-col items-center justify-center">
      <div className="embla relative min-h-screen w-full">
        <div className="embla__viewport relative">
          <video
            muted
            autoPlay
            loop
            className="z-20"
            style={{
              height: '100vh',
              width: '100%',
              objectFit: 'cover',
              paddingTop: '20px',
              paddingBottom: '20px',
            }} //object-fit:cover
            src={global.video.asset.url}
            // type="video/mp4"
            // id={`video-${data?.id}`}
          ></video>

          <div className="absolute bottom-16 z-10 mx-8 text-center ">
            <h1
              style={{ color: `${data.color_p}` }}
              className="text-xl uppercase   tracking-wider sm:text-6xl "
            >
              QUIENES SOMOS
            </h1>
          </div>
        </div>
      </div>

      <section className="my-8 flex min-h-screen flex-col items-center">
        <h1 className="text-2xl font-bold">Equipx</h1>
        <div className="- mb-16 block justify-center sm:flex sm:flex-wrap">
          <div className="my-1 contents w-full px-2 sm:px-16 lg:w-full">
            {global.crewMembers.map((value, index) => {
              return (
                <>
                  <ReactCardFlip isFlipped={isFlipped['card' + index]}>
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
