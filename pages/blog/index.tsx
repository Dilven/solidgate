import type { GetStaticPropsResult, InferGetStaticPropsType } from "next";
import React from "react";
import { Layout } from "@/components/Layout/Layout";
import banner from "../../public/main-banner.jpg";
import { pageTitles, shortPageTitle } from "@/helpers/metadata";
import { Post } from "@/components/Post/Post";
import { hygraphService } from "@/services/hygraph";
import { PostModel } from "@/models/post";

export type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Page = ({ posts }: Props) => {
  return (
    <Layout
      title={pageTitles.blog}
      banner={banner}
      shortTitle={shortPageTitle.blog}
    >
      <div>
        <div className="posts">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Page;

export const getStaticProps = async () => {
  const posts = await hygraphService.getPosts();
  const result = {
    props: {
      posts,
    },
  } satisfies GetStaticPropsResult<{ posts: PostModel[] }>;
  return result;
};
