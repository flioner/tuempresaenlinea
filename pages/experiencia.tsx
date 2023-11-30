import Layout from "../components/layout/layout";
import Head from "next/head";
import s from "../styles/Home.module.css";
import React from "react";

export default function Home() {
  const experiencia = [
    {
      src: "/icons/ITESM.png",
      nombre: "On Campus Intern",
      company: "Tec de Monterrey",
      desc: "Maintaining and updating a PHP backend and drupal based websites. Refactoring, documenting and migrating internal tools to Next.js.",
      skills: "React, PHP, Scrum, Docker",
      initial: "Agosto 2023",
      final: "",
      current: true,
      url: "https://tec.mx/es",
    },
    {
      src: "/icons/novo.png",
      nombre: "Web Developer",
      company: "NovoPC",
      desc: "Full-Stack development of an E-Commerce site using the Shopify API, Next.js, Tailwind and Vercel.",
      skills: "Next.js, Tailwind, React, Typescript",
      initial: "Marzo 2022",
      final: "Noviembre 2022",
      current: false,
      url: "https://novopc.mx",
    },
    {
      src: "/icons/ml.png",
      nombre: "Software Developer",
      company: "Magic Lantern",
      desc: "Firmware decompilation using Ghidra via a Linux VM to update function stubs.Injection of code to obtain the firmware signature.",
      skills: "C, Linux, Qemu, ARM, Assembly ",
      initial: "Enero 2021",
      final: "Marzo 2021",
      current: false,
      url: "  https://www.magiclantern.fm/",
    },
  ];

  const skills = [
    { nombre: "CSS", años: "4" },
    { nombre: "Scrum", años: "1" },
    { nombre: "Docker", años: "1" },
    { nombre: "C++", años: "3" },
    { nombre: "C", años: "3" },
    { nombre: "Linux", años: "2" },
    { nombre: "React", años: "4" },
    { nombre: "Next.js", años: "4" },
  ];

  return (
    <Layout>
      <div>
        <Head>
          <title>Experiencia</title>
        </Head>

        <div className={s.eTitle}>Experiencia Profesional</div>

        <div className={s.mainCont}>
          {experiencia.map(
            (
              {
                src,
                nombre,
                company,
                desc,
                skills,
                initial,
                final,
                current,
                url,
              },
              index
            ) => (
              <div className={index == 0 ? s.eCont : s.eContS} key={index}>
                <img src={src} className={s.eImgS} />
                <div className={s.eTxtContS}>
                  <div className={s.eTitleS}>{nombre}</div>
                  <a href={url} className={s.eCompanyS}>
                    {company}
                  </a>
                  <div className={s.eDateS}>
                    {initial + " - " + (current ? "Current" : final)}
                  </div>
                  <div className={s.eDescS}>{desc}</div>
                  <div className={s.eSkillsS}>{skills}</div>
                </div>
              </div>
            )
          )}

          <div className={s.skillCont}>
            {skills.map(({ nombre, años }, index) => (
              <div className={s.skill} key={index}>
                <div className={s.skillTxt}>{nombre}</div>
                <div className={s.skillY}>{"(" + años + "y)"}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

/*  {"(" + años + (años != "1" ? " años)" : " año)")} */
