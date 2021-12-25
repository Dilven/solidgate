import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { Layout } from "@/components/Layout/Layout";
import banner from "../../public/main-banner.jpg";
import { pageTitles, shortPageTitle } from "@/helpers/metadata";
import { Gallery } from "@/components/Gallery/Gallery";
import { images } from "data/gallery/staircase-railings";

const Page = () => {
  return (
    <Layout
      title={pageTitles.balustradySchodowe}
      banner={banner}
      shortTitle={shortPageTitle.balustradySchodowe}
    >
      <p>
        <strong>Balustrady schodowe</strong> współcześnie pełnią nie tylko
        funkcję bezpieczeństwa podczas korzystania ze schodów, ale również
        stanowi element wpasowujący się w styl całego budynku i pozostałych
        elementów jak ogrodzenie, brama, furtka czy balustrada którą mamy na
        balkonie. Poniższe fotografie stanowią zaledwie fragment oferowanych
        przez nas wyrobów. Aby sprostać oczekiwaniom współczesnych klientów,
        posiadamy znacznie większy wybór wzorów oraz kolorów. Oczywiście jest
        możliwość produkcji balustrady wg pomysłu Klienta. Każda wykonana przez
        nas balustrada jest cynkowana i malowana proszkowo.
      </p>
      <p>
        Choć balustrada schodowa w porównaniu z bramami czy ogrodzeniami to dużo
        mniejsze zlecenie to proszę się nie martwić. Nie tylko montujemy{" "}
        <strong>balustrady schodowe w Wieluniu</strong> ale jesteśmy w stanie
        dojechać do klientów, którzy mieszkają dużo dalej.
      </p>
      <p>
        Zapraszamy do oglądania fotografii a także do kontaktu telefonicznego
        gdzie odpowiemy na każde pytanie.
      </p>
      <Gallery images={images} />
    </Layout>
  );
};

export default Page;
export const getStaticProps = () => {
  return { props: {} };
};
