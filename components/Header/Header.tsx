import { Banner } from "../Banner/Banner";
import { Navbar } from "../Navbar/Navbar";
import styles from './Header.module.scss';

interface Props {
  banner: StaticImageData
}

export const Header = ({ banner }: Props) => {
  return (
    <header className={styles.header}>
        <Navbar />
        <Banner src={banner} />
      </header>
  );
};
