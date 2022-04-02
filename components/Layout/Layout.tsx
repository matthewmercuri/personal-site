import NavBar from '../NavBar'
import Footer from '../Footer'
import useThemeToggle from './hooks/useThemeToggle'
import styles from './Layout.module.scss'
import Head from 'next/head'

type INProps = {
  children?: JSX.Element
}


// TODO: use a hook that accesses local storage to default
// to user selection for theme choice
const Layout = ({children}: INProps) => {
  const [isDarkTheme, toggleTheme] = useThemeToggle(false)

  return (
    <>
      <Head>
        <title>matthewmercuri</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.navContainer}>
        <NavBar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      </div>
      <main className={styles.main}>{children}</main>
      <Footer isDarkTheme={isDarkTheme} />
    </>
  )
}

export default Layout
