import React, { ReactNode } from "react";
import Link from "next/link";
import styles from './Navlink.module.scss';

export const NavLink = ({
  children,
  path,
}: {
  children: ReactNode;
  path: string;
}) => (
  <li className={styles.item}>
    <Link href={path}>{children}</Link>
  </li>
);
