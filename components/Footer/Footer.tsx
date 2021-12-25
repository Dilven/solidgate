import { ContactDetails } from "../ContactDetails/ContactDetails";
import { Container } from "../Container/Container";
import { navigationLinks } from "../Navbar/Navbar";
import { NavLink } from "../Navlink/Navlink";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <p className={styles.company}>Solidgate</p>
          <div className={styles.contact}>
            <ContactDetails />
          </div>
          <ul className={styles.navigation}>
            {navigationLinks.map(({ name, path }) => (
              <NavLink
                key={name}
                path={path}
                linkClassName={styles["navigation-link"]}
              >
                {name}
              </NavLink>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
Footer.displayName = "Footer";
