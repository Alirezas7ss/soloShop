'use client'
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
  imageByIndex: string[]
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, imageByIndex } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div dir='ltr' className="embla_product flex">
      <div className="embla_product__viewport" ref={emblaMainRef}>
        <div className="embla_product__container">
          {imageByIndex.map((item , index) => (
            <div className="embla_product__slide" key={index}>
              
              <img
                className="embla_product__slide__img"
                src={item}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla_product-thumbs">
        <div className="embla_product-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla_product-thumbs__container space-y-5 flex-col">
            {imageByIndex.map((item , index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                imgSrc={item}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
