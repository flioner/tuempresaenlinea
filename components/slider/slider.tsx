import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay } from "swiper";
import "swiper/css";
import s from "./slider.module.css";
import { Modal } from "../modal/modal";
import Link from "next/link";

const ProfileSlider = ({ images }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalKey, setKey] = useState(0);
  const [oldKey, newKey] = useState(0);

  function openModal(id) {
    if (oldKey == id) {
      setKey(id);
      setIsOpen(true);
    }
  }

  function IfNotEqual(id) {
    if (oldKey != id) {
      setKey(id);
    }
  }
  function closeModal() {
    setIsOpen(false);
  }

  function toggleModal(id) {
    setKey(id);
    setIsOpen(!modalIsOpen);
  }

  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: modalIsOpen ? 200000 : 10000,
        disableOnInteraction: true,
      }}
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={35}
      mousewheel={true}
      modules={[Mousewheel, Autoplay]}
      slideToClickedSlide={true}
      onSlideChangeTransitionEnd={(swiper) => {
        newKey(swiper.realIndex), IfNotEqual(swiper.realIndex);
      }}
    >
      {images.map(({ id, src, nombre }) => (
        <SwiperSlide className={s.profileSlide} key={id}>
          <img
            onClick={() => openModal(id)}
            className={s.imageCrop}
            src={src}
          />
          <div className={s.text}> {nombre}</div>
        </SwiperSlide>
      ))}
      {images.map(({ id, universidad, social, urlUniversidad, socialUrl }) => (
        <Modal
          isOpen={
            modalIsOpen &&
            modalKey === id &&
            (universidad != null || social != null)
          }
          setOpen={setIsOpen}
          key={id}
        >
          <div className={s.profileModal}>
            <img
              className={s.icon}
              src="/icons/closeIcon.png"
              onClick={() => closeModal()}
            />
            <a
              className={s.url}
              href={urlUniversidad}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={universidad != null ? s.modalImg : s.hidden}
                src={universidad}
              />
            </a>

            <a
              className={s.url}
              href={socialUrl}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={social != null ? s.modalImg : s.hidden}
                src={social}
              />
            </a>
          </div>
          <div className={s.bgModal} onClick={() => closeModal()} />
        </Modal>
      ))}
    </Swiper>
  );
};

export { ProfileSlider };

const VerticalSlider = ({ images }) => {
  return (
    <Swiper
      className={s.verticalCont}
      direction={"vertical"}
      loop={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      slidesPerView={1.5}
      centeredSlides={true}
      spaceBetween={15}
      mousewheel={true}
      modules={[Mousewheel, Autoplay]}
    >
      {images.map(({ id, src, titulo, desc, url }) => (
        <SwiperSlide className={s.slide} key={id}>
          <div className={s.verticalSlide}>
            <img className={s.verticalImg} src={src} />
            <div className={s.verticalTextCont}>
              <div className={s.verticalCenter}>
                <a href={url}>
                  <div className={s.verticalTitle}>{titulo}</div>
                </a>
                <div className={s.verticalDesc}>{desc}</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { VerticalSlider };
