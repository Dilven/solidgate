import styles from "./GallerySection.module.scss";
import { GallerySectionItem } from "./GallerySectionItem";
import galeriaBalustradyImg from "../../public/galeria-balustrady.jpg";
import { paths } from "@/config/paths";
import { Section } from "@/components/Section/Section";

const items = [
  {
    title: "Balustrady",
    description: "Szeroki wybór balustrad od klasycznych do nowoczesnych.",
    img: galeriaBalustradyImg,
    href: paths.balustrady,
  },
  {
    title: "Balustrady schodowe",
    description:
      "Szeroki wybór bram i furtek. Posiadamy w ofercie bramy 2-skrzydłowe jak i przesuwne w wielu wzorach.",
    img: galeriaBalustradyImg,
    href: paths.balustradySchodowe,
  },
  {
    title: "Furtki i bramy",
    description:
      "Aby sprostać oczekiwaniom współczesnych klientów, posiadamy spory wybór wzorów balustrad schodowych",
    img: galeriaBalustradyImg,
    href: paths.bramyIFurtki,
  },
  {
    title: "Ogrodzenia",
    description:
      "Dobrze wybrane ogrodzenie wraz z bramą i furtką tworzą piękną wizytówke naszego domu.",
    img: galeriaBalustradyImg,
    href: paths.ogrodzenia,
  },
];
export const GallerySection = () => {
  return (
    <Section label="Galeria naszych prac" className={styles.section}>
      {items.map((item) => (
        <GallerySectionItem key={item.title} {...item} />
      ))}
    </Section>
  );
};
