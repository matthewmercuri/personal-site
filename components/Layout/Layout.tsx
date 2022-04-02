import NavBar from '../NavBar'
import useThemeToggle from './hooks/useThemeToggle'
import styles from './Layout.module.scss'

type INProps = {
  children?: JSX.Element
}


// TODO: use a hook that accesses local storage to default
// to user selection for theme choice
const Layout = ({children}: INProps) => {
  const [isDarkTheme, toggleTheme] = useThemeToggle(false)

  return (
    <>
      <div className={styles.navContainer}>
        <NavBar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      </div>
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Layout
