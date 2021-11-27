import type { GetStaticProps, NextPage } from "next";
import galeriaBanner from "../../public/galeria-banner.jpg";
import React from "react";
import { Layout } from "@/components/Layout/Layout";
import { Separator } from "@/components/Separator/Separator";
import { GallerySection } from "@/components/GallerySection/GallerySection";
import Link from "next/link";
import { navigationPaths } from "@/config/paths";
import { pageTitles } from "@/helpers/metadata";

const Gallery: NextPage = () => {
  return (
    <Layout title={pageTitles.galeria} banner={galeriaBanner}>
      <p>
        Nasza siedziba znajduje się w miejscowości Pątnów koło miasta Wieluń, ale nie trzeba do nas przychodzić osobiście aby obejrzeć nasze prace. W ofercie posiadamy nowoczesne ogrodzenia, balustrady, bramy, furtki oraz balustrady schodowe.W galerii zamieszczone zostały tylko przykładowe realizacje. Dla klienta jesteśmy w stanie zrealizować projekt, wzorowany na już wykonanym przez nas jak i taki, który on sam zaproponuje. Oferujemy pomoc w wyborze elementów, z których wykonane zostanie ogrodzenie tak, aby jego wzór najbardziej odpowiadał Państwa preferencjom. Dzięki naszemu długoletniemu doświadczeniu jesteśmy w stanie podpowiedzieć, który kolor będzie najlepszym wyborem jak i najtrwalszym. Oczywiście przed przystąpieniem do projektu wykonujemy najpierw pomiary, które dla klienta są oczywiście bezpłatne.
      </p>
      <p>
      Zapraszamy do obejrzenia galerii gdzie mogą państwo obejrzeć nasze prace i zaczerpnąć inspiracji dla siebie. 
      W razie jakichkolwiek pytań zapraszamy do <Link href={navigationPaths.kontakt}>kontaktu</Link>.
      </p>
      <Separator />
      <GallerySection />
    </Layout>
  );
};

export default Gallery;
export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
