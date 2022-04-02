import styles from './ThemeIndicator.module.scss'

type INProps = {
  toggleTheme: () => void
  isDarkTheme: boolean
}

const ThemeIndicator = ({toggleTheme, isDarkTheme}: INProps) => {
  return (
    <div className={styles.themeIndicator} onClick={() => toggleTheme()}>
      {isDarkTheme ? (
        <img src='/icons/moon.svg' alt='visual theme of the web page' />
      ) : (
        <img src='/icons/sun.svg' alt='visual theme of the web page' />
      )}
    </div>
  )
}
  
export default ThemeIndicator
