import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
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

const HeroArticle = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={707}
          width={1200}
        />
      </div>
      <div className="mb-20 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            {/* <DateFormatter dateString={date} /> */}
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          <Avatar
            name={author.name}
            picture={
              <section>
                <div className="mb-8 md:mb-16">
                  <CoverImage
                    title={title}
                    src={author.image}
                    slug={slug}
                    height={620}
                    width={1240}
                  />
                </div>
                <div className="mb-20 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 md:mb-28">
                  <div>
                    <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
                      <Link as={`/posts/${slug}`} href="/posts/[slug]">
                        <a className="hover:underline">{title}</a>
                      </Link>
                    </h3>
                    <div className="mb-4 text-lg md:mb-0">
                      <DateFormatter dateString={date} />
                    </div>
                  </div>
                  <div>
                    <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
                    <Avatar
                      name={author.name}
                      picture={getImageUrl(author.picture)}
                    />
                  </div>
                </div>
              </section>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default HeroArticle;
