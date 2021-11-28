import type { GetStaticProps, NextPage } from "next";
import kontaktBanner from "../public/kontakt-banner.jpg";
import { Layout } from "@/components/Layout/Layout";
import { pageTitles } from "@/helpers/metadata";
import { Section } from "@/components/Section/Section";
import { ContactDetails } from "@/components/ContactDetails/ContactDetails";
import { GoogleMap } from "@/components/GoogleMap/GoogleMap";

const Page: NextPage = () => {
  return (
    <Layout title={pageTitles.kontakt} banner={kontaktBanner}>
      <Section label="Nasz adres">
        <h3>Nasz adres</h3>
        <h4>Solidgate</h4>
        <ContactDetails />
        <p>W razie pytań bądź wątpliwości prosimy o telefon. Ze względu na duże możliwości dostosowania ogrodzeń do Państwa wymagań prosimy o kontakt telefoniczny. Wierzymy, że w ten sposób najłatwiej i najszybciej będziemy w stanie zaproponować Państwu wycenę i ustalić szczegóły realizacji.</p>
        <GoogleMap />
      </Section>
    </Layout>
  );
};

export default Page
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
