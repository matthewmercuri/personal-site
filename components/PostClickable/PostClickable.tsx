import Link from 'next/link'
import { grayMatterParsedPostsType } from '../../types/post.types'
import styles from './PostClickable.module.scss'

type INProps = {
  postData: grayMatterParsedPostsType
}

const PostClickable = ({postData}: INProps): JSX.Element => {
  return (
    <div className={styles.postClickable}>
      <Link href={`/blog/${postData.data.slug}`}>
        <h3>{postData.data.title}</h3>
      </Link>
    </div>
  )
}

export default PostClickable
