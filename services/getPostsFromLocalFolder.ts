import * as fs from 'fs'
import * as path from 'path'
import * as matter from 'gray-matter'
import { grayMatterParsedType } from '../types/post.types'

function getPostsFromLocalFolder(): grayMatterParsedType[] {
  const posts = [] as grayMatterParsedType[]
  const postsFolder = path.join(process.cwd(), 'posts')

  fs.readdirSync(postsFolder).forEach(file => {
    posts.push(matter.read(path.join(postsFolder, file)))
  })

  return posts
}

export default getPostsFromLocalFolder
