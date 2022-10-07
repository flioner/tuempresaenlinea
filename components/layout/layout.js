import Head from "next/head";
import s from "../../styles/Home.module.css";

export const siteTitle = "Tu Empresa En Linea";

export default function Layout({ children, home }) {
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

      <div className={s.globalContainer}>
        <main> {children}</main>
      </div>
    </div>
  );
}
