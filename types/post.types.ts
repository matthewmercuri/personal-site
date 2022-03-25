export type PostType = {
  title: string,
  slug: string,
  date: string,
  content: string,
  author?: string,
  tags?: string[]
}

export type grayMatterParsedType = {
  content: string,
  data: {}
}
