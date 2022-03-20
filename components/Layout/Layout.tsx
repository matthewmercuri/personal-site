import NavBar from '../NavBar'
import useThemeToggle from './hooks/useThemeToggle'

type INProps = {
  children?: JSX.Element
}

const Layout = ({children}: INProps) => {
  const [isDarkTheme, toggleTheme] = useThemeToggle(false)

  return (
    <>
      <NavBar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <main>{children}</main>
    </>
  )
}

export default Layout
