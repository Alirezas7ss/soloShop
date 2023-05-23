import { EmblaOptionsType } from "embla-carousel-react"
import React from "react"
import EmblaCarousel from "./EmblaCarousel"
// import SlideBanner from "./SlideBanner"

function Banner() {
  const OPTIONS: EmblaOptionsType = {}
  const SLIDE_COUNT = 2
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  )
}

export default Banner
