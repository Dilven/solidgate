import { titleTemplate } from "@/pages/_app";
import { NextSeo } from "next-seo";
import React, { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface Props {
  readonly children: ReactNode;
  readonly title: string;
  readonly titleTemplate?: string;
}

export const Layout = ({ children, title, titleTemplate }: Props) => {
  return (
    <div>
      <NextSeo
        title={titleTemplate ? titleTemplate.replace('%s', title) : title}
        openGraph={{ title: titleTemplate ? titleTemplate.replace('%s', title) : title }}
      />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
