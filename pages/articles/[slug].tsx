import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import ArticleBody from "../../components/article-body";
import Header from "../../components/header";
import ArticleHeader from "../../components/article-header";
import Layout from "../../components/layout";
import { fetchAPI } from "../../lib/api";
import ArticleTitle from "../../components/article-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import ArticleType from "../../types/article";
import { getStrapiMedia } from "../../lib/media";

type Props = {
  article: ArticleType;
  moreArticles: ArticleType[];
  preview?: boolean;
};

const Article = ({ article, moreArticles, preview }: Props) => {
  const router = useRouter();
  const imageUrl = getStrapiMedia(article.image);
  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <ArticleTitle>Loading…</ArticleTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {article.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={imageUrl} />
              </Head>
              <ArticleHeader
                title={article.title}
                coverImage={imageUrl}
                date={article.publishedAt}
                author={article.author}
              />
              <ArticleBody content={article.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article: ArticleType) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

type ArticleProps = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: ArticleProps) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  );
  const categories = await fetchAPI("/categories");

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default Article;

// export async function getStaticProps({ params }: Params) {
//   const article = getArticleBySlug(params.slug, [
//     "title",
//     "date",
//     "slug",
//     "author",
//     "content",
//     "ogImage",
//     "coverImage",
//   ]);
//   const content = await markdownToHtml(article.content || "");

//   return {
//     props: {
//       article: {
//         ...article,
//         content,
//       },
//     },
//   };
// }

// export async function getStaticPaths() {
//   const articles = getAllArticles(["slug"]);

//   return {
//     paths: articles.map((articles) => {
//       return {
//         params: {
//           slug: articles.slug,
//         },
//       };
//     }),
//     fallback: false,
//   };
// }
