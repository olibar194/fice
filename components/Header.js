import Link from 'next/link'
import Image from 'next/image'
import { Slant as Hamburger } from 'hamburger-react'
import { useState, useEffect, useContext } from 'react'
import { motion, useViewportScroll } from 'framer-motion'
import ThemeContext from '../contexts/blurContext'
import useScrollBlock from '../hooks/useScrollBlock'
import colorContext from '../contexts/colorContext'

export default function Header({ ...props }) {
  const links = [
    'https://www.facebook.com/fice.festival/',
    'https://www.instagram.com/fice.festival/',
    'https://open.spotify.com/show/6KpOwOE14nbsG5SvwHrCnj',
    'https://twitter.com/fice_cine',
  ]

  const [blockScroll, allowScroll] = useScrollBlock()

  /** this hook gets the scroll y-axis **/
  const { scrollY } = useViewportScroll()
  /** this hook manages state **/
  const [hidden, setHidden] = useState(false)

  /** this onUpdate function will be called in the `scrollY.onChange` callback **/
  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false)
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true)
    }
  }

  /** update the onChange callback to call for `update()` **/
  useEffect(() => {
    return scrollY.onChange(() => update())
  })

  /** add this const **/
  const variants = {
    /** this is the "visible" key and it's correlating styles **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: { opacity: 0, y: -25 },
  }

  const { dark, toggleDark } = useContext(ThemeContext)
  const { color, setColor } = useContext(colorContext)

  const handleOnClick = (e) => {
    toggleDark(e)
  }

  const [docType, setdocType] = useState('')

  // useEffect(() => {
  //   !!props && setdocType(props.data.data?.docType)
  //   !!props && setColor(props.data.data?.pageData.color_p)
  // }, [props])

  useEffect(() => {
    // let node =
    //   document.getElementsByClassName('hamburger-react')[0].childNodes[1]
    // node.classList.add('w')
    // console.log(props)
  }, [])

  const handleSubMenu = (e) => {
    e.stopPropagation()
    shown2 === true ? setShown2(false) : setShown2(true)
  }

  const handleShown = (bool) => {
    if (bool === true) {
      blockScroll()
      let node =
        document.getElementsByClassName('hamburger-react')[0].childNodes[1]
      node.classList.remove('w')
    } else {
      allowScroll()
      let node =
        document.getElementsByClassName('hamburger-react')[0].childNodes[1]
      node.classList.add('w')
    }

    setShown(bool)
    handleOnClick(bool)
  }
  const [shown, setShown] = useState(false)

  const [shown2, setShown2] = useState(false)

  const showMenu = {
    enter: {
      opacity: 1,
      y: 0,
      display: 'flex',
      innerHeight: '100vh',
    },
    exit: {
      y: -4,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
      transitionEnd: {
        display: 'none',
      },
      innerHeight: '80vh',
    },
  }

  const showMenu2 = {
    enter: {
      opacity: 1,
      y: 0,
      display: 'flex',
    },
    exit: {
      y: -5,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
      transitionEnd: {
        display: 'none',
      },
    },
  }

  return (
    <motion.nav
      variants={variants}
      /** it's right here that we match our boolean state with these variant keys **/
      animate={hidden ? 'hidden' : 'visible'}
      /** I'm also going to add a custom easing curve and duration for the animation **/
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6, ease: 'easeOut' }}
      /** basic nav styles **/
      style={shown ? { height: '99.9vh' } : { height: '0.1vh' }}
      className={`fixed z-20 flex  w-full justify-between `}
    >
      <div className={`mx-3 h-max`}>
        <div className="m-1 w-40 cursor-pointer p-1	sm:w-60">
          <div className=" flex cursor-pointer items-center text-center text-gray-700">
            <h1 className="flex w-full justify-center">
              <a href={'/'} aria-label="Fice logo">
                {' '}
                <img
                  // style={{ width: ' 250px' }}

                  src={
                    !!props
                      ? props.data.data?.globalSettings.logo.asset.url
                      : '/images/fice2.png'
                  }
                  // src={'/images/fice2.png'}
                  alt="Fice"
                  className="w-full transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                />
              </a>
            </h1>
          </div>
        </div>
      </div>
      <div className={`m-3 flex h-max items-center justify-center  sm:m-4   `}>
        <div className=" flex items-center sm:mt-2">
          <span className="mt-4 inline-flex justify-center space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              target={'_blank'}
              href={links[0]}
              className="text-black hover:text-white"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className=" h-6 w-6 transition-all"
                fill={color}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

            <a
              target={'_blank'}
              href={links[1]}
              className="text-black hover:text-white"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className=" h-6 w-6 transition-all"
                fill={color}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

            <a
              target={'_blank'}
              href={links[2]}
              className="text-black hover:text-white"
            >
              <span className="sr-only">Spotify</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="negro"
                style={{ fill: `${color}` }}
                fill={color}
                viewBox="-33.4974 -22.829 290.3108 334.974"
              >
                <path
                  className="negro"
                  d="M177.707 98.987c-35.992-21.375-95.36-23.34-129.719-12.912-5.519 1.674-11.353-1.44-13.024-6.958-1.672-5.521 1.439-11.352 6.96-13.029 39.443-11.972 105.008-9.66 146.443 14.936 4.964 2.947 6.59 9.356 3.649 14.31-2.944 4.963-9.359 6.6-14.31 3.653m-1.178 31.658c-2.525 4.098-7.883 5.383-11.975 2.867-30.005-18.444-75.762-23.788-111.262-13.012-4.603 1.39-9.466-1.204-10.864-5.8a8.717 8.717 0 015.805-10.856c40.553-12.307 90.968-6.347 125.432 14.833 4.092 2.52 5.38 7.88 2.864 11.968m-13.663 30.404a6.954 6.954 0 01-9.569 2.316c-26.22-16.025-59.223-19.644-98.09-10.766a6.955 6.955 0 01-8.331-5.232 6.95 6.95 0 015.233-8.334c42.533-9.722 79.017-5.538 108.448 12.446a6.96 6.96 0 012.31 9.57M111.656 0C49.992 0 0 49.99 0 111.656c0 61.672 49.992 111.66 111.657 111.66 61.668 0 111.659-49.988 111.659-111.66C223.316 49.991 173.326 0 111.657 0"
                  fill={color}
                />
              </svg>
            </a>
            <a
              target={'_blank'}
              href={links[3]}
              className="text-black hover:text-white "
            >
              <span className="sr-only ">Twitter</span>
              <svg
                className=" twit h-6 w-6 transition-all"
                fill={color}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
          </span>
        </div>
        <motion.section
          className=" m-3 mb-0 sm:m-8 sm:mx-4"
          onClick={() => {
            shown === true ? handleShown(false) : handleShown(true)
          }}
        >
          <Hamburger
            color={color}
            label="Show menu"
            toggled={shown}
            toggle={setShown}
          />

          <motion.ul
            variants={showMenu}
            initial="exit"
            animate={shown ? 'enter' : 'exit'}
            className=" absolute left-0 -z-10 h-full w-full flex-col bg-cover  p-8 pt-32 text-2xl  sm:pl-16 sm:text-3xl"
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <Link href="/">
              <motion.li
                whileHover={{
                  x: 4,
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className={`z-20 cursor-pointer p-1 font-light uppercase italic `}
                style={{ color: `${color}` }}
              >
                home
              </motion.li>
            </Link>

            {/* <motion.li
            whileHover={{
              x: 4,
            }}
            transition={{ duration: 0.72, ease: 'easeOut' }}
            className={
              shown2
                ? `z-20 cursor-pointer p-1 font-semibold uppercase italic `
                : 'z-20 cursor-pointer p-1 font-light uppercase italic '
            }
            onHoverStart={() => setShown2(true)}
            onClick={(e) => {
              handleSubMenu(e)
            }}
          >
            projects
          </motion.li> */}

            {/* submenu */}

            {/* <motion.ul
            variants={showMenu2}
            initial="exit"
            animate={shown2 ? 'enter' : 'exit'}
            className={`border-blue-strong relative ml-2 flex h-auto w-full flex-col items-start justify-center border border-l border-t-0 border-r-0 border-b-0 p-2 pl-4 text-2xl  sm:text-3xl `}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <Link href="/feature-films">
              <motion.li
                whileHover={{
                  x: 4,
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="z-20 cursor-pointer p-1 font-light capitalize italic "
              >
                Feature films
              </motion.li>
            </Link>

            <Link href="/tv-series">
              <motion.li
                whileHover={{
                  x: 4,
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="z-20 cursor-pointer p-1 font-light capitalize italic "
              >
                TV series
              </motion.li>
            </Link>

            <Link href="/short-films">
              <motion.li
                whileHover={{
                  x: 4,
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="z-20 cursor-pointer p-1 font-light capitalize italic "
              >
                short films
              </motion.li>
            </Link>
            <Link href="/documentary">
              <motion.li
                whileHover={{
                  x: 4,
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="z-20 cursor-pointer p-1 font-light capitalize italic "
              >
                documentary
              </motion.li>
            </Link>

            <motion.li
              whileHover={{
                x: 4,
              }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="z-20 cursor-pointer p-1 font-light capitalize italic "
            >
              <a target={'_blank'} href="https://80daysfilms.com">
                commercials
              </a>
            </motion.li>
          </motion.ul> */}

            {/* end submenu */}
            <Link href="/2022/open-call">
              <motion.li
                whileHover={{
                  x: 4,
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="z-20 cursor-pointer p-1 font-light uppercase italic "
                style={{ color: `${color}` }}
              >
                open call
              </motion.li>
            </Link>
            <Link href="/about">
              <motion.li
                whileHover={{
                  x: 4,
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="z-20 cursor-pointer p-1 font-light uppercase italic "
                style={{ color: `${color}` }}
              >
                about
              </motion.li>
            </Link>
          </motion.ul>
        </motion.section>
      </div>
    </motion.nav>
  )
}
