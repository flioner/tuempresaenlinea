import Layout from "../components/layout/layout";
import Head from "next/head";
import s from "../styles/Home.module.css";
import React from "react";
import { ScrollImages } from "../components/threejs/scroll/scroll";

export default function Home() {
  return (
    <Layout>
      <div className={s.scrollCont}>
        <Head>
          <title>Portafolio</title>
        </Head>

        <ScrollImages />
      </div>
    </Layout>
  );
}
