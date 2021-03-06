import ArticlePreview from "./article-preview";
import Article from "../types/article";
import ImageType from "../types/image";
import { getStrapiMedia } from "../lib/media";

type Props = {
  articles: Article[];
};

function getImageUrl(image: ImageType) {
  return getStrapiMedia({ media: image });
}

const MoreStories = ({ articles }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Stories
      </h2>
      <div className="grid grid-cols-1 gap-x-32 gap-y-0 mb-32 md:grid-cols-2 md:gap-x-32 lg:gap-x-32 md:gap-x-32">
        {articles.map((article) => (
          <ArticlePreview
            key={article.slug}
            title={article.title}
            coverImage={getImageUrl(article.image)}
            date={article.publishedAt}
            author={article.author}
            slug={article.slug}
            excerpt={article.excerpt}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
