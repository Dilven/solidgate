import Image from "next/image";
import styles from "./GalleryItem.module.scss";

interface Props {
  readonly src: StaticImageData;
  readonly title: string;
}

export const GalleryItem = ({ src, title }: Props) => {
  return (
    <li className={styles.item}>
      <Image
        src={src}
        alt={title}
        width="100%"
        height="100%"
        objectFit="cover"
      />
    </li>
  );
};
