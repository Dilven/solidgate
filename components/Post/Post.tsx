import React from "react";
import styles from "./Post.module.scss";
import Link from "next/link";
import { PostModel } from "@/models/post";
import { Section } from "../Section/Section";
import { paths } from "@/config/paths";
import { displayDate } from "@/helpers/date";

interface Props {
  readonly post: PostModel;
}

export const Post = ({ post }: Props) => (
  <Section label={`Czytaj więcej o - ${post.title}`} className={styles.post}>
    {/* <Image src={post.frontmatter.cover_image} alt='' /> */}
    <span>
      Posted on{" "}
      <time dateTime={post.publishedAt}>{displayDate(post.publishedAt)}</time>
    </span>
    <h3>{post.title}</h3>
    <p>{post.content.slice(0, 500)}</p>
    <Link
      href={`${paths.blog}/${post.slug}`}
      passHref
      className={styles.readButton}
    >
      Czytaj dalej...
    </Link>
  </Section>
);
