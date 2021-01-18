import Author from './author'
import ImageType from './image'

type ArticleType = {
  slug: string
  title: string
  publishedAt: string
  coverImage: string
  image: ImageType
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default ArticleType
