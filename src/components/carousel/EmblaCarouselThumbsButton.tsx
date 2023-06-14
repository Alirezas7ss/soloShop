import React from 'react'

type PropType = {
  selected: boolean
  imgSrc: string
  index: number
  onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, imgSrc, index, onClick } = props

  return (
    <div
      className={'embla_product-thumbs__slide'.concat(
        selected ? ' embla_product-thumbs__slide--selected' : '',
      )}
    >
      <button
        onClick={onClick}
        className="embla_product-thumbs__slide__button"
        type="button"
      >
        <div className="embla_product-thumbs__slide__number">
          <span>{index + 1}</span>
        </div>
        <img
          className="embla_product-thumbs__slide__img"
          src={imgSrc}
          alt="Your alt text"
        />
      </button>
    </div>
  )
}
