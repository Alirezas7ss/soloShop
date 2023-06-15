import React from "react"

function SkeletonCard() {
  return (
    <div>
          <div className="relative h-[425px] w-[212px] overflow-hidden rounded-lg  shadow before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white hover:shadow-lg">
            <div className="relative h-[420px] w-52 mt-[2px] mr-[2.4px]  overflow-hidden rounded-lg bg-neutral-800 p-2 shadow before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg">
              <div className=" flex h-[280px] w-48 items-center justify-center rounded-t-lg bg-neutral-600"></div>
              <div className="mx-2 mt-3 space-y-3">
                <div className="flex justify-between">
                  <div className="h-5 w-8/12 rounded-full bg-neutral-600"></div>
                  <div className="h- w-6 rounded-full bg-neutral-600"></div>

                </div>
                <div dir="ltr" className="flex gap-2">
                    <div className="h-5 w-8 rounded-full bg-neutral-600"></div>
                    <div className="h-5 w-8 rounded-full bg-neutral-600"></div>
                </div>

                <div dir="ltr" className="flex  justify-between gap-2">
                  <div className="h-5 w-16 rounded-full bg-neutral-600"></div>
                  <div className="h-5 w-12 rounded-full bg-neutral-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default SkeletonCard
