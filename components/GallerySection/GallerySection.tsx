import styles from "./GallerySection.module.scss";
import { GallerySectionItem } from "./GallerySectionItem";
import balustradesGalleryImage from "../../public/gallery/gallery-balustrades.jpg";
import fencesGalleryImage from "../../public/gallery/gallery-fences.jpg";
import wicketsGalleryImage from "../../public/gallery/gallery-wickets.jpg";
import staircaseRailingsGalleryImage from "../../public/gallery/gallery-staircase-railings.jpg";
import customGalleryImage from "../../public/gallery/gallery-custom.jpeg";
import { paths } from "@/config/paths";
import { Section } from "@/components/Section/Section";

const items = [
  {
    title: "Balustrady",
    description: "Szeroki wybór balustrad od klasycznych do nowoczesnych.",
    img: balustradesGalleryImage,
    href: paths.balustrady,
    className: styles.balustrades,
  },
  {
    title: "Balustrady schodowe",
    description:
      "Szeroki wybór bram i furtek. Posiadamy w ofercie bramy 2-skrzydłowe jak i przesuwne w wielu wzorach.",
    img: staircaseRailingsGalleryImage,
    href: paths.balustradySchodowe,
    className: styles["staircase-railings"],
  },
  {
    title: "Furtki i bramy",
    description:
      "Aby sprostać oczekiwaniom współczesnych klientów, posiadamy spory wybór wzorów balustrad schodowych",
    img: wicketsGalleryImage,
    href: paths.bramyIFurtki,
    className: styles.wickets,
  },
  {
    title: "Ogrodzenia",
    description:
      "Dobrze wybrane ogrodzenie wraz z bramą i furtką tworzą piękną wizytówke naszego domu.",
    img: fencesGalleryImage,
    href: paths.ogrodzenia,
    className: styles.fences,
  },
  {
    title: "Na zamówienie",
    description:
      "Wykonujemy takze kontrukcje metalowe na specjalne zamówienie, np. stoły i regały.",
    img: customGalleryImage,
    href: paths.naZamowienie,
    className: styles.custom,
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
