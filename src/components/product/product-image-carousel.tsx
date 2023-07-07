"use client"

import * as React from "react"
import Image from "next/image"
import { type StoredFile } from "@/types"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface ProductImageCarouselProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  images: string[]
}

export function ProductImageCarousel({
  images,
  className,
  ...props
}: ProductImageCarouselProps) {
  const imagesRef = React.useRef<HTMLDivElement>(null)
  const [currentImage, setCurrentImage] = React.useState(0)

  const goToSlide = React.useCallback((index: number) => {
    if (!imagesRef.current) return

    const imageWidth = imagesRef.current.children[0]?.clientHeight ?? 0
    imagesRef.current.style.transform = `translateY(-${imageWidth * index}px)`
    setCurrentImage(index)
  }, [])

  const getNextSlide = React.useCallback(() => {
    if (currentImage === images.length - 1) {
      goToSlide(0)
      return
    }
    goToSlide(currentImage + 1)
  }, [currentImage, images.length, goToSlide])

  const getPrevSlide = React.useCallback(() => {
    if (currentImage === 0) {
      goToSlide(images.length - 1)
      return
    }
    goToSlide(currentImage - 1)
  }, [currentImage, images.length, goToSlide])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === "ArrowLeft") {
        getPrevSlide()
      } else if (event.key === "ArrowRight") {
        getNextSlide()
      }
    },
    [getNextSlide, getPrevSlide]
  )

  return (
    <div
      dir="ltr"
      aria-label="Product image carousel"
      className={cn("flex ", className)}
      {...props}
    >
      {images.length > 1 ? (
        <div className="  flex md:w-48 w-32 flex-col items-center justify-center gap-2">
          <div
            // size="icon"
            className="ml-0.5 aspect-square  cursor-pointer rounded-none border  p-2 hover:bg-accent sm:ml-2 sm:p-1"
            onClick={getPrevSlide}
          >
            {" "}
            <Icons.chevronUp
              className="h-3 w-3 sm:h-4 sm:w-4"
              aria-hidden="true"
            />
            <span className="sr-only">Previous slide</span>
          </div>
          {images.map((image, i) => (
            <Button
              key={i}
              variant="outline"
              //   size="icon"
              className={cn(
                "group relative aspect-square h-full w-full max-w-[100px] rounded-none shadow-sm hover:bg-transparent focus-visible:ring-foreground",
                i === currentImage && "ring-1 ring-foreground"
              )}
              onClick={() => goToSlide(i)}
              onKeyDown={handleKeyDown}
            >
              <div
                className={cn(
                  "absolute inset-0 z-10 bg-zinc-950/30 group-hover:bg-zinc-950/10",
                  i === currentImage && " bg-zinc-950/10"
                )}
              />
              <Image
                src={image}
                alt="aa"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
              />
              <span className="sr-only">
                Slide {i + 1} of {images.length}
              </span>
            </Button>
          ))}
          <div
            // size="icon"
            className="ml-0.5 aspect-square  cursor-pointer rounded-none border  p-2 hover:bg-accent sm:ml-2 sm:p-1"
            onClick={getNextSlide}
          >
            <Icons.chevronDown
              className="h-3 w-3  sm:h-4 sm:w-4"
              aria-hidden="true"
            />
            <span className="sr-only">Next slide</span>
          </div>
        </div>
      ) : null}
      <div className="relative w-58 md:w-96 aspect-[9/13]  overflow-hidden">
        <div
          aria-live="polite"
          className="flex  flex-col transition-transform duration-500 ease-in-out"
          ref={imagesRef}
        >
          {images.length > 0 ? (
            images.map((image, index) => (
              <Image
                aria-label={`Slide ${index + 1} of ${images.length}`}
                role="group"
                aria-roledescription="slide"
                key={index}
                src={image}
                alt="aaa"
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            ))
          ) : (
            <div
              aria-label="Placeholder"
              role="img"
              aria-roledescription="placeholder"
              className="flex aspect-square h-full w-full flex-1 items-center justify-center bg-secondary"
            >
              <Icons.placeholder
                className="h-9 w-9 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
