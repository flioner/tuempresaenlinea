import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import s from "./slider.module.css";

const Slider = ({ images }) => {
  const slidesPerView = 1;
  const numberSlides = slidesPerView + 1;
  const [slidesDetails, setSlidesDetails] = React.useState(null);
  const [sliderRef] = useKeenSlider({
    initial: 1,

    mode: "snap",

    slides: { origin: "center", perView: 3, spacing: 10 },
    loop: true,
  });

  return (
    <div className={s.middle}>
      <div className="keen-slider" ref={sliderRef}>
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
  const slidesPerView = 1;
  const numberSlides = slidesPerView + 1;
  const [slidesDetails, setSlidesDetails] = React.useState(null);
  const [sliderRef] = useKeenSlider(
    {
      initial: 1,

      mode: "snap",

      slides: { origin: "center", perView: 3, spacing: 10 },
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
    <div className={s.middle}>
      <div className="keen-slider" ref={sliderRef}>
        {[...Array(images.length).keys()].map((idx) => {
          return (
            <div key={idx} className="keen-slider__slide">
              <div className={s.slide}>
                <img className={s.image} src={images[idx][0]} />
                <div className={s.text}> {images[idx][1]} </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Slider, AutoplaySlider };
