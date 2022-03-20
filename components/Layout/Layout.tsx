import NavBar from '../NavBar'
import useThemeToggle from './hooks/useThemeToggle'
import styles from './Layout.module.scss'

type INProps = {
  children?: JSX.Element
}

const Layout = ({children}: INProps) => {
  const [isDarkTheme, toggleTheme] = useThemeToggle(false)

  return (
    <>
      <NavBar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Layout
