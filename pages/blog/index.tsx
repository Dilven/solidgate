import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import React from "react";
import { Layout } from "@/components/Layout/Layout";
import banner from "../../public/main-banner.jpg";
import { pageTitles } from "@/helpers/metadata";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/components/Post/Post";

export const sortByDate = (a: Frontmatter, b: Frontmatter) => {
  return (
    new Date(b.frontmatter.date).getTime() -
    new Date(a.frontmatter.date).getTime()
  );
};

type Frontmatter = { frontmatter: { date: number } };

export type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Page = ({ posts }: Props) => {
  return (
    <Layout title={pageTitles.blog} banner={banner}>
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
  const files = fs.readdirSync(path.join("posts"));
  const posts: any[] = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
};
