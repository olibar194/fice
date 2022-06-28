import React from 'react'

interface IThemeContext {
  color: string
  setColor: (e: string) => void
}

const defaultState = {
  color: '#222d29',
  setColor: (e: string) => {},
}

const colorContext = React.createContext<IThemeContext>(defaultState)

export default colorContext
