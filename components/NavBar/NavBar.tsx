import Link from 'next/link'
import ThemeIndicator from './components/ThemeIndicator'
import { toggleNavOpen } from './hooks'
import styles from './NavBar.module.scss'

type INProps = {
  toggleTheme: () => void
  isDarkTheme: boolean
}

const NavBar = ({toggleTheme, isDarkTheme}: INProps) => {
  const [isNavOpen, setIsNavOpen] = toggleNavOpen(false)

  return (
    <nav className={isNavOpen ? `${styles.navBar} ${styles.navBarOpen}` : styles.navBar}>
      <div className={styles.navBarContent}>
        {/* <span>matthewmercuri</span> */}
        <ul>
          <li><Link href='/'><a>home</a></Link></li>
          <li><Link href='#'><a>blog</a></Link></li>
          <li><Link href='#'><a>resources</a></Link></li>
          <li><Link href='#'><a>contact</a></Link></li>
        </ul>
        <ThemeIndicator toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <div
          className={isNavOpen ? `${styles.navBarContentHamburger} ${styles.navBarContentHamburgerOpen}` : styles.navBarContentHamburger}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className={isNavOpen ? `${styles.navBarMobileContent} ${styles.navBarMobileContentOpen}` : styles.navBarMobileContent}>
        <ul>
          <li><Link href='/'><a>home</a></Link></li>
          <li><Link href='#'><a>blog</a></Link></li>
          <li><Link href='#'><a>resources</a></Link></li>
          <li><Link href='#'><a>contact</a></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
