import React from "react";
import { Layout } from "@/components/Layout/Layout";
import banner from "../../public/main-banner.jpg";
import { Section } from "@/components/Section/Section";
import * as marked from "marked";
import Link from "next/link";
import { paths } from "@/config/paths";
import styles from "./[slug].module.scss";
import { hygraphService } from "@/services/hygraph";
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from "next";
import { PostModel } from "@/models/post";
import { displayDate } from "@/helpers/date";

export type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Page = ({ post: { title, content, publishedAt } }: Props) => {
  return (
    <Layout title={title} banner={banner}>
      <Section label={`Blog post - ${title}`} className={styles.post}>
        <>
          <Link href={paths.blog} className={styles.back}>
            Cofnij
          </Link>
          <div className="card card-page">
            <div className="post-date">
              Opoublikowano: {displayDate(publishedAt)}
            </div>
            <div className="post-body">
              <div
                dangerouslySetInnerHTML={{ __html: marked.marked(content) }}
              ></div>
            </div>
          </div>
        </>
      </Section>
    </Layout>
  );
};

export default Page;

interface Context {
  params: { readonly slug: string };
}

export const getStaticProps = async ({ params: { slug } }: Context) => {
  const post = await hygraphService.getPost(slug);
  if (!post) return { notFound: true };
  const result = {
    props: {
      post,
    },
  } satisfies GetStaticPropsResult<{ post: PostModel }>;
  return result;
};

export const getStaticPaths = async () => {
  const posts = await hygraphService.getPosts();

  const paths = posts.map(({ slug }) => ({
    params: {
      slug,
    },
  }));

  const result = {
    paths,
    fallback: "blocking",
  } satisfies GetStaticPathsResult<{ slug: string }>;
  return result;
};
