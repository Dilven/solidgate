import type { GetStaticProps, NextPage } from "next";
import { Head } from "@/components/Head";
import { Banner } from "@/components/Banner";
import kontaktBanner from "../public/kontakt-banner.jpg";

const Contact: NextPage = () => {
  return (
    <>
      <Head title="Solidgate - Kontakt" content="Jak można się z nami skontaktować" />
      <Banner src={kontaktBanner} />
      <span>Kontakt</span>
    </>
  );
};

export default Contact;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
