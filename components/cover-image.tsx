import cn from "classnames";
import Link from "next/link";
import Image, { ImageLoader, ImageLoaderProps } from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  height?: number;
  width?: number;
};

const myLoader: ImageLoader = ({ src }: ImageLoaderProps): string => {
  return src;
}

const CoverImage = ({ title, src, slug, height, width }: Props) => {
  const image = (
    <Image
      loader={myLoader}
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm", {
        "hover:shadow-md transition-shadow duration-200": slug,
      })}
      layout="responsive"
      width={width!}
      height={height!}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/articles/${slug}`} href="/articles/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
