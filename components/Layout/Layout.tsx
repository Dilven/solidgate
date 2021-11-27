import { NextSeo } from "next-seo";
import React, { ReactNode } from "react";
import { Banner } from "../Banner/Banner";
import { CookiesPopup } from "../CookiesPopup/CookiesPopup";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

interface Props {
  readonly children: ReactNode;
  readonly title: string;
  readonly titleTemplate?: string;
  banner: StaticImageData
}

export const Layout = ({ children, title, titleTemplate, banner }: Props) => {
  return (
    <div>
      <NextSeo
        title={titleTemplate ? titleTemplate.replace('%s', title) : title}
        openGraph={{ title: titleTemplate ? titleTemplate.replace('%s', title) : title }}
      />
      <Navbar />
      <Banner src={banner} />
      <main>{children}</main>
      <Footer />
      <CookiesPopup />
    </div>
  );
};
