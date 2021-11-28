import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { Layout } from "@/components/Layout/Layout";
import banner from "../../public/main-banner.jpg";
import { pageTitles } from "@/helpers/metadata";

import { Gallery } from "@/components/Gallery/Gallery";
import { images } from "data/gallery/balustrady";

const Page: NextPage = () => {
  return (
    <Layout title={pageTitles.balustrady} banner={banner}>
      Balustrady
      <Gallery images={images} />
    </Layout>
  );
};

export default Page;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
