import { getStrapiURL } from "./api";
import ImageType from "./../types/image";

type Props = {
  media: ImageType;
};

export function getStrapiMedia(data: Props): string {
  const imageUrl = data.media.url.startsWith("/")
    ? getStrapiURL(data.media.url)
    : data.media.url;
  return imageUrl;
}
