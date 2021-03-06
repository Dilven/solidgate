import type { GetStaticProps, NextPage } from "next";
import mainBanner from "../public/main-banner.jpg";
import React from "react";
import { Layout } from "@/components/Layout/Layout";
import { Separator } from "@/components/Separator/Separator";
import { GallerySection } from "@/components/GallerySection/GallerySection";
import { Section } from "@/components/Section/Section";
import { pageTitles, shortPageTitle } from "@/helpers/metadata";

const Home = () => {
  return (
    <Layout
      title={pageTitles.solidgate}
      banner={mainBanner}
      shortTitle={shortPageTitle.solidgate}
    >
      <Section label="Firma z tradycjami">
        <p>
          Solidgate działa na rynku już od ponad 15 lat. Wykonujemy oraz
          montujemy nowoczesne oraz trwałe ogrodzenia kute, balustrady, bramy i
          furtki. Zdobyte w tym czasie doświadczenie pozwala nam realizować
          coraz ciekawsze projekty w bardzo atrakcyjnej cenie. Wysoka jakość a
          także konkurencyjna cena przekłada się w dużym stopniu na zadowolenie
          naszych klientów. Wszelkie pomiary jak i wstępny plan wykonujemy
          darmowo aby nasz klient mógł spokojnie wszystko przemyśleć.
        </p>
        <p>
          Nasze produkty można podzielic na: balustrady wewnętrzne, zewnętrzne,
          bramy wjazdowe - przesuwne oraz skrzydłowe z pełną automatyką,
          ogrodzenia kute, furtki, kraty i inne konstrukcje stalowe.
        </p>
        <p>
          Dodatkowo nie ograniczamy się tylko do miasta Wieluń czy województwa
          łódzkiego. Naszą działalnością zajmujemy się na terenie prawie całej
          Polski. Ogrodzenia wykonane przez nas można odnaleźć zarówno w
          Wieluniu, Wrocławiu, Kępnie, Katowicach, Sosnowcu, Tarnowskich Górach,
          Bełchatowie, Sieradzu, Łodzi jak i wielu innych mniejszych
          miejscowościach jak Pątnów, Biała, Rudniki, Walichnowy, Sokolniki itp.
        </p>
        <p>
          W naszej ofercie posiadamy ogromną ilość wzorów i na życzenie klienta
          jesteśmy w stanie wykonać nawet najbardziej ambitne projekty. Oferta
          obejmuje oczywiście również pełną gamę kolorów (według uznania
          klienta) oraz montaż. Koszty wykonania całego zlecenia przedstawiamy
          po kontakcie telefonicznym albo mailowym. Wszystkie elementy są
          ocynkowane i malowane proszkowo. Dzięki temu mają Państwo pewność
          trwałości i pięknego wyglądu na długie lata. Ogrodzenia kute są ważnym
          elementem każdego domu, są naszą wizytówką o którą warto zadbać.
        </p>
        <p>
          Zapraszamy serdecznie do zapoznania się z naszą ofertą a także do
          kontaktu telefonicznego lub mailowego. Odpowiemy na każde Państwa
          pytanie.
        </p>
      </Section>
      <Separator />
      <GallerySection />
    </Layout>
  );
};

export default Home;
export const getStaticProps = () => {
  return { props: {} };
};
