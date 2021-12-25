import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { Layout } from "@/components/Layout/Layout";
import banner from "../../public/main-banner.jpg";
import { pageTitles, shortPageTitle } from "@/helpers/metadata";
import { Gallery } from "@/components/Gallery/Gallery";
import { images } from "data/gallery/balustrades";
import Link from "next/link";
import { paths } from "@/config/paths";

const Page = () => {
  return (
    <Layout
      title={pageTitles.balustrady}
      banner={banner}
      shortTitle={shortPageTitle.balustrady}
    >
      <p>
        <strong>Balustrady kute</strong> to w dzisiejszych czasach nie tylko
        element który montujemy dla bezpieczeństwa. Stanowią one ozdobę
        domu,mieszkania czy firmy. Dlatego w naszej ofercie posiadamy zarówno
        balustrady proste jak i zaokrąglone. Te drugie wymagają szczególnej
        uwagi i precyzji do odpowiedniego wygięcie elementów. Jesteśmy w stanie
        wykonać projekt klasyczny oraz nowoczesny. Ostatnio szczególnym uznaniem
        cieszą się
        <strong>balustrady nowoczesne</strong>. Takie balustrady w Wieluniu
        montujemy coraz częściej. Balustrada kuta posiada dużo większą odporność
        niż balustrada drewniana. Nie potrzebuje praktycznie żadnych zabiegów
        konserwacyjnych przez co zadowolenie klienta jest dużo dłuższe.
        Posiadamy także balustrady schodowe które mogą Państwo obejrzeć{" "}
        <Link href={paths.balustradySchodowe}>tutaj</Link>.
      </p>
      <p>Warto obejrzeć projekty które już wykonaliśmy.</p>
      <Gallery images={images} />
    </Layout>
  );
};

export default Page;
export const getStaticProps = () => {
  return { props: {} };
};
