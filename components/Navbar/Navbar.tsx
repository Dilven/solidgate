import { paths } from "@/config/paths";
import React from "react";
import { NavLink } from "../Navlink/Navlink";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { useRouter }  from 'next/router'
import { Container } from "../Container/Container";
 
export const navigationLinks = [
  { name: "O firmie", path: paths.solidgate },
  { name: "Galeria", path: paths.galeria },
  { name: "Kontakt", path: paths.kontakt },
  { name: "Blog", path: paths.blog },
];

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <Container className={styles.container}>
        <Link href="/" passHref>
          <a className={styles.brand}>Solidgate</a>
        </Link>
        <ul className={styles.list}>
          {navigationLinks.map(({ name, path }) => (
            <NavLink key={name} path={path} isActive={router.pathname == path}>
              {name}
            </NavLink>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
