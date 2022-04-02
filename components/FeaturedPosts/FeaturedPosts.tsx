import { grayMatterParsedPostsType } from '../../types/post.types'
import styles from './FeaturedPosts.module.scss'

type INProps = {
  posts: grayMatterParsedPostsType[]
}

const FeaturedPosts = ({ posts }: INProps) => {
  console.log(posts)
  return (
    <section className={`content-container ${styles.featuredPosts}`}>
      <h2>FEATURED</h2>
    </section>
  )
}

export default FeaturedPosts
