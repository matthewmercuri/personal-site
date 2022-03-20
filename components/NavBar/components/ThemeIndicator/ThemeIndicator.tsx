import styles from './ThemeIndicator.module.scss'

type INProps = {
  toggleTheme: () => void
  isDarkTheme: boolean
}

const ThemeIndicator = ({toggleTheme, isDarkTheme}: INProps) => {
  return (
    <div className={styles.themeIndicator} onClick={() => toggleTheme()}>
      <img src={`icons/${isDarkTheme ? "moon" : "sun"}.svg`} alt="visual theme of the web page" />
    </div>
  )
}
  
export default ThemeIndicator
