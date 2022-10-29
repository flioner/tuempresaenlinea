import Layout from "../components/layout/layout";
import { ProfileSlider, VerticalSlider } from "../components/ui/slider/slider";
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

export default function Home() {
  const [visibleDot, setDots] = useState(false);
  return (
    <Layout>
      <div /* TYPEWRITER */ className={s.landingContainer}>
        <div className={s.landingText}>
          Hacemos tu &nbsp;
          <div className={s.typewriter}>
            <Typewriter
              options={{
                strings: [
                  "Página Web.",
                  "Tienda en línea.",
                  "Portafolio Digital.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <VantaBG />
      </div>

      <div /* VERTICAL SLIDER */ className={s.verticalGlow}>
        <VerticalSlider
          scroll={true}
          images={[
            {
              id: 0,
              src: "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666322814/tuempresaenlinea/Carousel/Portfaolio_lhyjh9.jpg",
              titulo: "Portafolio",
              url: "/portafolio",
              desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies luctus, nunc nisl aliquam nisl",
            },
            {
              id: 1,
              src: "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666322996/tuempresaenlinea/Carousel/Showroom_d0vmrc.jpg",
              titulo: "E-Commerce",
              url: "/ecommerce",
              desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies luctus, nunc nisl aliquam nisl",
            },
            {
              id: 2,
              src: "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666322804/tuempresaenlinea/Carousel/Ecommerce_vbtvxz.webp",
              titulo: "Showroom",
              url: "/showroom",
              desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies luctus, nunc nisl aliquam nisl",
            },
          ]}
        />
      </div>

      <div className={s.middle} /* DEVS */>
        <div className={s.title}> Nuestros Desarrolladores Web </div>
      </div>
      <div className={s.middle} /* PROFILE SLIDER */>
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
                src: "https://eddencei.sirv.com/TuEmpresaEnLinea/pfp.webp",
                nombre: "Dev 3",
              },
              {
                id: 3,
                src: "https://eddencei.sirv.com/TuEmpresaEnLinea/pfp.webp",
                nombre: "Dev 4",
              },
              {
                id: 4,
                src: "https://eddencei.sirv.com/TuEmpresaEnLinea/pfp.webp",
                nombre: "Dev 5",
              },
            ]}
          />
        </div>
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

      <div /* TITLE */ className={s.middle}>
        <div className={s.title}> Correo Personalizado </div>
      </div>
      <img
        className={s.middleImg}
        src="https://res.cloudinary.com/ds5o5hlrl/image/upload/v1666483616/tuempresaenlinea/CorreoPersonalizado_e3qcnj.png"
      />
    </Layout>
  );
}
