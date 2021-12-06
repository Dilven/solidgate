import React, { ReactNode } from "react";
import Link from "next/link";
import styles from "./Navlink.module.scss";

interface Props {
  isActive?: boolean;
  children: ReactNode;
  path: string;
}

export const NavLink = ({
  children,
  path,
  isActive
}: Props) => (
  <li className={styles.item}>
    <Link href={path} passHref>
      <a className={isActive ? `${styles.link} ${styles.active}`  : styles.link}>{children}</a>
    </Link>
  </li>
);
