"use client"
import React, { useEffect } from "react"
import { showSidebar } from "@/store/store"
import { AnimatePresence, motion } from "framer-motion"
import { useMediaQuery } from "@mantine/hooks"
import Link from "next/link"
const items = [
  {
    id: "1",
    title: "پروفایل",
    url: "/",
  },
  {
    id: "2",
    title: "محصولات",
    url: "/products",
  },
  {
    id: "3",
    title: "تنظیمات",
    url: "/setting",
  },
  {
    id: "",
    title: "",
    url: "",
  },
  {
    id: "",
    title: "",
    url: "",
  },
  {
    id: "",
    title: "",
    url: "",
  },
]
const variants = {
  hidden: {
    x: 400,
    transition: { duration: 1 },
  },
  show: {
    x: [400, 0, 30],
    transition: { duration: 0.8 },
  },
  exit: {
    x: [30, 0, 400],
    opacity: 1,
    transition: { duration: 0.6 },
  },
}
const mobileVariants = {
  hidden: {
    y: 500,
    transition: { type: "spring", stiffness: 60, duration: 0.7 },
  },
  show: {
    y: [500, 100],
    transition: { duration: 0.7, type: "spring", stiffness: 60 },
  },
  exit: {
    y: [30, 0, 500],
    transition: {  type: "spring", stiffness: 60, duration: 0.3 },
  },
}
const backOpacity = {
  hiddenOp: {
    opacity: 0,
    transition: { type: "spring", stiffness: 60 },
  },
  showOp: {
    opacity: 1,
    transition: { duration: 0.2, type: "spring", stiffness: 60 },
  },
  exitOp: {
    opacity: 0,
    transition: { duration: 0.1 , type: "spring", stiffness: 60 },
  },
}
function Sidebar() {
  const showSide = showSidebar((state) => state.showSidebar)
  const setShowSide = showSidebar((state) => state.setShowSidebar)
  
  function closeHandler() {
    setShowSide(!showSide)
  }
  const matches = useMediaQuery("(min-width: 768px)")
  useEffect(() => {
    // Add styles to prevent scrolling when the sidebar is open
    if (showSide) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Clean up the effect
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSide]);
  return (
    <AnimatePresence>
      {showSide && (
        <div>
            <motion.div
              onClick={closeHandler}
              variants={backOpacity}
              initial="hiddenOp"
              animate="showOp"
              exit="exitOp"
              className="absolute z-40 mt-16 h-[80%] w-[100%] bg-slate-900/50"
            />
          <motion.div
            variants={matches ? variants : mobileVariants}
            animate="show"
            exit="exit"
            initial="hidden"
            className="fixed bottom-0 z-40 mt-auto h-[500px] w-[100%] rounded-t-[24px] bg-muted-foreground opacity-100 md:bottom-auto md:top-0 md:mt-16 md:h-[calc(100%-4rem)] md:w-[400px] md:rounded-none  "
          >
            {/* <div  className={`${showSide && "  opacity-100 !h-[60%] !md:h-[800px] md:!w-[400px] rounded-t-[24px] md:rounded-none !w-[100%] bottom-0 md:bottom-auto "} opacity-0   transition-all duration-300 absolute   mt-32 md:mt-16 bg-muted-foreground h-[10%] md:w-[40px] md:h-[800px]  `}> */}
            <div className="flex h-[100%] justify-center  md:mr-14 md:justify-start">
              <div>
                <div className="mt-10">
                  <Link href="/" className=" text-2xl font-bold">
                    <p>SOLOP</p>
                  </Link>
                </div>
                <div>
                  {items.map((item) => (
                    <Link
                      href={item.url}
                      className="mt-10 flex justify-center font-med md:mr-4 md:justify-start"
                      key={item.id}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default Sidebar
