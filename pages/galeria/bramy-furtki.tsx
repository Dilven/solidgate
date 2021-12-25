import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { Layout } from "@/components/Layout/Layout";
import banner from "../../public/main-banner.jpg";
import { pageTitles, shortPageTitle } from "@/helpers/metadata";
import { Gallery } from "@/components/Gallery/Gallery";
import { images } from "data/gallery/gates";

const Page = () => {
  return (
    <Layout
      title={pageTitles.bramyIFurtki}
      banner={banner}
      shortTitle={shortPageTitle.bramyIFurtki}
    >
      <p>
        <strong>Furtka</strong> jak i <strong>brama kuta</strong> to pierwsza
        rzecz na którą zwraca uwagę nasz gość. Wiemy jak ważne jest pierwsze
        wrażenie. Chcemy aby państwo mieli je jak najlepsze dlatego dzięki
        naszemu 15 letniemu doświadczeniu jesteśmy w stanie zrealizować nawet
        najbardziej wymagające projekty. Posiadamy szeroki wybór bram i furtek.
        Są to zarówno bramy 2-skrzydłowe jak i przesuwne (razem z automatyka) w
        wielu wzorach. Klient może czerpać inspiracje z naszych już wykonanych
        prac jak i zaproponować coś własnego. Oczywiście jeśli zajdzie taka
        potrzeba możemy pomóc w zdecydowaniu który wzór czy kolor będzie tym
        najlepszym i będzie pasował do pozostałych elementów jak ogrodzenie czy
        balustrada.
      </p>
      <Gallery images={images} />
    </Layout>
  );
};

export default Page;
export const getStaticProps = () => {
  return { props: {} };
};
