import * as fs from 'fs'
import * as path from 'path'
import * as matter from 'gray-matter'
import { grayMatterParsedPostsType } from '../types/post.types'

function getPostsFromLocalFolder(): grayMatterParsedPostsType[] {
  const posts = [] as grayMatterParsedPostsType[]
  const postsFolder = path.join(process.cwd(), 'posts')

  fs.readdirSync(postsFolder).forEach(file => {
    const {data, content} = matter.read(path.join(postsFolder, file))
    posts.push({data, content})
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
