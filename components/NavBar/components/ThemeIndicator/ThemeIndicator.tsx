import styles from './ThemeIndicator.module.scss'

type INProps = {
  themeDispatch: React.Dispatch<any>
  isDarkTheme: boolean
}

const ThemeIndicator = ({themeDispatch, isDarkTheme}: INProps) => {
  function toggleTheme() {
    isDarkTheme ? themeDispatch({type: "LIGHTMODE"}) : themeDispatch({type: "DARKMODE"})
  }

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
