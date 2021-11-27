import { NextSeo } from "next-seo";
import React, { ReactNode } from "react";
import { CookiesPopup } from "../CookiesPopup/CookiesPopup";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "./Layout.module.scss";

interface Props {
  readonly children: ReactNode;
  readonly title: string;
  readonly titleTemplate?: string;
  banner: StaticImageData;
}

export const Layout = ({ children, title, titleTemplate, banner }: Props) => {
  return (
    <div className={styles.wrapper}>
      <NextSeo
        title={titleTemplate ? titleTemplate.replace("%s", title) : title}
        openGraph={{
          title: titleTemplate ? titleTemplate.replace("%s", title) : title,
        }}
      />
      <Header banner={banner} />
      <main className={styles.main}>{children}</main>
      <Footer />
      <CookiesPopup />
    </div>
  );
};
