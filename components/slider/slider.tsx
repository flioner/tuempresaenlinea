import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from "swiper";
import 'swiper/css';
import s from './slider.module.css';

const ProfileSlider = ({ images }) => {
  return (
    <Swiper
      loop={true}
   
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={25}

      mousewheel={true}
      modules={[Mousewheel]}
    >
      {images.map(({ id, src, nombre }) => (
        <SwiperSlide  className={s.slide}   key={id}>  
            <img
            className={s.imageCrop} 
            src={src}
            />
            <div className={s.text}> {nombre}</div>
        </SwiperSlide>))}  
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
      
      slidesPerView={1.5}
      centeredSlides={true}
      spaceBetween={15}
   
      mousewheel={true}
      modules={[Mousewheel]}
    >
      {images.map(({ id, src, titulo,desc }) => (
        <SwiperSlide  className={s.slide}   key={id}>  
            <div className={s.verticalSlide}>
              <img className={s.verticalImg} src={src} />
              <div className={s.verticalTextCont}>
              <div className={s.verticalCenter}> 
                  <div className={s.verticalTitle}>{titulo}</div>
                    <div className={s.verticalDesc}>{desc}</div>
                  </div>   
                </div> 
            </div>
        </SwiperSlide>))}  
    </Swiper>
  );
};

export { VerticalSlider };



