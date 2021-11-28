import Image from "next/image";
import styles from "./GallerySectionItem.module.scss";
import Link from "next/link";

interface Props {
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly img: StaticImageData;
}

export const GallerySectionItem = ({
  title,
  description,
  img,
  href,
}: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.overlay}>
        <h2>{title}</h2>
        <Image src={img} alt={`${title} - Galeria`} />
        <Link href={href}>Galeria</Link>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
