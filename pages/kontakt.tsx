import type { GetStaticProps, NextPage } from "next";
import kontaktBanner from "../public/kontakt-banner.jpg";
import { Layout } from "@/components/Layout/Layout";
import { pageTitles, shortPageTitle } from "@/helpers/metadata";
import { Section } from "@/components/Section/Section";
import { ContactDetails } from "@/components/ContactDetails/ContactDetails";
import { GoogleMap } from "@/components/GoogleMap/GoogleMap";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";

const googleMapsDirectionsLink =
  "https://www.google.com/maps/dir//Solidgate,+Pątnów+67,+98-335+Pątnów/@51.1443768,18.6111619,17z";

const Page = () => {
  const openNewTab = () => {
    window.open(googleMapsDirectionsLink, "_blank")?.focus();
  };

  return (
    <Layout
      title={pageTitles.kontakt}
      banner={kontaktBanner}
      shortTitle={shortPageTitle.kontakt}
    >
      <Section label="Nasz adres">
        <p>
          W razie pytań bądź wątpliwości prosimy o telefon. Ze względu na duże
          możliwości dostosowania ogrodzeń do Państwa wymagań prosimy o kontakt
          telefoniczny. Wierzymy, że w ten sposób najłatwiej i najszybciej
          będziemy w stanie zaproponować Państwu wycenę i ustalić szczegóły
          realizacji.
        </p>
        <h4>Solidgate</h4>
        <ContactDetails />
        <br />
        <ButtonLink href={googleMapsDirectionsLink} target="_blank">
          Sprawdź jak dojedziesz
        </ButtonLink>
        <GoogleMap onMarkerPress={openNewTab} />
      </Section>
    </Layout>
  );
};

export default Page;
export const getStaticProps = () => {
  return { props: {} };
};
