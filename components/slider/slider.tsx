import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = ({ images }) => {


  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
    >

{images.map(({ id, src, path, alt = 'Product Image' }, idx) => (
  <SwiperSlide key={id}>  <img
  src={src}
  alt={alt}
  width={978}
  height={550}
/></SwiperSlide>
        ))}  
    </Swiper>
  );
};

export { Slider };




