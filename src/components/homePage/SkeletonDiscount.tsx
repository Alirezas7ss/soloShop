import React from "react"
import SkeletonCard from "../ui/SkeletonCard"

function SkeletonDiscount() {
  return (
    <div className=" flex flex-nowrap justify-center gap-5 overflow-y-hidden overflow-x-scroll scrollbar-hide">
      {[...new Array(4)].map((_, index) => (
        <div key={index}>
          <SkeletonCard />
        </div>
      ))}
    </div>
  )
}

export default SkeletonDiscount
