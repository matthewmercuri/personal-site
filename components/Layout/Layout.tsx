import NavBar from '../NavBar'
import useThemeToggle from './hooks/useThemeToggle'

type INProps = {
  children?: JSX.Element
}

const Layout = ({children}: INProps) => {
  const toggleTheme = useThemeToggle(false)

  return (
    <>
      <NavBar />
      <button onClick={() => toggleTheme()}>CLICK ME</button>
      <main>{children}</main>
    </>
  )
}

export default Layout
