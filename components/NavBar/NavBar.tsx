import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navBarContent}>
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
