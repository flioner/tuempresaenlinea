import Head from "next/head";

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

      <main>{children}</main>
    </div>
  );
}
