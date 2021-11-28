import Image from "next/image";
import styles from "./Banner.module.scss";
interface Props {
  readonly src: StaticImageData;
  readonly title: string;
}

export const Banner = ({ src, title }: Props) => {
  return (
    <div className={styles.banner}>
      <Image src={src} alt={`${title} - banner`} priority placeholder="blur" />
      <span className={styles.title}>Solidgate</span>
    </div>
  );
};
