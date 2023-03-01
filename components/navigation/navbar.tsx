import React from "react";
import { Contact } from "../ui/contact/contact";
import s from "./navbar.module.css";

const NavBar = ({}) => {
  return (
    <div className={s.navContainer}>
      <a href="/" className={s.combo}>
        <img
          className={s.icon}
          src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1677684494/Icons/teel_unbpj5.png"
        />
        <div className={s.mainTitle}>Tu Empresa en Línea</div>
      </a>
      <Contact>
        <div className={s.contacto}> Contacto </div>
      </Contact>
    </div>
  );
};

const Footer = ({}) => {
  return (
    <div>
      <div className={s.footerSpacer}></div>
      <div className={s.footer}> Tu Empresa en Línea © 2023</div>
    </div>
  );
};

export { NavBar, Footer };
