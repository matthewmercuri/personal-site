import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={`content-container ${styles.hero}`}>
      <div className={styles.heroAccent}>
        <div className={styles.heroAccentAnimation}>
          <img src='/assets/atomcoin.svg' alt='atom coin icon' />
          <div />
        </div>
      </div>
      <div className={styles.heroContent}>
        <h1>Matthew Mercuri</h1>
        <p>QUANTITATIVE FINANCE</p>
        <p>DATA SCIENCE</p>
        <p>FULL STACK DEVELOPMENT</p>
      </div>
    </section>
  )
}

export default Hero
