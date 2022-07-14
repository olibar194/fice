import React from 'react'

interface IThemeContext {
  color: any
  setColor: (e: string, index: string) => void
}

const defaultState = {
  color: { p: '#222d29', s: '#222d29', t: '#222d29', d: '#222d29' },
  setColor: (e: string, index: string) => {},
}

const colorContext = React.createContext<IThemeContext>(defaultState)

export default colorContext
