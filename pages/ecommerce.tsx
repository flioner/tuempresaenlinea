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
        is3D = {false}
        objPath = {"waterbottle_tuempresaenlinea_compressed.glb"} 
        imgPath = {"https://res.cloudinary.com/ds5o5hlrl/image/upload/v1665633593/img_jpfh4a.webp"}
        scale={0.03}
        position={[0, -0.5, 0]}
        rotation={[ 0, -0.2, 0]}
        />
    </Layout>
  );
}
