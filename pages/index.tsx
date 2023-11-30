import Layout from "../components/layout/layout";
import {
  ProfileSlider,
  VerticalSlider,
  HorizontalSlider,
} from "../components/ui/slider/slider";
import s from "../styles/Home.module.css";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { LaptopViewer } from "../components/threejs/canvas";
import { VantaBG } from "../components/threejs/vanta";
import { ObjViewer } from "../components/threejs/threejs";
import { Modal } from "../components/ui/modal/modal";
import { ImageCollection } from "../components/ui/image_collection/image_collection";
import { ImageHero } from "../components/ui/imgHero/imghero";
import DotWave from "../components/threejs/dots/dotwave";
import { ProductDemo } from "../components/product_demo/productDemo";
import Categories from "../components/categories/categories";
import { Contact } from "../components/ui/contact/contact";
import { ProjectSlider } from "../components/ui/slider/projectSlider";

export default function Home() {
  const [visibleDot, setDots] = useState(false);

  return (
    <Layout>
      <div /* TYPEWRITER */ className={s.titleCont}>
        <div className={s.mainTitle}> Fabian Lioner</div>

        <div className={s.fLanding}>
          <Typewriter
            options={{
              strings: [
                "Desarrollo Fullstack",
                "Diseño Web",
                "Fotografía y Video",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <VantaBG />
      </div>

      {/* SLIDER*/}
      <div className={s.defaultCont}>
        <HorizontalSlider
          scroll={false}
          images={[
            {
              src: "/Images/photo.jpg",
              nombre: "Photography Portfolio",
              desc: "Next.js, Tailwind",
              url: "https://photo.fabianlioner.com",
            },
            {
              src: "/Images/BAMX.jpg",
              nombre: "BAMX App",
              desc: "Cross-platform, React, Lottie",
              url: "https://www.youtube.com/watch?v=KDZEw_ubQG8",
            },

            {
              src: "/Images/novo.png",
              nombre: "NovoPC",
              desc: "E-commerce, Shopify API",
              url: "https://novopc.mx",
            },
            {
              src: "/Images/showroom.png",
              nombre: "Custom Showroom",
              desc: "Muestra tu marca con componentes personalizados",
              url: "portafolio",
            },
            {
              src: "/Images/ecommerce.webp",
              nombre: "Ecommerce",
              desc: "Custom components, Shopify API & Checkout",
              url: "ecommerce",
            },
          ]}
        />
      </div>

      <div className={s.imgHeroCont} /* IMAGE HERO */>
        <ImageHero>
          <div className={s.extraCont}>
            <img
              className={s.heroImg}
              src="https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666421165/tuempresaenlinea/icons/VercelCompanies/Next_Vercel_wf2jsu.webp"
            />
          </div>
          <div className={s.verticalCenter}>
            <div className={s.heroTitle}>Vercel + NextJS.</div>
            <div className={s.heroDesc}>
              El éstandar de calidad en la industria, usado por:
            </div>
            <ImageCollection
              tiny={true}
              crop={true}
              images={[
                {
                  src: "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666417929/tuempresaenlinea/icons/VercelCompanies/MetaLogo_mgocmy.png",
                },
                {
                  src: "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666418992/tuempresaenlinea/icons/VercelCompanies/UberLogo_qgtf5z.png",
                },
                {
                  src: "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666418983/tuempresaenlinea/icons/VercelCompanies/EbayLogo_c8bjxu.png",
                },
                {
                  src: "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666421344/tuempresaenlinea/icons/VercelCompanies/AdobeLogo_g1eqaz.png",
                },
              ]}
            />
          </div>
        </ImageHero>
      </div>

      <div className={s.paddingMin} /* LAPTOP */>
        <div /* TITLE */ className={s.middle}>
          <div className={s.title}> Diseño Web para cualquier dispositivo </div>
        </div>
        <div className={s.marginTop}>
          <LaptopViewer />
        </div>
        <div /* Description (Canvas) */ className={s.delayedMiddle}>
          <div className={s.canvasDesc}>
            Páginas web que se ven bien tanto en dispositivos móbiles, como de
            escritorio
          </div>
        </div>
      </div>

      <div /* DOTS */
        onMouseEnter={() => setDots(true)}
        // onMouseLeave={() => setDots(false)}
        className={s.dotCont}
      >
        <div className={s.dotText}>
          <div className={s.mainDot}>
            <div className={s.innerDot}>Diseño&nbsp; </div>
          </div>
          <div className={!visibleDot ? s.hiddenText : s.dot}>Digital</div>
          <div className={visibleDot ? s.hiddenText : s.dot}>
            &nbsp;+ Marketing Digital
          </div>
        </div>

        <div className={s.dotModule}>
          <DotWave />
        </div>
      </div>
    </Layout>
  );
}

/*
      <div className={s.middle} >
      <div className={s.title}> Slider de perfiles </div>
      </div>
      <div className={s.middle}>
        <div className={s.crop}>
          <ProfileSlider
            images={[
              {
                id: 0,
                src: "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666298576/tuempresaenlinea/Devs/FabianLioner_Cropped_xd3pb3.jpg",
                nombre: "Fabián",
                universidad:
                  "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666309641/tuempresaenlinea/Devs/icons/ITESM_tzfcun.png",
                urlUniversidad:
                  "https://tec.mx/es/computacion-y-tecnologias-de-informacion/ingeniero-en-tecnologias-computacionales",
                social:
                  "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666309641/tuempresaenlinea/Devs/icons/LinkedIn_jjkifc.png",
                socialUrl: "https://www.linkedin.com/in/fabianlioner/",
              },
              {
                id: 1,
                src: "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666298536/tuempresaenlinea/Devs/Gabriel_Caballero_hcxxay.jpg",
                nombre: "Gabriel",
                universidad:
                  "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666309641/tuempresaenlinea/Devs/icons/McGill_mdsgym.jpg",
                urlUniversidad: "https://www.mcgill.ca/",
                social:
                  "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666309641/tuempresaenlinea/Devs/icons/LinkedIn_jjkifc.png",
                socialUrl: "https://www.linkedin.com/in/gabbrousset/",
              },
              {
                id: 2,
                src: "https://avatars.githubusercontent.com/u/105229933?v=4",
                nombre: "Armando",
                universidad:
                  "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666309641/tuempresaenlinea/Devs/icons/ITESM_tzfcun.png",
                urlUniversidad:
                  "https://tec.mx/es/computacion-y-tecnologias-de-informacion/ingeniero-en-tecnologias-computacionales",
                social:
                  "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666309641/tuempresaenlinea/Devs/icons/LinkedIn_jjkifc.png",
                socialUrl:
                  "https://www.linkedin.com/in/armando-terrazas-gomez/",
              },
              {
                id: 3,
                src: "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1677594337/Pfps/cubo_m2qsvt.jpg",
                nombre: "Daniel",
                universidad:
                  "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666309641/tuempresaenlinea/Devs/icons/ITESM_tzfcun.png",
                urlUniversidad:
                  "https://tec.mx/es/computacion-y-tecnologias-de-informacion/ingeniero-en-tecnologias-computacionales",
                social:
                  "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666309641/tuempresaenlinea/Devs/icons/LinkedIn_jjkifc.png",
                socialUrl:
                  "https://www.linkedin.com/in/juan-daniel-mu%C3%B1oz-due%C3%B1as-892a72220/",
              },
              {
                id: 4,
                src: "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1677594030/Pfps/curi_lapvee.jpg",
                nombre: "Diego",
                universidad:
                  "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666309641/tuempresaenlinea/Devs/icons/ITESM_tzfcun.png",
                urlUniversidad:
                  "https://tec.mx/es/computacion-y-tecnologias-de-informacion/ingeniero-en-tecnologias-computacionales",
                social:
                  "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666309641/tuempresaenlinea/Devs/icons/LinkedIn_jjkifc.png",
                socialUrl:
                  "https://www.linkedin.com/in/diego-curiel-castellanos-b5b125226/",
              },
            ]}
          />
        </div>
      </div>

*/

/*       
<div className={s.middle}>
        <div className={s.title}> Correo Personalizado </div>
      </div>
      <img
        className={s.middleImg}
        src="https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666483616/tuempresaenlinea/CorreoPersonalizado_e3qcnj.png"
      />
      
*/

/* Project slider 

   <div className={s.verticalGlow}>
        <VerticalSlider
          scroll={true}
          images={[
            {
              src: "/Images/photo.jpg",
              titulo: "Portafolio de Fotografía",
              url: "https://photo.fabianlioner.com",
              desc: "Portafolio personal de fotografía, con un diseño minimalista, elegante y responsivo.",
            },
            {
              src: "/Images/novo.png",
              titulo: "NovoPC",
              url: "https://novopc.mx",
              desc: "Pagina de E-Commerce, vinculada a Shopify, con un diseño moderno y componentes personalizados.",
            },
            {
              src: "/Images/BAMX.jpg",
              titulo: "BAMX Dashboard",
              url: "https://novopc.mx",
              desc: "Aplicación para IOS, Android y Web para el Banco de Alimentos de Mexico. Frontend en Next.js, Backend en firebase",
            },
          ]}
        />
        </div>


        <div className={s.defaultCont}>
        <ProjectSlider
          images={[
            {
              src: "/Images/photo.jpg",
              nombre: "Photography Portfolio",
              desc: "Next.js, Tailwind",
              url: "https://photo.fabianlioner.com",
            },
            {
              src: "/Images/BAMX.jpg",
              nombre: "BAMX App",
              desc: "Cross-platform, React, Lottie",
              url: "https://bagdl16.vercel.app/",
            },

            {
              src: "/Images/novo.png",
              nombre: "NovoPC",
              desc: "E-commerce, Shopify API",
              url: "https://novopc.mx",
            },
          ]}
        />
      </div>
*/

/* 
      <ProductDemo
        lightmode={true}
        is3D={false}
        objPath={"waterbottle_tuempresaenlinea_compressed.glb"}
        imgPath={
          "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1665633593/img_jpfh4a.webp"
        }
        scale={2.8}
        position={[0, -0.05, 0]}
        rotation={[0, -0.2, 0]}
        lightPosition={[0, -5, 7]}
      />
      <Categories />

   
      <div className={s.ecommerceBanner}>
        <div className={s.ecommerceBannerText}>
          Catalogo y checkout con Shopify
        </div>
        <img
          className={s.ecommerceBannerImg}
          src="https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666999145/tuempresaenlinea/icons/shopify_mpimiu.png"
        />
      </div> 
*/

/*       <Contact>
        <div className={s.contactButtCont}>
          <div className={s.contactButton}>¡Ponte en contacto!</div>
        </div>
      </Contact> */
