import { ProductList } from "@/types"
import { Star } from "lucide-react"
import Image from "next/image"
import React from "react"

function SkeletonCardProducts() {
  return (
    <div className="  group relative h-[500px] w-[300px]  ">
      <div className="duration-[2s] transition-all ease-in-out mr-[50%] h-[1px]  w-[70%] translate-x-[50%] bg-light-custom-gradient  dark:bg-custom-gradient " />
      
      <div className="absolute left-1/2 top-0 hidden aspect-square w-1/3 -translate-x-1/2 translate-y-1/2 items-center justify-center ">
        <div className="translate-z-0 absolute inset-0 rounded-full bg-zinc-50 opacity-60 blur-[120px]" />
      </div>

      <div className="flex items-center justify-between">
        <div className="h-[400px] w-[1px] items-center  justify-center bg-light-custom-y-gradient  dark:bg-custom-y-gradient" />
        <div className="p-5 ">
          <div className="h-[300px] w-[200px] bg-slate-400">
            
          </div>
          <div className="mx-2 mt-3  ">
            <div className="  h-[1px] bg-custom-gradient " />
            <div className=" my-1 bg-slate-200 h-5 rounded-full w-[100px]  " />
            <div dir="ltr" className="space-y-2 text-sm">
              <div className="flex items-center  space-x-3">
                <div className="h-4 w-4 rounded-full bg-slate-200 " />
                <p className="ml-24 h-4 w-4 rounded-full bg-slate-200 flex items-center text-sm ">
                  
                </p>{" "}
              </div>
              <div className="">
                <div className="flex justify-between ">
                  <div className="bg-slate-200 h-5 rounded-full w-[90px]">
                    
                  </div>
                    <div className="-mb-[5px] bg-slate-200 h-5 w-[30px]  mr-1 flex items-center  justify-center rounded-lg bg-gradient-to-r from-[--brand-primary] to-[--brand-secondary] px-2 py-[2px] font-bold text-background">
                     
                    </div>
                </div>
                  <div className="flex bg-slate-200 rounded-full h-4 mt-2 w-[70px] items-center text-xs text-slate-500 line-through">
                    
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[400px] w-[1px] items-center  justify-center bg-light-custom-y-gradient   dark:bg-custom-y-gradient " />
      </div>
      <div className="mr-[50%] h-[1px] w-[70%] translate-x-[50%] bg-light-custom-gradient  dark:bg-custom-gradient  " />
    </div>
  )
}

export default SkeletonCardProducts
