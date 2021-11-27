import { navigationPaths } from "@/config/paths";
import React from "react";
import { NavLink } from "../Navlink/Navlink";
import styles from "./Navbar.module.scss";

export const Navbar = () => (
  <nav className={styles.nav}>
    <ul className={styles.list}>
      {Object.entries(navigationPaths).map(([name, path]) => (
        <NavLink key={name} path={path}>
          {name}
        </NavLink>
      ))}
    </ul>
  </nav>
);
