import React from "react";
import { Layout } from "@/components/Layout/Layout";
import banner from "../../public/main-banner.jpg";
import { pageTitles } from "@/helpers/metadata";
import { Section } from "@/components/Section/Section";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import * as marked from "marked";
import Link from "next/link";
import { paths } from "@/config/paths";
import styles from "./[slug].module.scss";

const Page = ({ frontmatter: { title, date, cover_image }, content }: any) => {
  return (
    <Layout title={title} banner={banner}>
      <Section label={`Blog post - ${title}`} className={styles.post}>
        <>
          <Link href={paths.blog} className={styles.back}>
            Go Back
          </Link>
          <div className="card card-page">
            <div className="post-date">Posted on {date}</div>
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
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
