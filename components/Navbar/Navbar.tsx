import { navigationPaths } from "@/config/paths";
import React from "react";
import { NavLink } from "../Navlink/Navlink";
import styles from "./Navbar.module.scss";
import Link from "next/link";

export const Navbar = () => (
  <nav className={styles.nav}>
    <Link href="/" passHref>
      <a className={styles.brand}>Solidgate</a>
    </Link>
    <menu className={styles.list}>
      {Object.entries(navigationPaths).map(([name, path]) => (
        <NavLink key={name} path={path}>
          {name}
        </NavLink>
      ))}
    </menu>
  </nav>
);
