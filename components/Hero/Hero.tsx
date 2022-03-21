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
    </div>
  )
}

export default Hero
