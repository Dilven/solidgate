import React, { ReactNode } from "react";
import cx from "classnames";
import Link from "next/link";
import styles from "./Navlink.module.scss";

interface Props {
  isActive?: boolean;
  className?: string;
  linkClassName?: string;
  children: ReactNode;
  path: string;
}

export const NavLink = ({
  children,
  path,
  className,
  linkClassName,
  isActive,
}: Props) => (
  <li className={cx(styles.item, className)}>
    <Link href={path} passHref>
      <a className={cx(styles.link, isActive && styles.active, linkClassName)}>
        {children}
      </a>
    </Link>
  </li>
);
