import React from "react";
import { Layout } from "@/components/Layout/Layout";
import banner from "../../public/main-banner.jpg";
import { pageTitles, shortPageTitle } from "@/helpers/metadata";
import { Gallery } from "@/components/Gallery/Gallery";
import { images } from "data/gallery/custom";

const Page = () => {
  return (
    <Layout
      title={pageTitles.naZamowienie}
      banner={banner}
      shortTitle={shortPageTitle.naZamowienie}
    >
      <p>
        Jesteśmy firmą specjalizującą się w tworzeniu konstrukcji metalowych na
        specjalne zamówienie, takich jak regały metalowe, stoły metalowe,
        kwietniki oraz półki. Nasze wyroby stalowe cechuje wysoka jakość
        wykonania oraz solidność, co gwarantuje długotrwałe zadowolenie
        klientów.
      </p>
      <p>
        Regały metalowe to nie tylko funkcjonalne rozwiązanie do przechowywania
        różnorodnych przedmiotów, ale także stylowy element wystroju wnętrza.
        Wykonujemy regały metalowe o różnych kształtach, rozmiarach i wzorach,
        dostosowane do indywidualnych potrzeb klientów. Nasze regały metalowe są
        odporne na uszkodzenia i łatwe do utrzymania w czystości, co sprawia, że
        są praktycznym rozwiązaniem zarówno w domu, jak i w miejscach
        publicznych.
      </p>
      <p>
        Stoły metalowe to nie tylko solidne i wytrzymałe meble, ale także
        atrakcyjny element wystroju wnętrza. W naszej ofercie znajdziesz różnego
        rodzaju stoły metalowe, od prostych i klasycznych, po nowoczesne i
        designerskie. Wykonujemy stoły metalowe o różnych kształtach, rozmiarach
        i wzorach, dostosowane do indywidualnych preferencji klientów. Stoły
        metalowe są trwałe, odporne na uszkodzenia i łatwe do czyszczenia, co
        czyni je praktycznym i estetycznym rozwiązaniem w różnych
        przestrzeniach.
      </p>
      <p>
        Kwietniki metalowe to doskonały sposób na udekorowanie wnętrza lub
        ogrodu. Nasze kwietniki metalowe są wykonane z solidnych materiałów,
        które są odporne na warunki atmosferyczne, co zapewnia długotrwałą
        trwałość. Dzięki różnorodnym kształtom i wzorom kwietników metalowych,
        możemy spełnić oczekiwania nawet najbardziej wymagających klientów,
        dodając oryginalny akcent do ich przestrzeni.
      </p>
      <p>
        Półki metalowe to funkcjonalne i nowoczesne rozwiązanie do
        przechowywania i eksponowania przedmiotów w różnych miejscach, takich
        jak biura, sklepy, magazyny czy domowe wnętrza. Nasze półki metalowe są
        trwałe, łatwe do utrzymania w czystości i dostępne w różnych kształtach
        i rozmiarach, aby spełnić indywidualne potrzeby klientów.
      </p>
      <p>
        Jako firma specjalizująca się w konstrukcjach metalowych, jesteśmy w
        stanie zrealizować nawet najbardziej nietypowe zamówienia, dostosowując
        się do indywidualnych preferencji i wymagań klientów. Nasze wyroby
        metalowe są montowane na terenie Wielunia i okolic, a także na wyjazdach
        w promieniu do 200 km. Zapraszamy do zapoznania się z naszą ofertą i
        skorzystania z naszych usług.
      </p>
      <Gallery images={images} />
    </Layout>
  );
};

export default Page;
export const getStaticProps = () => {
  return { props: {} };
};
