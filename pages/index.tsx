import type { GetStaticProps, NextPage } from "next";
import mainBanner from "../public/main-banner.jpg";
import React from "react";
import { Layout } from "@/components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Strona główna" banner={mainBanner}>
      <span>Home</span>
    </Layout>
  );
};

export default Home;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
