"use client"
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
  DotButton,
  PrevButton,
  NextButton,
} from './EmblaCarouselArrowsDotsButtons'
// import imageByIndex from './imageByIndex'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}
import image1 from '/public/banner/banner1.jpg'
import image2 from '/public/banner/banner2.png'
import Image from 'next/image'


export const images = [image1, image2]

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
//   const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  )
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, setScrollSnaps, onSelect])

  return (
    <div className='relative'>
      <div className="embla md:px-7 md:pb-7  ">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {images.map((item ,index) => (
              <div className="embla__slide" key={index}>
                <Image
                  priority
                  className="embla__slide__img bg-slate-400"
                  src={item}
                  alt="Your alt text"
                />
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>

      <div className="embla__dots -bottom-3 md:bottom-3">
        {images.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default EmblaCarousel
