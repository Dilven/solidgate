import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { Layout } from "@/components/Layout/Layout";
import banner from "../../public/main-banner.jpg";
import { pageTitles } from "@/helpers/metadata";

import { Gallery } from "@/components/Gallery/Gallery";
import { images } from "data/gallery/balustrady";

const Page: NextPage = () => {
  return (
    <Layout title={pageTitles.balustrady} banner={banner}>
        <p>Balustrady kute to w dzisiejszych czasach nie tylko element który montujemy dla bezpieczeństwa. Stanowią one ozdobę domu,mieszkania czy firmy. Dlatego w naszej ofercie posiadamy zarówno balustrady proste jak i zaokrąglone. Te drugie wymagają szczególnej uwagi i precyzji do odpowiedniego wygięcie elementów. Jesteśmy w stanie wykonać projekt klasyczny oraz nowoczesny. Ostatnio szczególnym uznaniem cieszą się balustrady nowoczesne.Takie balustrady w Wieluniu montujemy coraz częściej. Balustrada kuta posiada dużo większą odporność niż balustrada drewniana. Nie potrzebuje praktycznie żadnych zabiegów konserwacyjnych przez co zadowolenie klienta jest dużo dłuższe. Posiadamy także balustrady schodowe które mogą Państwo obejrzeć tutaj

          Warto obejrzeć projekty które już wykonaliśmy.
        </p>
      <Gallery images={images} />
    </Layout>
  );
};

export default Page;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
