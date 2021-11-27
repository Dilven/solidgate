import styles from "./GallerySection.module.scss";
import { GallerySectionItem } from "./GallerySectionItem";
import galeriaBalustradyImg from "../../public/galeria-balustrady.jpg";
import { galleryPaths } from "@/config/paths";

const items = [
  {
    title: "Balustrady",
    description: "Szeroki wybór balustrad od klasycznych do nowoczesnych.",
    img: galeriaBalustradyImg,
    href: galleryPaths.balustrady,
  },
  {
    title: "Balustrady schodowe",
    description:
      "Szeroki wybór bram i furtek. Posiadamy w ofercie bramy 2-skrzydłowe jak i przesuwne w wielu wzorach.",
    img: galeriaBalustradyImg,
    href: galleryPaths.balustradySchodowe,
  },
  {
    title: "Furtki i bramy",
    description:
      "Aby sprostać oczekiwaniom współczesnych klientów, posiadamy spory wybór wzorów balustrad schodowych",
    img: galeriaBalustradyImg,
    href: galleryPaths.bramyIFurtki,
  },
  {
    title: "Ogrodzenia",
    description:
      "Dobrze wybrane ogrodzenie wraz z bramą i furtką tworzą piękną wizytówke naszego domu.",
    img: galeriaBalustradyImg,
    href: galleryPaths.ogrodzenia,
  },
];
export const GallerySection = () => {
  return (
    <section className={styles.section}>
      {items.map((item) => (
        <GallerySectionItem key={item.title} {...item} />
      ))}
    </section>
  );
};
