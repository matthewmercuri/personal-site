import { grayMatterParsedPostsType } from '../../types/post.types'
import styles from './FeaturedPosts.module.scss'

type INProps = {
  posts: grayMatterParsedPostsType[]
}

const FeaturedPosts = ({ posts }: INProps) => {
  return (
    <section className='content-container'>
    </section>
  )
}

export default FeaturedPosts
