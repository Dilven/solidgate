import { PostModel } from "@/models/post";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";
import pThrottle from "p-throttle";

const throttle = pThrottle({ limit: 5, interval: 1000 });

const url = process.env.HYGRAPH_API_URL;
const token = process.env.HYGRAPH_TOKEN;

if (!token) {
  throw new Error("HYGRAPH_TOKEN does not exist");
}

if (!url) {
  throw new Error("HYGRAPH_API_URL does not exist");
}

const client = new GraphQLClient(url, {
  headers: {
    Authorization: token.startsWith("Bearer ") ? token : `Bearer ${token}`,
  },
});

export const hygraphService = Object.freeze({
  getPosts: async () => {
    const query = gql`
      {
        posts(stage: PUBLISHED, orderBy: publishedAt_ASC) {
          id
          content
          title
          slug
          publishedAt
        }
      }
    `;
    const { posts } = await client.request<{ posts: PostModel[] }>(query);
    return posts;
  },
  getPost: throttle(async (slug: string) => {
    const query = gql`
      query getPostBySlug($slug: String!) {
        posts(stage: PUBLISHED, where: { slug: $slug }) {
          id
          content
          title
          slug
          publishedAt
        }
      }
    `;
    const variables = { slug };
    const { posts } = await client.request<{ posts: PostModel[] }>(
      query,
      variables
      );
    console.log("🚀 ~ file: hygraph.ts:55 ~ getPost:throttle ~ posts", posts)
    return posts.at(0);
  }),
});
