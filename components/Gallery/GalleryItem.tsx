import Image from "next/image";
import styles from "./GalleryItem.module.scss";

interface Props {
  readonly src: string;
  readonly title: string;
}
/**
 * TODO:
 * in `a` tag use thumbnail image
 * in `Image` use high quality full image
 */
export const GalleryItem = ({ src, title }: Props) => {
  return (
    <li className={styles.item}>
      <a href={src}>
        <Image
          src={src}
          alt={title}
          width="100%"
          height="100%"
          objectFit="cover"
          layout="responsive"
        />
      </a>
    </li>
  );
};
