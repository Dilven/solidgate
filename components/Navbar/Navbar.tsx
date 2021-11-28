import { paths } from "@/config/paths";
import React from "react";
import { NavLink } from "../Navlink/Navlink";
import styles from "./Navbar.module.scss";
import Link from "next/link";

export const navigationLinks = [
  { name: "O firmie", path: paths.solidgate },
  { name: "Galeria", path: paths.galeria },
  { name: "Kontakt", path: paths.kontakt },
];

export const Navbar = () => (
  <nav className={styles.nav}>
    <Link href="/" passHref>
      <a className={styles.brand}>Solidgate</a>
    </Link>
    <ul className={styles.list}>
      {navigationLinks.map(({ name, path }) => (
        <NavLink key={name} path={path}>
          {name}
        </NavLink>
      ))}
    </ul>
  </nav>
);
