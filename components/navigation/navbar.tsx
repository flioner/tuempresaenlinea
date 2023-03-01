import Link from "next/link";
import React from "react";
import { Contact } from "../ui/contact/contact";
import s from "./navbar.module.css";
import { useRouter } from "next/router";

const NavBar = ({}) => {
  const { pathname } = useRouter();
  const currPath = useRouter();

  // console.log(pathname);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  const routeTo = (url) => {
    if (pathname == url) {
      scrollToTop();
    } else {
      currPath.push(url);
    }
  };

  return (
    <div className={s.navContainer}>
      <div className={s.combo} onClick={() => routeTo("/")}>
        <img
          className={s.icon}
          src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1677684494/Icons/teel_unbpj5.png"
          alt-text=""
        />
        <div className={s.mainTitle}>Tu Empresa en Línea</div>
      </div>
      <Contact>
        <div className={s.contacto}> Contacto </div>
      </Contact>
    </div>
  );
};

const Footer = ({}) => {
  const { pathname } = useRouter();
  const currPath = useRouter();

  // console.log(pathname);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  const routeTo = (url) => {
    if (pathname == url) {
      scrollToTop();
    } else {
      currPath.push(url);
    }
  };

  return (
    <div>
      <div className={s.footerSpacer}></div>
      <div className={s.footer} onClick={() => routeTo("/")}>
        Tu Empresa en Línea © 2023
      </div>
    </div>
  );
};

export { NavBar, Footer };
