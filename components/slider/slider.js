import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import s from "./slider.module.css";
import cn from "clsx";
const Slider = ({ images }) => {
  const maxSlides = 5;
  var slides = 1;
  if (images.length <= maxSlides) {
    slides = images.length;
  } else {
    slides = maxSlides;
  }
  const [sliderRef] = useKeenSlider({
    initial: 1,

    mode: "snap",

    slides: { perView: slides, spacing: 25 },
    loop: true,
  });

  return (
    <div className="keen-slider" ref={sliderRef}>
      <div className={s.middle}>
        {[...Array(images.length).keys()].map((idx) => {
          return (
            <div key={idx} className="keen-slider__slide">
              <div className={s.slide}>
                <img
                  className={!images[idx][2] ? s.image : s.imageCrop}
                  src={images[idx][0]}
                />
                <div className={s.text}> {images[idx][1]} </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AutoplaySlider = ({ images }) => {
  const maxSlides = 5;
  var slides = 1;
  if (images.length <= maxSlides) {
    slides = images.length;
  } else {
    slides = maxSlides;
  }
  const [sliderRef] = useKeenSlider(
    {
      initial: 1,

      mode: "snap",

      slides: { perView: slides, spacing: 25 },
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 10000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="keen-slider" ref={sliderRef}>
      {[...Array(images.length).keys()].map((idx) => {
        return (
          <div key={idx} className={s.middle}>
            <div className="keen-slider__slide">
              <div className={s.slide}>
                <img
                  className={!images[idx][2] ? s.image : s.imageCrop}
                  src={images[idx][0]}
                />
                <div className={s.text}> {images[idx][1]} </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const VerticalSlider = ({ content }) => {
  const [sliderRef] = useKeenSlider(
    {
      initial: 0,

      breakpoints: {
        "(min-width: 1100px)": {
          dragSpeed: 1,
        },
      },
      dragSpeed: 0.5,
      mode: "snap",
      slides: { origin: "center", perView: 1.5, spacing: 10 },
      loop: true,
      vertical: true,
      renderMode: "precision",
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 10000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className={cn("keen-slider", s.verticalCont)} ref={sliderRef}>
      {[...Array(content.length).keys()].map((idx) => {
        return (
          <div key={idx} className="keen-slider__slide">
            <div className={s.verticalSlide}>
              <img className={s.verticalImg} src={content[idx][0]} />

              <div className={s.verticalTextCont}>
                <div className={s.verticalTitle}>{content[idx][1]}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};


const VerticalTest = ({ content }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center",
      perView: 2,
      spacing: 10,
    },
    mode: "snap",
    vertical: true,
  })
  return (
    <div ref={sliderRef} className="keen-slider" style={{ height: 300 }}>
      <div className="keen-slider__slide"><div className={s.verticalTest}>
                1
              </div></div>
              <div className="keen-slider__slide"><div className={s.verticalTest}>
                2
              </div></div><div className="keen-slider__slide"><div className={s.verticalTest}>
                3
              </div></div><div className="keen-slider__slide"><div className={s.verticalTest}>
                4
              </div></div><div className="keen-slider__slide"><div className={s.verticalTest}>
                5
              </div></div>
     
    </div>
  )
};
  

export { Slider, AutoplaySlider, VerticalSlider, VerticalTest };
