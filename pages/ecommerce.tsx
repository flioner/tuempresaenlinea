import Layout from "../components/layout/layout";
import { ProfileSlider, VerticalSlider } from "../components/slider/slider";
import s from "../styles/Home.module.css";
import React from 'react'
import { ProductDemo } from "../components/product_demo/productDemo";

export default function Home() {
  return (
    <Layout> 
        <ProductDemo
        lightmode = {true}
        is3D = {true}
        objPath = {"waterbottle_tuempresaenlinea_compressed.glb"} 
        imgPath = {"https://res.cloudinary.com/ds5o5hlrl/image/upload/v1665633593/img_jpfh4a.webp"}
        scale={2.8}
        position={[0, -0.05, 0]}
        rotation={[ 0, -0.2, 0]}
        lightPosition ={[0, -5 ,7]}
        />
    </Layout>
  );
}

