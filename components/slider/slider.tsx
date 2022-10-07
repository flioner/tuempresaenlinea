import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import s from './slider.module.css';

const ProfileSlider = ({ images }) => {
  return (
    <Swiper
  
      spaceBetween={15}
      slidesPerView={3}
      loop={true}
    >
      {images.map(({ id, src, nombre }, idx) => (
        <SwiperSlide  className={s.slide}   key={id}>  
            <img
            className={s.imageCrop} 
            src={src}
            width={978}
            height={550}
            />
            <div className={s.text}> {nombre}</div>
        </SwiperSlide>))}  
    </Swiper>
  );
};

export { ProfileSlider };




