import styles from './Footer.module.scss'

type INProps = {
  isDarkTheme: boolean
}

const Footer = ({isDarkTheme}: INProps) => {
  return (
    <div className={styles.footer}>
      <div>
        {!isDarkTheme ? (
          <>
            <a href="https://www.linkedin.com/in/matthew-mercuri">
              <img src='/icons/gh_dark.svg' alt='link to my github profile' />
            </a>
            <a href="https://github.com/matthewmercuri" >
              <img src='/icons/linkedin_dark.svg' alt='link to my linkedin' />
            </a>
          </>
        ) : (
          <>
            <a href="https://www.linkedin.com/in/matthew-mercuri">
              <img src='/icons/gh_light.svg' alt='link to my github profile' />
            </a>
            <a href="https://github.com/matthewmercuri" >
              <img src='/icons/linkedin_light.svg' alt='link to my linkedin' />
            </a>
          </>
        )}
      </div>
    </div>
  )
}

export default Footer
