import type { GetStaticProps, NextPage } from "next";
import { Head } from "@/components/Head";
import galeriaBanner from "../public/galeria-banner.jpg";
import { Banner } from "@/components/Banner";

const Gallery: NextPage = () => {
  return (
    <>
      <Head title="Solidgate" content="" />
      <Banner src={galeriaBanner} />
      <span>Galeria</span>
    </>
  );
};

export default Gallery;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
