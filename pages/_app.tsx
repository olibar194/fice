import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from './../components/Header'
import ThemeContext from '../contexts/blurContext'
import ColorContext from '../contexts/colorContext'

import { useState, useEffect } from 'react'
// import 'tw-elements'

function MyApp({ Component, pageProps }: AppProps) {
  const [dark, setDark] = useState(false)
  const toggleDark = (e: boolean) => {
    setTimeout(() => {
      setDark(e)
    }, 300)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      var aScript = document.createElement('script')
      aScript.type = 'text/javascript'
      aScript.src = './TW-ELEMENTS-PATH/dist/js/index.min.js'

      document.head.appendChild(aScript)
      aScript.onload = () => {
        console.log('load')
      }
    }
  }, [])

  const [color, setColor2] = useState('#222d29')

  const setColor = (e: string) => {
    // setTimeout(() => {
    setColor2(e)
    // }, 300)
  }

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      <ColorContext.Provider
        value={{
          color,
          setColor,
        }}
      >
        <Header data={pageProps}></Header>
        <div
          className={
            dark ? `blur transition-all` : 'overflow-x-hidden transition-all'
          }
        >
          <Component {...pageProps} />
        </div>
      </ColorContext.Provider>
    </ThemeContext.Provider>
  )
}

export default MyApp
