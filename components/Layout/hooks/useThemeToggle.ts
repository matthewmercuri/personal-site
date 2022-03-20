import { useState } from "react"

function setDarkTheme() {
  document.documentElement.setAttribute('data-theme', 'dark')
}

function setLightTheme() {
  document.documentElement.setAttribute('data-theme', 'light')

}

export default function useThemeToggle(isInitialThemeDark = false): [boolean, () => void] {
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

  return [isDarkTheme, toggleTheme]
}
