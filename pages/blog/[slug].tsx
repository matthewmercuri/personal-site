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

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = getPostsFromLocalFolder()
  const post = posts.filter((post) => post.data.slug === context?.params?.slug)[0]

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
  return (
   <>
   </>
  )
}

export default BlogPostPage
