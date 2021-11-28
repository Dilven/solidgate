import { Banner } from "../Banner/Banner";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Header.module.scss";

interface Props {
  readonly banner: StaticImageData;
  readonly title: string;
}

export const Header = ({ banner, title }: Props) => {
  return (
    <header className={styles.header}>
      <Navbar />
      <Banner src={banner} title={title} />
    </header>
  );
};
