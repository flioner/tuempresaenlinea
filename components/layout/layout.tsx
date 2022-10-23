import React from "react";
import Head from "next/head";
import s from "../../styles/Home.module.css";
import { NavBar, Footer } from "../navigation/navbar";

export const siteTitle = "Tu Empresa En Linea";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        <link
          rel="icon"
          href="https://eddencei.sirv.com/TuEmpresaEnLinea/BriefcaseIcon.png"
        />
      </Head>

      {<></>}

      <div className={s.contContainer}>
        <div className={s.container}>
          <main>
            <NavBar /> {children} <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
