import { micromark } from 'micromark'
import { grayMatterParsedPostsType } from '../../types/post.types'
import styles from './BlogPost.module.scss'


// employs: https://github.com/micromark/micromark

type INProps = {
  post: grayMatterParsedPostsType
}

const BlogPost = ({ post }: INProps): JSX.Element => {
  const content = micromark(post.content)

  return (
    <article className={`content-container ${styles.blogPost}`}>
      <div className={styles.blogPostDate}>{post.data.date}</div>
      <div dangerouslySetInnerHTML={{ __html: content }}/>
    </article>
  )
}

export default BlogPost
