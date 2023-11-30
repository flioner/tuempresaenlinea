import React, { useState, useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import s from "./projectSlider.module.css";
import Link from "next/link";

const ProjectSlider = ({ images }) => {
  const swiperRef = useRef(null);
  const swiperInstanceRef = useRef(null);

  const [width, setWidth] = useState(0);
  const [page_width, setPageWidth] = useState(0);
  const elementRef = useRef(null);
  const pageRef = useRef(null);

  const getElementWidth = () => {
    if (elementRef.current) {
      const pageWidth = document.documentElement.offsetWidth;
      const newWidth = elementRef.current.offsetWidth;
      setPageWidth(pageWidth);
      setWidth(newWidth);
    }
  };

  useEffect(() => {
    getElementWidth(); // Initial width

    // console.log("Lenght width:", width); // Log initial width
    // console.log("Slides width:", (width + 17) * images.length); // Log initial width
    // console.log("Page width:", page_width); // Log initial width

    const handleResize = () => {
      getElementWidth(); // Update width on resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, [width, page_width]);

  useEffect(() => {
    if (swiperRef.current && swiperInstanceRef.current) {
      swiperInstanceRef.current.destroy(true, true); // Destroy the previous Swiper instance
    }

    if (swiperRef.current) {
      swiperInstanceRef.current = new Swiper(swiperRef.current, {
        allowTouchMove:
          (width + 17) * images.length > page_width ? true : false,
        slidesPerView: "auto",
        initialSlide: (images.length - 1) / 2,
        centeredSlides: true,
        centerInsufficientSlides: true,
        centeredSlidesBounds: true,
        slideToClickedSlide: true,
      });
    }

    const slides = swiperRef.current.querySelectorAll(".swiper-slide");

    slides.forEach((slide, index) => {
      slide.style.animationDuration = `${(slides.length - index) * 0.4}s`; // Add animation duration based on index
      slide.style.animationDelay = `${index * 0.4}s`; // Add animation delay based on index
    });
  }, [images, width, page_width]);

  return (
    <div ref={pageRef} className={s.cont}>
      <div ref={swiperRef} className="swiper-container">
        <div className="swiper-wrapper">
          {images.map(({ id, src, nombre, desc, url }) => (
            <div className={`swiper-slide ${s.box}`} key={id} ref={elementRef}>
              <div className={s.boxCont}>
                <img className={s.img} src={src} />
                <div className={s.title}>{nombre}</div>
                <div className={s.desc}>{desc}</div>
                <div className={url == "" ? s.hidden : s.visit}>
                  <a href={url} target="_blank" rel="noreferrer">
                    Visit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { ProjectSlider };
