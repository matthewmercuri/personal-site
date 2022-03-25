import type { GetStaticProps, NextPage } from 'next'
import Hero from '../components/Hero'
import FeaturedPosts from '../components/FeaturedPosts'
import getPostsFromLocalFolder from '../services/getPostsFromLocalFolder'
import { grayMatterParsedPostsType } from '../types/post.types'

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

const Home: NextPage<INProps> = ({posts}: INProps) => {
  return (
   <>
    <Hero />
    <FeaturedPosts posts={posts} />
   </>
  )
}

export default Home
