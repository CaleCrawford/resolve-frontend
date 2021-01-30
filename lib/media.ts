import { getStrapiURL } from "./api";
import ImageType from "./../types/image";

type Props = {
  media: ImageType;
};

export function getStrapiMedia(data: Props): string {
  // const imageUrl = data.media.url.startsWith("/")
  //   ? getStrapiURL(data.media.url)
  //   : data.media.url;
  // return imageUrl;
  console.log(data);
  return "https://res.cloudinary.com/dufwrsfrm/image/upload/v1611974170/photo_1470104240373_bc1812eddc9f_f46157cd51.jpg";
}
