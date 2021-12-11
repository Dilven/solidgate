
import dynamic from 'next/dynamic';
import lgZoom from 'lightgallery/plugins/zoom';

import { GalleryItem } from "./GalleryItem";
import styles from "./Gallery.module.scss";
import { Section } from "../Section/Section";

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';

interface Props {
  readonly images: { src: StaticImageData; title: string }[];
}

const LightGallery = dynamic(() => import('lightgallery/react'), {
  ssr: false
});

export const Gallery = ({ images }: Props) => {
  return (
    <Section className={styles.gallery} label="Zdjęcia prac">
      <LightGallery mode="lg-fade" elementClassNames={styles.list} plugins={[lgZoom]}>
          {images.map(({ title, src }) => (
            <GalleryItem key={title} title={title} src={src} />
          ))}
      </LightGallery>
    </Section>
  );
};
