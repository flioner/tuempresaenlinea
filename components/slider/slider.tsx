import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Autoplay } from "swiper";
import 'swiper/css';
import s from './slider.module.css';

const ProfileSlider = ({ images }) => {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      
  
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={35}

      mousewheel={true}
      modules={[Mousewheel, Autoplay]}
    
    >
      {images.map(({ id, src, nombre }) => (
        <SwiperSlide  className={s.profileSlide}   key={id}>  
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
        <SwiperSlide  className={s.slide}   key={id}>  
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
        </SwiperSlide>))}  
    </Swiper>
  );
};

export { VerticalSlider };



