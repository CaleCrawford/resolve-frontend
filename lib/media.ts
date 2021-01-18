import { getStrapiURL } from "./api";

type Props = {
  url: string
};

export function getStrapiMedia(media: Props): string {
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;
  return imageUrl;
}