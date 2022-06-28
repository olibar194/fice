import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from './../components/Header'
import ThemeContext from '../contexts/blurContext'
import ColorContext from '../contexts/colorContext'

import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [dark, setDark] = useState(false)
  const toggleDark = (e: boolean) => {
    setTimeout(() => {
      setDark(e)
    }, 300)
  }

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
