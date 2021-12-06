import Image from "next/image";
import cx from 'classnames';
import styles from "./GallerySectionItem.module.scss";
import Link from "next/link";

interface Props {
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly img: StaticImageData;
  readonly className?: string;
}

export const GallerySectionItem = ({
  title,
  description,
  img,
  href,
  className
}: Props) => {
  return (
    <div className={cx(styles.item, className)}>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src={img} alt={`${title} - Galeria`} objectFit="cover" layout="fill" />
        </div>
        <div className={styles.overlay}>
          <h2>{title}</h2>
          <Link href={href} passHref>
            <a>Galeria</a>
          </Link>
        </div>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
