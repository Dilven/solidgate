import { Layout } from "@/components/Layout/Layout";
import Error from "next/error";
import React from "react";
import { shortPageTitle } from "@/helpers/metadata";

export default function Custom404() {
  return (
    <Layout title={""} titleTemplate="%s" shortTitle={shortPageTitle.solidgate}>
      <Error statusCode={404} />;
    </Layout>
  );
}
