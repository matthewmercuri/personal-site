import styles from './Hero.module.scss'

type INProps = {
}

const Hero = ({}: INProps) => {
  return (
    <div className={`content-container ${styles.hero}`}>
      <div className={styles.heroAnimation}>
        <img src='/assets/atomcoin.svg' alt='atom coin icon' />
        <div className={styles.heroAnimationShadow} />
      </div>
      <div className={styles.heroContent}>
        <h1>Matthew Mercuri</h1>
        <p>QUANTITATIVE FINANCE</p>
        <p>DATA SCIENCE</p>
        <p>FULL STACK DEVELOPMENT</p>
      </div>
    </div>
  )
}

export default Hero
