import Link from 'next/link'
import { grayMatterParsedPostsType } from '../../types/post.types'
import PostClickable from '../PostClickable'
import styles from './FeaturedPosts.module.scss'

type INProps = {
  posts: grayMatterParsedPostsType[]
}

const FeaturedPosts = ({ posts }: INProps) => {
  return (
    <section className={`content-container ${styles.featuredPosts}`}>
      <h2 className='section-heading'>FEATURED</h2>
      {posts.slice(0, 3).map(postData => {
        return <PostClickable key={postData.data.slug} postData={postData} />
      })}
      <Link href={'/blog'}>
        <div className={styles.featuredPostsLink}>
          <span>all posts</span>
          <img src={'/icons/arrow_right_dark.svg'} alt='all blog post link icon, click here to view all posts' />
          <div />
        </div>
      </Link>
    </section>
  )
}

export default FeaturedPosts
