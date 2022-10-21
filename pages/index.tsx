import Layout from "../components/layout/layout";
import { ProfileSlider, VerticalSlider } from "../components/slider/slider";
import s from "../styles/Home.module.css";
import React from "react";
import Typewriter from "typewriter-effect";
import { LaptopViewer } from "../components/threejs/canvas";
import { VantaBG } from "../components/threejs/vanta";
import { ObjViewer } from "../components/threejs/threejs";
import { Modal } from "../components/modal/modal";
export default function Home() {
  return (
    <Layout>
      <div /* TYPEWRITER */ className={s.landingContainer}>
        <div className={s.landingText}>
          Empieza tu &nbsp;
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

      <div className={s.middle}>
        <div className={s.title}> Nuestros Desarrolladores Web </div>
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

      <div /* TITLE */ className={s.middle}>
        <div className={s.title}> Diseño Web para cualquier dispositivo </div>
      </div>
      <LaptopViewer />
      <div /* Description (Canvas) */ className={s.delayedMiddle}>
        <div className={s.canvasDesc}>
          Páginas web que se ven bien tanto en dispositivos móbiles, como de
          escritorio
        </div>
      </div>
    </Layout>
  );
}
