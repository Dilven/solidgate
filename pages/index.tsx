import type { GetStaticProps, NextPage } from "next";
import { Head } from "@/components/Head";
import mainBanner from "../public/main-banner.jpg";
import { Banner } from "@/components/Banner";

const Home: NextPage = () => {
  return (
    <>
      <Head title="Solidgate" content="" />
      <Banner src={mainBanner} />
      <span>Home</span>
    </>
  );
};

export default Home;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
