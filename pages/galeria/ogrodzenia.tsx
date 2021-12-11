import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { Layout } from "@/components/Layout/Layout";
import banner from "../../public/main-banner.jpg";
import { pageTitles } from "@/helpers/metadata";
import { Gallery } from "@/components/Gallery/Gallery";
import { images } from "data/gallery/fences";

const Page = () => {
  return (
    <Layout title={pageTitles.ogrodzenia} banner={banner}>
      <p>W naszej ofercie znajdą państwo solidne i świetnie wykonane <strong>ogrodzenia</strong>. Mają państwo gwarancje satysfakcji na długie lata poprzez zabezpieczenie naszych produktów przed wpływem warunków atmosferycznych. Każde nasze ogrodzenie transportowane jest do cynkowni w miejscowości <strong>Wieluń</strong> i poddawane cynkowaniu ogniowemu po czym zostaje jeszcze lakierowane proszkowo. Dzięki tym procesom otrzymujemy pięknie wykonany produkt, który będzie nas cieszył przez długi czas. Dobrze wybrane ogrodzenie wraz z bramą i furtką tworzą piękną wizytówkę naszego domu.</p>
      <p>Ogrodzenia wykonujemy z uprzednio przygotowanych elementów kutych przygotowanych w wielu ciekawych kształtach. Dzięki temu mogą Państwo w łatwy sposób skomponować swoje własne, oryginalne ogrodzenie.</p>
      <p>Na specjalne zamówienie wykonujemy nie tylko ogrodzenia stalowe, ale także zawierające aluminiowe elementy, które charakteryzują się mniejszym ciężarem i brakiem konieczności cynkowania.</p>
      <p>Oczywiście tak jak dla naszych innych produktów: balustrady, balustrady schodowe, furtki i bramy kute, ogrodzenia montujemy w Wileuniu i okolicach, ale także wyjazdy do 200km nie stanowią dla nas problemu.</p>
      <Gallery images={images} />
    </Layout>
  );
};

export default Page;
export const getStaticProps = () => {
  return { props: {} };
};
