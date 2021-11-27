import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { Layout } from "@/components/Layout/Layout";
import galeriaBalustradyImg from "../../public/galeria-balustrady-banner.jpg";
import { pageTitles } from "@/helpers/metadata";

const Gallery: NextPage = () => {
  return (
    <Layout
      title={pageTitles.balustrady}
      banner={galeriaBalustradyImg}
    >Balustrady</Layout>
  );
};

export default Gallery;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
