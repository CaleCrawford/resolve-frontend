import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroArticle from "../components/hero-article";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { fetchAPI } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Article from "../types/article";
import { getStrapiMedia } from "../lib/media";

type Props = {
  articles: Article[];
};

const Index = ({ articles }: Props) => {
  const heroArticle = articles[0];
  const moreArticles = articles.slice(1);
  const imageUrl = getStrapiMedia(heroArticle.image);

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroArticle && (
            <HeroArticle
              title={heroArticle.title}
              coverImage={imageUrl}
              date={heroArticle.publishedAt}
              author={heroArticle.author}
              slug={heroArticle.slug}
              excerpt={heroArticle.excerpt}
            />
          )}
          {moreArticles.length > 0 && <MoreStories articles={moreArticles} />}
        </Container>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Index;

// export const getStaticProps = async () => {
//   const allPosts = getAllPosts([
//     "title",
//     "date",
//     "slug",
//     "author",
//     "coverImage",
//     "excerpt",
//   ]);

//   return {
//     props: { allPosts },
//   };
// };
