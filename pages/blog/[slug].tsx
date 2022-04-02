import type { GetStaticPaths, GetStaticProps } from 'next'
import getPostsFromLocalFolder from '../../services/getPostsFromLocalFolder'
import { grayMatterParsedPostsType } from '../../types/post.types'

export const getStaticPaths: GetStaticPaths = async (context) => {
  const posts = getPostsFromLocalFolder()
  const paths = posts.map((post) => ({
    params: {
      slug: post.data.slug
    }
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const posts = getPostsFromLocalFolder()
  const post = posts.filter((post) => post.data.slug === slug)[0]

  return {
    props: {
      post
    }
  }
}

type INProps = {
  post: grayMatterParsedPostsType
}

const BlogPostPage = ({ post }: INProps) => {
  console.log(post)
  return (
   <>
   </>
  )
}

export default BlogPostPage
