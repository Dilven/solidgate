import { ContactDetails } from "../ContactDetails/ContactDetails";
import { navigationLinks } from "../Navbar/Navbar";
import { NavLink } from "../Navlink/Navlink";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Solidgate</p>
      <div className={styles.content}>
        <div className={styles.contact}>
          <ContactDetails />
        </div>
        <div className={styles.contact}>
          <menu className={styles.list}>
            {navigationLinks.map(({ name, path }) => (
              <NavLink key={name} path={path}>
                {name}
              </NavLink>
            ))}
          </menu>
        </div>
      </div>
    </footer>
  );
};
Footer.displayName = "Footer";
