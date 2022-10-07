import Layout from "../components/layout/layout";
import { Slider } from "../components/slider/slider";
import s from "../styles/Home.module.css";
import React from 'react'


export default function Home() {
  return (
    <Layout> 
          <Slider images ={[
          ["https://eddencei.sirv.com/TuEmpresaEnLinea/BriefcaseIcon.png","uwu"],
          ["https://eddencei.sirv.com/TuEmpresaEnLinea/BriefcaseIcon.png","owo"],
          ["https://eddencei.sirv.com/TuEmpresaEnLinea/BriefcaseIcon.png","unu"],]}/>
    </Layout>
  );
}
