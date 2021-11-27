import type { GetStaticProps, NextPage } from "next";
import galeriaBanner from "../../public/galeria-banner.jpg";
import React from "react";
import { Layout } from "@/components/Layout/Layout";

const Gallery: NextPage = () => {
  return (
    <Layout title="Galeria" banner={galeriaBanner}>
      <span>Galeria</span>
    </Layout>
  );
};

export default Gallery;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
