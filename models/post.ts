export type PostModel = {
  frontmatter: {
    cover_image: string;
    title: string;
    excerpt: string;
    date: string;
  };
  slug: string;
};
