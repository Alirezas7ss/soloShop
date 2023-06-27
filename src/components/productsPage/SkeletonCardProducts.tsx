import { ProductList } from "@/types"
import { Star } from "lucide-react"
import Image from "next/image"
import React from "react"

function SkeletonCardProducts() {
  return (
    <div className="  group relative h-[500px] w-[300px]  ">
      <div className="mr-[50%]  h-[1px] w-[70%] translate-x-[50%] bg-light-custom-gradient  transition-all duration-1000 ease-in-out group-hover:w-full dark:bg-custom-gradient " />
      {/* <div className="absolute hidden group-hover:flex rounded-bl-full rounded-br-full  top-0 overflow-hidden  aspect-square w-full h-1/3  items-center justify-center">
      <div className="translate-z-0 absolute inset-0 bg-custom-gradient opacity-50 blur-[120px]" />
    </div> */}
      <div className="absolute -z-10 left-1/2 top-24 hidden aspect-square w-32 -translate-x-1/2   items-center justify-center group-hover:flex">
        <div className="translate-z-0 absolute inset-0 rounded-full opacity blur-[120px] opacity-50 bg-zinc-50  " />
      </div>
      <div className="flex items-center justify-between">
        <div className="h-[400px] w-[1px] items-center  justify-center  bg-light-custom-y-gradient  transition-all duration-1000 group-hover:h-[470px] dark:bg-custom-y-gradient" />
        <div className="p-5 hover:shadow-md">
          <div className="h-[300px] w-[200px]  bg-slate-400 animate-pulse"></div>
          <div className="mx-2 mt-3  ">
            <div className="  h-[1px] bg-custom-gradient " />
            <p className=" my-1  h-5 w-20 rounded-md bg-slate-400 animate-pulse "></p>
            <div dir="ltr" className="space-y-4 text-sm">
              <div className="flex justify-between">
                <div className="flex items-center  space-x-3">
                  <Star className="h-4 w-4 animate-pulse"  />
                  <p className="ml-24 flex h-5 w-5 items-center rounded-full bg-slate-400 animate-pulse text-sm "></p>{" "}
                </div>
                <div className="h-7 w-7 animate-pulse rounded-full border-2 border-slate-400" />
              </div>
              <div className="-mx-1 flex">
                <p className=" h-2 w-7 rotate-90 rounded-sm bg-slate-400 animate-pulse"></p>
                <div className="w-full">
                  <div className="flex justify-between ">
                    <div className="h-4 w-10 rounded-md bg-slate-400 animate-pulse"></div>
                    <div className="px-2\ -mb-[5px] mr-1  flex h-5 w-8 animate-pulse  items-center justify-center rounded-lg bg-gradient-to-r from-[--brand-primary] to-[--brand-secondary] pb-[1px] font-bold text-background"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[400px]  w-[1px] items-center justify-center bg-light-custom-y-gradient  transition-all duration-1000 group-hover:h-[470px]  dark:bg-custom-y-gradient " />
      </div>
      <div className="mr-[50%]  h-[1px] w-[70%] translate-x-[50%] bg-light-custom-gradient transition-all duration-1000 group-hover:w-full dark:bg-custom-gradient  " />
    </div>
  )
}

export default SkeletonCardProducts
