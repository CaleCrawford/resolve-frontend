import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import ArticleTitle from "./article-title";
import Author from "../types/author";
import ImageType from "../types/image";
import { getStrapiMedia } from "../lib/media";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

function getImageUrl(image: ImageType) {
  return getStrapiMedia({ media: image });
}

const ArticleHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <ArticleTitle>{title}</ArticleTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={getImageUrl(author.picture)} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block mb-6 md:hidden">
          <Avatar name={author.name} picture={author.picture.url} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default ArticleHeader;