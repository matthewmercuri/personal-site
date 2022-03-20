import ThemeIndicator from './components/ThemeIndicator'
import styles from './NavBar.module.scss'

type INProps = {
  toggleTheme: () => void
  isDarkTheme: boolean
}

const NavBar = ({toggleTheme, isDarkTheme}: INProps) => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navBarContent}>
        <ThemeIndicator toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <div className={styles.navBarContentHamburger}>
          <div />
          <div />
          <div />
        </div>
      </div>
    </nav>
  )
}
  
export default NavBar
