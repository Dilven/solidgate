import React, { ReactNode } from "react";
import Link from "next/link";

export const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
      <Link href={path}>{children}</Link>
  );