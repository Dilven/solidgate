import type { GetStaticProps, NextPage } from "next";
import kontaktBanner from "../public/kontakt-banner.jpg";
import { Layout } from "@/components/Layout/Layout";
import { pageTitles } from "@/helpers/metadata";

const Contact: NextPage = () => {
  return (
    <Layout title={pageTitles.kontakt} banner={kontaktBanner}>
      <span>Kontakt</span>
    </Layout>
  );
};

export default Contact;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
