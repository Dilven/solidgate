import { Banner } from "../Banner/Banner";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Header.module.scss";

interface Props {
  readonly banner?: StaticImageData;
  readonly title: string;
  readonly shortTitle?: string;
}

export const Header = ({ banner, title, shortTitle }: Props) => {
  return (
    <header className={styles.header}>
      <Navbar />
      {banner && <Banner src={banner} title={shortTitle || title} />}
    </header>
  );
};
