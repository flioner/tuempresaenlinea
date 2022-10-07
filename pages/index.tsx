import Layout from "../components/layout/layout";
import { ProfileSlider, VerticalSlider } from "../components/slider/slider";
import s from "../styles/Home.module.css";
import React from 'react'
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <Layout> 
    <div className={s.landingContainer}>
      <div className={s.landingText}>
      Empieza tu &nbsp;
        <div className={s.typewriter}>
          <Typewriter 
              options={{
              strings: ['Página Web', 'Tienda en linea', 'Portafolio Digital'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>

      <VerticalSlider /* VERTICAL SLIDER*/ images ={[
        {
          id: 0,
          src: 'https://eddencei.sirv.com/TuEmpresaEnLinea/bgImg.jpg',
          titulo: 'Portafolio',
          desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies luctus, nunc nisl aliquam nisl',
        },
        {
          id: 1,
          src: 'https://eddencei.sirv.com/TuEmpresaEnLinea/bgImg.jpg',
          titulo: 'E-Commerce',
          desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies luctus, nunc nisl aliquam nisl',
        },
        {
          id: 2,
          src: 'https://eddencei.sirv.com/TuEmpresaEnLinea/bgImg.jpg',
          titulo: 'Showroom',
          desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies luctus, nunc nisl aliquam nisl',
        },
        {
          id: 3,
          src: 'https://eddencei.sirv.com/TuEmpresaEnLinea/bgImg.jpg',
          titulo: 'Landing Page',
          desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies luctus, nunc nisl aliquam nisl',
        },
      ]}/>

      <div className={s.middle} /* PROFILE SLIDER*/>
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

    </Layout>
  );
}
