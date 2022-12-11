import Image, { StaticImageData } from "next/image";
import cx from "classnames";
import styles from "./GallerySectionItem.module.scss";
import Link from "next/link";
import { ButtonLink } from "../ButtonLink/ButtonLink";

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
  className,
}: Props) => {
  return (
    <div className={cx(styles.item, className)}>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image
            src={img}
            alt={`${title} - Galeria`}
            sizes="(max-width: 767px) 100vw, 50vw"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
        <Link href={href} passHref legacyBehavior>
          <div className={styles.overlay}>
            <h2>{title}</h2>
            <ButtonLink inverted href={href}>
              Galeria
            </ButtonLink>
          </div>
        </Link>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
