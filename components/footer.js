import colorContext from '../contexts/colorContext'
import { useState, useEffect, useContext } from 'react'

export default function Footer() {
  const { color, setColor } = useContext(colorContext)

  const links = [
    'https://www.facebook.com/fice.festival/',
    'https://www.instagram.com/fice.festival/',
    'https://open.spotify.com/show/6KpOwOE14nbsG5SvwHrCnj',
    'https://twitter.com/fice_cine',
    'https://drive.google.com/file/d/154r23_s4QOnsgEUQ1SZsEwhDby84rvpC/view',
  ]
  const handleRedirect = (index) => {
    window.location.href = links[index]
  }
  return (
    <>
      <footer
        className={` container z-40 mx-auto h-full  max-w-screen-xl py-16 
        `}
      >
        {/* <div className="flex hidden w-full justify-between">
          <div className="m-2 w-1/2 w-full items-center justify-end rounded-xl border-2 border-gray-200 bg-transparent p-4 pl-4 text-3xl uppercase dark:border-gray-800 sm:flex">
            Donar
          </div>
          <div
            id="innerSearch"
            className="m-2 w-full items-center justify-between rounded-xl border-2 border-gray-200 bg-transparent pl-4 text-5xl dark:border-gray-800 sm:flex"
          >
            <div className="flex w-full items-center bg-transparent text-5xl text-gray-600 dark:text-gray-400">
              <input
                id="innerSearch"
                className="w-full rounded-full py-4 pl-4 text-5xl tracking-tight placeholder-gray-600 focus:outline-none dark:bg-transparent dark:placeholder-gray-400 xl:text-base"
                placeholder="Ingresá tu email.."
              />
              reemplazar
              <svg
                className="h-16 w-16 fill-current text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <label
                for="innerSearch"
                className="pointer-events-none absolute opacity-0"
              >
                Search
              </label>
            </div>
          </div>
        </div> */}
        {/* <div
          onClick={() => handleRedirect(4)}
          className="d-din container mx-auto flex max-w-7xl cursor-pointer flex-col items-center px-8 py-8 sm:flex-row"
        >
          <h1 className="text-bold text-xl underline">
            Accedé al PDF con la programación completa!
          </h1>
        </div> */}
        <section className="body-font mx-2 border bg-white text-gray-700 lg:rounded-xl">
          <div className="container mx-auto flex max-w-7xl flex-col items-center px-8 py-8 sm:flex-row">
            <a
              href="#_"
              className="logo select-none text-xl font-black leading-none text-gray-900"
            >
              FICE
              <span className="emerald" style={{ color: `${color.t}` }}>
                .
              </span>
            </a>
            <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l sm:border-gray-200 sm:pl-4">
              © 2022 FICE - Todos los derechos reservados
            </p>
            <span className="mt-4 inline-flex justify-center space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
              <div
                onClick={() => handleRedirect(0)}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill={color.t}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>

              <div
                onClick={() => handleRedirect(1)}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill={color.t}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>

              <div
                onClick={() => handleRedirect(2)}
                className="hover:text-gray-500"
                style={{ color: `${color.t}`, fill: `${color.t}` }}
              >
                <span className="sr-only">Spotify</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="gris"
                  style={{ fill: `${color.t}` }}
                  fill={color.t}
                  viewBox="-33.4974 -22.829 290.3108 334.974"
                >
                  <path
                    className=""
                    d="M177.707 98.987c-35.992-21.375-95.36-23.34-129.719-12.912-5.519 1.674-11.353-1.44-13.024-6.958-1.672-5.521 1.439-11.352 6.96-13.029 39.443-11.972 105.008-9.66 146.443 14.936 4.964 2.947 6.59 9.356 3.649 14.31-2.944 4.963-9.359 6.6-14.31 3.653m-1.178 31.658c-2.525 4.098-7.883 5.383-11.975 2.867-30.005-18.444-75.762-23.788-111.262-13.012-4.603 1.39-9.466-1.204-10.864-5.8a8.717 8.717 0 015.805-10.856c40.553-12.307 90.968-6.347 125.432 14.833 4.092 2.52 5.38 7.88 2.864 11.968m-13.663 30.404a6.954 6.954 0 01-9.569 2.316c-26.22-16.025-59.223-19.644-98.09-10.766a6.955 6.955 0 01-8.331-5.232 6.95 6.95 0 015.233-8.334c42.533-9.722 79.017-5.538 108.448 12.446a6.96 6.96 0 012.31 9.57M111.656 0C49.992 0 0 49.99 0 111.656c0 61.672 49.992 111.66 111.657 111.66 61.668 0 111.659-49.988 111.659-111.66C223.316 49.991 173.326 0 111.657 0"
                    fill={color.t}
                  />
                </svg>
              </div>
              <div
                onClick={() => handleRedirect(3)}
                className="text-gray-400 hover:text-gray-500 "
              >
                <span className="sr-only ">Twitter</span>
                <svg
                  className="twit h-6 w-6"
                  fill={color.t}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </div>
            </span>
          </div>
        </section>
      </footer>
    </>
  )
}
