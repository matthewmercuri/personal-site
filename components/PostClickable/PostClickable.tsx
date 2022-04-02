import { grayMatterParsedPostsType } from '../../types/post.types'
import styles from './PostClickable.module.scss'

type INProps = {
  postData: grayMatterParsedPostsType
}

const PostClickable = ({postData}: INProps): JSX.Element => {
  return (
    <>
      <h3>{postData.data.title}</h3>
      <div>Test</div>
    </>
  )
}

export default PostClickable
