"use client"
import React, { useEffect, useState } from "react"
import type { ComponentProps } from "react"
import Image from "next/image"
import { useMotionTemplate, motion, useMotionValue } from "framer-motion"
import { MouseEvent } from "react"
interface Props extends ComponentProps<typeof Image> {
  size: number
  zoom: number
}
export default function ZoomImage({ size, zoom, ...props }: Props) {
  const [isHovered, setIsHovered] = useState(false)

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top, bottom, right, width, height } =
      currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left - 100)
    mouseY.set(clientY - top - 100)
    setMousePosition({
      x: clientX/2 - left  ,
      y: clientY/2 - top ,
      // x: ((clientX * zoom) / width) * size,
      // y: ((clientY * zoom) / height) * size,
    })
    console.log(height)
    console.log(width)
    console.log(left)
    console.log(clientY - top)
    console.log(clientX/2 - left)
    console.log(mousePosition.x)
    console.log(mousePosition.y)
  }

  // const mousePosition = useMousePosition();
  // const handleMouseEnter = () => {
  //   setIsZoomed(true)
  // }

  // const handleMouseLeave = () => {
  //   setIsZoomed(false)
  // }

  // const handleMouseMoveTwo = (e: React.MouseEvent<HTMLDivElement>) => {
  //   setMousePosition({
  //     x: e.pageX ,
  //     y: e.pageY ,
  //   })
  //   console.log(0mousePosition.x)
  //   console.log(mousePosition.y)
  // }

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {setIsHovered(false)
        setMousePosition({
          x: 0 ,
          y: 0,
        })
      }}
      onMouseMove={handleMouseMove}
    >
      <Image
        {...props}
        alt="Image"
        style={{
          objectPosition: `${-mousePosition.x}px ${-mousePosition.y}px`,

          zIndex: 999,
        }}
        className={` h-auto w-full md:hover:scale-[2] transition-all duration-500`}
      
      />

      {/* {isHovered && (
        <motion.div
          className="absolute border  border-gray-300 shadow-lg "
          style={{
            top: mouseY,
            left: mouseX,
            width: `${size}px` ,
            height: `${size}px` ,
            backgroundImage: `url(${props.src})`,
            backgroundPosition: `${-mousePosition.x}px ${-mousePosition.y}px`,
            backgroundSize: `${size * zoom}px`,
            backgroundRepeat: "no-repeat",
            zIndex: 999,
          }}
        />
      )} */}
    </div>
  )
}
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  })
  useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return mousePosition
}
