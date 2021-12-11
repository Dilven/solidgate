import Image from "next/image";
import styles from "./GalleryItem.module.scss";

interface Props {
  readonly source: StaticImageData;
  readonly title: string;
}

export const GalleryItem = ({ source, title }: Props) => {
  return (
    <a className={styles.item} href={source.src}>
        <Image
          src={source}
          alt={title}
          width="100%"
          height="100%"
          sizes="(max-width: 767px) 30vw, (max-width: 1200px) 25vw, 17vw"
          objectFit="cover"
          layout="responsive"
        />
    </a>
  );
};
