"use client"
import React from "react"
import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion"
function ZoomOut({ children }: { children: React.ReactNode }) {
  const SHEET_MARGIN = 100
  const SHEET_RADIUS = 12
  let h = window.innerHeight - SHEET_MARGIN

  let y = useMotionValue(h)
  // Scale the background down and adjust the border radius when the sheet is open.
  let bodyScale = useTransform(
    y,
    [0, h],
    [(window.innerWidth - SHEET_MARGIN) / window.innerWidth, 1]
  )
  let bodyBorderRadius = useTransform(y, [0, h], [SHEET_RADIUS, 0])
  let bodyTranslate = useTransform(y, [0, h], [SHEET_MARGIN - SHEET_RADIUS, 0])

  return (
    <motion.div
      className="h-full overflow-auto bg-white p-4"
      style={{
        scale: bodyScale,
        borderRadius: bodyBorderRadius,
        y: bodyTranslate,
        transformOrigin: "center 0",
      }}
    >
      {children}
    </motion.div>
  )
}

export default ZoomOut
