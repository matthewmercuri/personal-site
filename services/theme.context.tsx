import React, { useReducer, createContext, useEffect } from "react"

export type ThemeContextType = {
  isDarkTheme: boolean,
  dispatch: React.Dispatch<any>,
}

export const ThemeContext = createContext({} as ThemeContextType)

const initialState = null

const themeReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LIGHTMODE":
      if (typeof window !== 'undefined') {localStorage.setItem('darkMode', 'false')}
      return false
    case "DARKMODE":
      if (typeof window !== 'undefined') {localStorage.setItem('darkMode', 'true')}
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

  useEffect(() => {
    localStorage.getItem('darkMode') === 'false' ? (
      dispatch({type: 'LIGHTMODE'})
    ) : (
      dispatch({type: 'DARKMODE'})
    )
  }, [])

  return (
    <ThemeContext.Provider value={{ isDarkTheme: state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}
