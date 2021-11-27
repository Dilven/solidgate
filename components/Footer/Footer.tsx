import { navigationPaths } from '@/config/paths';
import { NavLink } from '../Navlink/Navlink';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Solidgate</p>
      <div className={styles.content}>
        <div className={styles.contact}>
          <span>tel. 607942224</span>
          <span>biuro@solidgate.pl</span>
          <span>Pątnów 67</span>
          <span>98-335 Pątnów</span>
        </div>
        <div className={styles.contact}>
        <ul className={styles.list}>
          {Object.entries(navigationPaths).map(([name, path]) => (
            <NavLink key={name} path={path}>
              {name}
            </NavLink>
          ))}
        </ul>
        </div>
      </div>
    </footer>
  );
};
Footer.displayName = 'Footer';