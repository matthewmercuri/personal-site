export type PostMetaDataType = {
  title: string,
  date: string,
  content: string,
  slug?: string,
  author?: string,
  tags?: string[]
}

export type grayMatterParsedPostsType = {
  content: string,
  data: PostMetaDataType
}
