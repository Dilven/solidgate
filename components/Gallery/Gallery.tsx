import { GalleryItem } from "./GalleryItem";
import styles from "./Gallery.module.scss";
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { Section } from "../Section/Section";

interface Props {
  readonly images: { src: StaticImageData; title: string }[];
}

export const Gallery = ({ images }: Props) => {
  return (
    <Section className={styles.gallery} label="Zdjęcia prac">
      <SRLWrapper>
        <ul className={styles.list}>
          {images.map(({ title, src }) => (
            <GalleryItem key={title} title={title} src={src} />
          ))}
        </ul>
      </SRLWrapper>
    </Section>
  );
};
