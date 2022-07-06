import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext,
} from 'react'
import Link from 'next/link'
import { PrevButton, NextButton, DotButton } from './EmblaCarouselButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import ThemeContext from '../contexts/blurContext'
import AOS from 'aos'
import 'aos/dist/aos.css'
import colorContext from '../contexts/colorContext'

export default function EmblaCarousel({
  call,
  titles,
  slides,
  options = { loop: true, skipSnaps: false },
}) {
  const link = [
    'https://www.facebook.com/fice.festival/',
    'https://www.instagram.com/fice.festival/',
    'https://open.spotify.com/show/6KpOwOE14nbsG5SvwHrCnj',
    'https://twitter.com/fice_cine',
  ]

  const { color, setColor } = useContext(colorContext)

  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  // const { dark, toggleDark } = useContext(ThemeContext)

  const autoplay = useRef(
    Autoplay(
      { delay: 4000, stopOnInteraction: true },
      (emblaRoot) => emblaRoot.parentElement
    )
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current])
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    autoplay.current.reset()
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    autoplay.current.reset()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())

    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())

    emblaApi.on('select', onSelect)
  }, [emblaApi, setScrollSnaps, onSelect])
  console.log(call)
  return (
    <>
      <div className="embla relative min-h-screen w-full">
        {call !== null ? (
          <section className="absolute right-4 bottom-16 z-20 mx-4 flex flex-col">
            <h1 className="m-2 text-6xl uppercase" style={{ color: `#7394b9` }}>
              Open call - 2022
            </h1>
            <Link href={call.slug.current}>
              <button className="m-4 rounded-sm border border-teal-600 bg-teal-100 p-2">
                Convocatorias
              </button>
            </Link>
          </section>
        ) : (
          <section className="absolute bottom-16 z-20 mx-4">
            <h1 className="text-6xl">Edición - 2021</h1>
          </section>
        )}
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container relative">
            {slides.map((element, index) => (
              <div className="embla__slide" key={index}>
                <div
                  className="embla__slide__inner relative min-h-screen w-full"
                  // style={{ backgroundImage: `${element.asset.url}` }}
                >
                  <div
                    className="s-light absolute bottom-16 z-20 flex w-full flex-col items-start
                  p-4 pb-4 pt-2 text-left text-5xl  font-semibold uppercase tracking-wider text-white sm:p-8
                  sm:pt-2 md:text-6xl
                  "
                  >
                    {/* <h1>{titles[index].title.en}</h1>
                    <h2 className="s-extralight  pt-0 pb-1 text-lg capitalize tracking-[.20em]">
                      {!!titles[index].state?.en &&
                        titles[index].state.en.replace('-', ' ')}
                    </h2> */}
                  </div>
                  <img
                    className="embla__slide__img min-h-screen"
                    src={element.asset.url}
                    alt={'Fice'}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton
          onClick={scrollPrev}
          enabled={prevBtnEnabled}
          color={color}
        />
        <NextButton
          onClick={scrollNext}
          enabled={nextBtnEnabled}
          color={color}
        />
        <div className="absolute bottom-1 m-4 flex  w-full items-center justify-center">
          <div className="mr-8 flex w-auto justify-center sm:mr-12">
            {scrollSnaps.map((_, index) => (
              <DotButton
                color={color}
                key={index}
                selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
