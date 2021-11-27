import type { GetStaticProps, NextPage } from "next";
import kontaktBanner from "../public/kontakt-banner.jpg";
import { Layout } from "@/components/Layout/Layout";

const Contact: NextPage = () => {
  return (
    <Layout title="Kontakt" banner={kontaktBanner}>
      <span>Kontakt</span>
    </Layout>
  );
};

export default Contact;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
