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
  readonly banner: StaticImageData;
}

export const Layout = ({
  children,
  title: providedTitle,
  titleTemplate,
  banner,
}: Props) => {
  const title = titleTemplate
    ? titleTemplate.replace("%s", providedTitle)
    : providedTitle;
  return (
    <div className={styles.wrapper}>
      <NextSeo
        title={title}
        openGraph={{
          title,
        }}
      />
      <Header banner={banner} title={title} />
      <main className={styles.main}>
        <h1>{title}</h1>
        {children}
      </main>
      <Footer />
      <CookiesPopup />
    </div>
  );
};
