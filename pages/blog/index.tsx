import type { GetStaticProps, NextPage } from 'next'
import getPostsFromLocalFolder from '../../services/getPostsFromLocalFolder'
import { grayMatterParsedPostsType } from '../../types/post.types'
import PostClickable from '../../components/PostClickable'

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = getPostsFromLocalFolder()

  return {
    props: {
      posts
    }
  }
}

type INProps = {
  posts: grayMatterParsedPostsType[]
}

const Blog = ({posts}: INProps) => {
  return (
   <section className='content-container'>
     <h1 className='section-heading'>BLOG POSTS</h1>
     {posts.map((post) => <PostClickable key={post.data.slug} postData={post} />)}
   </section>
  )
}

export default Blog
