import Layout from "../components/layout/layout";
import { Slider} from "../components/slider/slider";
import s from "../styles/Home.module.css";
import React from 'react'


export default function Home() {
  const images = [
    {
      id: 0,
      src: 'https://golowled.sirv.com/Carrusel/light_0.jpg',
      path: '/0',
    },
    {
      id: 1,
      src: 'https://golowled.sirv.com/Carrusel/light_1.jpg',
      path: '/search/basicas',
    },
    {
      id: 2,
      src: 'https://golowled.sirv.com/Carrusel/light_2.jpg',
      path: '/search/diseno-3d-y-arquitectura',
    },
    {
      id: 3,
      src: 'https://golowled.sirv.com/Carrusel/light_3.jpg',
      path: '/search/gamers-alto-desempeno',
    },
    {
      id: 4,
      src: 'https://golowled.sirv.com/Carrusel/light_4.jpg',
      path: '/search/oficina',
    },
  ]

  return (
    <Layout>
      <div className={s.middle}>
        <div className={s.crop} /* Profile Slider */>
          <Slider images={images} />
        </div>
      </div>


    </Layout>
  );
}
