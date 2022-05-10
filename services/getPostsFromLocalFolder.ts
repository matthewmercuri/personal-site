import * as fs from 'fs'
import * as path from 'path'
import * as matter from 'gray-matter'
import slugify from 'slugify'
import { grayMatterParsedPostsType } from '../types/post.types'

const isLocalTestPost = (title: string, env: string) => {
  if (env !== "local" && title.toLowerCase().includes("test article")) {
    return true
  }
  return false
}

function getPostsFromLocalFolder(): grayMatterParsedPostsType[] {
  const posts = [] as grayMatterParsedPostsType[]
  const postsFolder = path.join(process.cwd(), 'posts')
  const environment = process.env.ENVIRONMENT || "local"

  fs.readdirSync(postsFolder).forEach(file => {
    const {data, content} = matter.read(path.join(postsFolder, file))
    if (!isLocalTestPost(data.title, environment)) {
      posts.push({data, content} as grayMatterParsedPostsType)
    }
  })

  posts.forEach(({data}) => {
    if (!data.slug) {
      data.slug = slugify(data.title, {lower: true})
    }
  })

  const sortedPosts = posts.sort(({ data: a }, { data: b }) => {
    if (a.date < b.date) {
      return 1
    } else if (a.date > b.date) {
      return -1
    } else {
      return 0
    }
  })

  return sortedPosts
}

export default getPostsFromLocalFolder
