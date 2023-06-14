"use client"
import { useState, useId } from "react"
const variants = {
  hidden: {
    y: 50,
    transition: { type: "spring", stiffness: 60, duration: 0.7 },
  },
  show: {
    y: [50, 0],
    transition: { duration: 0.7, type: "spring", stiffness: 60 },
  },
  exit: {
    y: [30, 0, 500],
    transition: { type: "spring", stiffness: 60, duration: 0.3 },
  },
}
interface CarouselProps {
    imgArr: string[]
}
import { AnimatePresence, motion } from "framer-motion"
export default function SecondeCarousel({imgArr}: CarouselProps) {
//   const imgArr = [
//     "https://res.cloudinary.com/dzdqy3wfg/image/upload/v1682255635/jzeh72nmymbbwlapd2ib.webp",
//     "https://res.cloudinary.com/dzdqy3wfg/image/upload/v1682255653/slhcqfaobiwxdnwi2fjb.png",
//     "https://res.cloudinary.com/dzdqy3wfg/image/upload/v1682255677/c6jfvp6suz6lh5jxsrak.jpg",
//     "https://res.cloudinary.com/dzdqy3wfg/image/upload/v1682255678/kekbspbfrzkndrozemci.jpg",
//     "https://res.cloudinary.com/dzdqy3wfg/image/upload/v1682255679/ar83tuk6uqlsesfo3wkj.jpg",
//     "https://res.cloudinary.com/dzdqy3wfg/image/upload/v1682256476/jdklp7ldnmijfz36gzwu.png",
//     "https://res.cloudinary.com/dzdqy3wfg/image/upload/v1682259104/zxnlhfskid5ywvkzg7h1.jpg",
//     "https://res.cloudinary.com/dzdqy3wfg/image/upload/v1682102352/bsuao4rnyksaim7xz0pz.jpg",
//   ]

const [falseI, setFalseI] = useState(1)
const [imgIndex, setImgIndex] = useState<number>(0)
async function clickHandler(index: number) {
    setFalseI(0)
    setTimeout(() => { setFalseI(1)}, 1);
    setImgIndex(index)
}
  console.log(imgIndex)
  const DevImgsId = useId()
  return (
    <div className="flex h-screen flex-col items-center justify-center p-5">
      <div className="h-[500px] w-[500px] border bg-slate-200">
        <AnimatePresence>
          <div className="relative h-[500px]  w-full object-contain">
            {imgArr[imgIndex] && falseI && (
              <motion.img
                variants={variants}
                animate="show"
                exit="exit"
                initial="hidden"
                className="w-full h-[500px] p-5 object-contain"
                src={imgArr[imgIndex]}
                alt=""
              />
            )}
          </div>
        </AnimatePresence>

        <div className="flex items-center scroll-smooth">
          <svg
            onClick={() =>
              (document.getElementById(DevImgsId)!.scrollLeft -= 200)
            }
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`h-12 w-12 cursor-pointer select-none ${
              imgArr.length < 3 && "pointer-events-none opacity-50"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>

          <div
            id={DevImgsId}
            className="flex w-full gap-3 overflow-auto scroll-smooth transition-all duration-500 scrollbar-hide"
          >
            {imgArr.map((img: string, index: number) => (
              <img
                src={img}
                onClick={() => {clickHandler(index)}}
                className="h-32 w-32 rounded-sm object-cover"
                alt=""
              />
            ))}
          </div>

          <svg
            onClick={() =>
              (document.getElementById(DevImgsId)!.scrollLeft += 200)
            }
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`h-12 w-12 cursor-pointer select-none ${
              imgArr.length < 3 && "pointer-events-none opacity-50"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

// (getThis(document) as Document).getElementById(DevImgsId)!.scrollLeft += 100
