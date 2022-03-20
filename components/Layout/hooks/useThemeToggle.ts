import { useState } from "react"

function setDarkTheme() {
  document.documentElement.setAttribute('data-theme', 'dark')
}

function setLightTheme() {
  document.documentElement.setAttribute('data-theme', 'light')

}

export default function useThemeToggle(isInitialThemeDark = false) {
  const [isDarkTheme, setIsDarkTheme] = useState(isInitialThemeDark)

  function toggleTheme() {
    if (isDarkTheme) {
      setLightTheme()
      setIsDarkTheme(false)
    } else {
      setDarkTheme()
      setIsDarkTheme(true)
    }
  }

  return toggleTheme
}
