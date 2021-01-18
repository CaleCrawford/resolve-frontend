import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import PreviewImage from "./preview-image";
import Link from "next/link";
import Author from "../types/author";
import { getStrapiMedia } from "../lib/media";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

function getImageUrl(image: string) {
  return getStrapiMedia(image);
}

const ArticlePreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div className="mb-20">
      <div className="mb-5">
        <PreviewImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link as={`/articles/${slug}`} href="/articles/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <DateFormatter dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      <Avatar name={author.name} picture={getImageUrl(author.picture)} />
    </div>
  );
};

export default ArticlePreview;
