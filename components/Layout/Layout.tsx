import NavBar from '../NavBar'
import Footer from '../Footer'
import styles from './Layout.module.scss'
import Head from 'next/head'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../services/theme.context'

type INProps = {
  children?: JSX.Element
}

// TODO: use a hook that accesses local storage to default
// to user selection for theme choice
const Layout = ({children}: INProps) => {
  const { isDarkTheme, dispatch } = useContext(ThemeContext)

  useEffect(() => {
    if (isDarkTheme === true) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [isDarkTheme])

  return (
    <>
      <Head>
        <title>matthewmercuri</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta property='og:site_name' content='Matthew Mercuri' />
        <meta property='og:title' content='Matthew Mercuri - Quantitative Finance, Data Science, and Full Stack Development' />
        <meta property='og:description' content='My work involving finance, data science, mathematics, and development' />
        <meta name='description' content='My work involving finance, data science, mathematics, and development' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://www.matthewmercuri.com/share/ogshareimage.png' />
        <meta property='og:url' content='https://www.matthewmercuri.com' />
      </Head>
      <div className={styles.navContainer}>
        <NavBar isDarkTheme={isDarkTheme} themeDispatch={dispatch} />
      </div>
      <main className={styles.main}>{children}</main>
      <Footer isDarkTheme={isDarkTheme} />
    </>
  )
}

export default Layout
