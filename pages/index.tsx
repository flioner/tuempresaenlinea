import Layout from "../components/layout/layout";
import { ProfileSlider, VerticalSlider } from "../components/slider/slider";
import s from "../styles/Home.module.css";
import React from 'react'
import Typewriter from 'typewriter-effect';
import { LaptopViewer } from "../components/threejs/canvas";
import { VantaBG } from "../components/threejs/vantajs";
import { ObjViewer } from "../components/threejs/threejs";

export default function Home() {
  return (
    <Layout> 
      <div /* TYPEWRITER */ className={s.landingContainer}>
        <div className={s.landingText}>
        Empieza tu &nbsp;
          <div className={s.typewriter}>
            <Typewriter 
                options={{
                strings: ['Página Web.', 'Tienda en línea.', 'Portafolio Digital.'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <VantaBG />
      </div>

      <div  /* VERTICAL SLIDER */ className={s.verticalGlow}>
      <VerticalSlider images ={[
        {
          id: 0,
          src: 'https://eddencei.sirv.com/TuEmpresaEnLinea/bgImg.jpg',
          titulo: 'Portafolio',
          url: '/portafolio',
          desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies luctus, nunc nisl aliquam nisl',
        },
        {
          id: 1,
          src: 'https://eddencei.sirv.com/TuEmpresaEnLinea/bgImg.jpg',
          titulo: 'E-Commerce',
          url: '/ecommerce',
          desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies luctus, nunc nisl aliquam nisl',
        },
        {
          id: 2,
          src: 'https://eddencei.sirv.com/TuEmpresaEnLinea/bgImg.jpg',
          titulo: 'Showroom',
          url: '/showroom',
          desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies luctus, nunc nisl aliquam nisl',
        },
        {
          id: 3,
          src: 'https://eddencei.sirv.com/TuEmpresaEnLinea/bgImg.jpg',
          titulo: 'Landing Page',
          url: '/landingpage',
          desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies luctus, nunc nisl aliquam nisl',
        },
      ]}/>
      </div>

      <div className={s.middle} ><div className={s.title}> Nuestros Desarrolladores Web </div></div>
      
      <div /* PROFILE SLIDER */ className={s.middle} >
        <div className={s.crop}>
          <ProfileSlider images ={[
            {
              id: 0,
              src: 'https://eddencei.sirv.com/TuEmpresaEnLinea/pfp.webp',
              nombre: 'Dev 1',
            },
            {
              id: 1,
              src: 'https://eddencei.sirv.com/TuEmpresaEnLinea/pfp.webp',
              nombre: 'Dev 2'
            },
            {
              id: 2,
              src: 'https://eddencei.sirv.com/TuEmpresaEnLinea/pfp.webp',
              nombre: 'Dev 3'
            },
            {
              id: 3,
              src: 'https://eddencei.sirv.com/TuEmpresaEnLinea/pfp.webp',
              nombre: 'Dev 4'
            },
            {
              id: 4,
              src: 'https://eddencei.sirv.com/TuEmpresaEnLinea/pfp.webp',
              nombre: 'Dev 5'
            },
          ]}/>
        </div>
      </div>

      <div /* TITLE */ className={s.middle} ><div className={s.title}> Diseño Web para cualquier dispositivo </div></div>
      <LaptopViewer />
    </Layout>
  );
}
