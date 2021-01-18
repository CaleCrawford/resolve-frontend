import ArticlePreview from "./article-preview";
import Article from "../types/article";
import { getStrapiMedia } from "../lib/media";

type Props = {
  articles: Article[];
};

function getImageUrl(image: string) {
  return getStrapiMedia(image);
}

const MoreStories = ({ articles }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Stories
      </h2>
      <div className="grid grid-cols-1 row-gap-20 mb-32 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 md:row-gap-32">
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
