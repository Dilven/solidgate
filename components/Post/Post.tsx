import React from "react";
import styles from "./Post.module.scss";
import Link from "next/link";
import { PostModel } from "@/models/post";
import { Section } from "../Section/Section";
import { paths } from "@/config/paths";

interface Props {
  readonly post: PostModel;
}

export const Post = ({ post }: Props) => (
  <Section
    label={`Czytaj więcej o - ${post.frontmatter.title}`}
    className={styles.post}
  >
    {/* <Image src={post.frontmatter.cover_image} alt='' /> */}
    <span>
      Posted on{" "}
      <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
    </span>
    <h3>{post.frontmatter.title}</h3>
    <p>{post.frontmatter.excerpt}</p>
    <Link href={`${paths.blog}/${post.slug}`} passHref>
      <a className={styles.readButton}>Read More</a>
    </Link>
  </Section>
);
