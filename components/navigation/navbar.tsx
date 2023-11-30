import Link from "next/link";
import React, { useState } from "react";
import { Contact } from "../ui/contact/contact";
import s from "./navbar.module.css";
import { useRouter } from "next/router";
import { Modal } from "../ui/modal/modal";

const NavBar = ({}) => {
  const { pathname } = useRouter();
  const currPath = useRouter();
  const [modalOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const routeTo = (url) => {
    if (pathname == url) {
      scrollToTop();
    } else {
      if (url.includes("http")) {
        window.open(url, "_blank");
      } else {
        currPath.push(url);
      }
    }
  };

  const navOptions = [
    {
      txt: "Proyectos",
      url: "/proyectos",
    },
    {
      txt: "Experiencia",
      url: "/experiencia",
    },
    {
      txt: "Acerca de",
      url: "/acerca-de",
    },
    {
      txt: "Github",
      url: "https://github.com/flioner",
    },
    {
      txt: "LinkedIn",
      url: "https://www.linkedin.com/in/fabianlioner/",
    },
  ];

  return (
    <>
      <div className={pathname == "/" ? s.navContainer : s.navMainContainer}>
        <div className={s.combo} onClick={() => routeTo("/")}>
          <div className={s.mainTitle}>Flioner</div>
        </div>

        <div className={s.menu} onClick={openModal}>
          <img className={s.menuIcon} src="Icons/menu.png" />
        </div>

        <div className={s.navBody}>
          {navOptions.map(({ txt, url }, index) => (
            <a href={url} className={s.navTxt} key={index}>
              {txt}
            </a>
          ))}
        </div>

        <Contact>
          <div className={s.mainTitle}> Contacto </div>
        </Contact>
      </div>
      <Modal isOpen={modalOpen} setOpen={openModal} float={true}>
        <>
          <div className={s.modalBg} onClick={closeModal} />
          <div className={s.modalBody}>
            {navOptions.map(({ txt, url }, index) => (
              <a href={url} className={s.modalTxt} key={index}>
                {txt}
              </a>
            ))}
          </div>
        </>
      </Modal>
    </>
  );
};

const Footer = ({}) => {
  const { pathname } = useRouter();
  const currPath = useRouter();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
        <div className={s.footerTxt}> Fabian Lioner © 2023</div>
      </div>
    </div>
  );
};

export { NavBar, Footer };

/* 
// ICON
        <img
          className={s.icon}
          src="https://res.cloudinary.com/dgb1oqgt3/image/upload/v1677684494/Icons/teel_unbpj5.png"
          alt-text=""
        />
        
*/
