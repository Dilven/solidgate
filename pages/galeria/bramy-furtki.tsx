import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { Layout } from "@/components/Layout/Layout";
import banner from "../../public/main-banner.jpg";
import { pageTitles } from "@/helpers/metadata";

const Page = () => {
  return (
    <Layout title={pageTitles.bramyIFurtki} banner={banner}>
      Bramy i furtki
    </Layout>
  );
};

export default Page;
export const getStaticProps = () => {
  return { props: {} };
};
