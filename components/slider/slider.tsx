import cn from 'clsx'
import s from './slider.module.css'
import { useKeenSlider } from 'keen-slider/react'

import React, { useState } from 'react'

interface CarouselProps {
  images: { id: number | string; src: string; path: string; alt?: string }[]
  className?: string
}

const Slider: React.FC<CarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      loop: true,
      mode: 'snap',
     
      slides: { origin: 'center', perView: 1.5, spacing: 10 },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false

        function clearNextTimeout() {
          clearTimeout(timeout)
        }

        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })

        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ]
  )

  return (
    <>
    <div
        ref={sliderRef}
        className={cn('keen-slider', s.root, s.navigationWrapper)}
      >
        {images.map(({ id, src, path, alt = 'Product Image' }, idx) => (
          <div className={cn('keen-slider__slide', s.slide)} key={id}>
          
          
                <img
                  src={src}
                  alt={alt}
                  width={978}
                  height={550}
          
                  className={s.img}
         
             
                />
      
     
          </div>
        ))}
      </div>
    </>
  )
}

export { Slider }
