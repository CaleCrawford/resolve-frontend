import cn from "classnames";
import Link from "next/link";
import styled from 'styled-components'
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

const ImageContainer = styled.a.attrs({
  className: "relative block"
})`
  height: 44rem;
`

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      loader={myLoader}
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm", {
        "hover:shadow-md transition-shadow duration-200": slug,
      })}
      layout='fill'
      objectFit='cover'
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/articles/${slug}`} href="/articles/[slug]">
          <ImageContainer aria-label={title}>{image}</ImageContainer>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
