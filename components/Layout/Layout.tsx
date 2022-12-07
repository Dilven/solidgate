import { NextSeo } from "next-seo";
import { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import { Container } from "../Container/Container";
import { CookiesPopup } from "../CookiesPopup/CookiesPopup";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "./Layout.module.scss";

interface Props {
  readonly children: ReactNode;
  readonly title: string;
  readonly shortTitle?: string;
  readonly titleTemplate?: string;
  readonly banner?: StaticImageData;
}

export const Layout = ({
  children,
  title: providedTitle,
  shortTitle,
  titleTemplate = "Solidgate - %s",
  banner,
}: Props) => {
  const title = titleTemplate.replace("%s", providedTitle);
  return (
    <div className={styles.wrapper}>
      <NextSeo
        title={title}
        openGraph={{
          title,
        }}
      />
      <Header banner={banner} title={title} shortTitle={shortTitle} />
      <main className={styles.main}>
        <Container>
          <h1>{title}</h1>
          {children}
        </Container>
      </main>
      <Footer />
      <CookiesPopup />
    </div>
  );
};
