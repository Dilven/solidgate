import Image from "next/image";
import styles from "./GalleryItem.module.scss";

interface Props {
  readonly src: StaticImageData;
  readonly title: string;
}

export const GalleryItem = ({ src, title }: Props) => {
  return (
    <a className={styles.item} href={src.src}>
        <Image
          src={src}
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
