import React from 'react'

interface IThemeContext {
  dark: boolean
  toggleDark: (e: boolean) => void
}

const defaultState = {
  dark: false,
  toggleDark: (e: boolean) => {},
}

const ThemeContext = React.createContext<IThemeContext>(defaultState)

export default ThemeContext
