import React, { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
