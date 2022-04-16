import React, { useReducer, createContext } from "react"

export type ThemeContextType = {
  isDarkTheme: boolean,
  dispatch: React.Dispatch<any>,
}

export const ThemeContext = createContext({} as ThemeContextType)

const initialState = false

const themeReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LIGHTMODE":
      document.documentElement.setAttribute('data-theme', 'light')
      return false
    case "DARKMODE":
      document.documentElement.setAttribute('data-theme', 'dark')
      return true
    default:
      return state
  }
}

type INProps = {
  children: JSX.Element[] | JSX.Element | null
}

export function ThemeProvider({ children }: INProps) {
  const [state, dispatch] = useReducer(themeReducer, initialState)

  return (
    <ThemeContext.Provider value={{ isDarkTheme: state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}
