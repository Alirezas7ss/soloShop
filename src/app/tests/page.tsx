import Navbar from "@/components/homePage/Navbar"
import Sidebar from "@/components/homePage/Sidebar"
import SkeletonCardProducts from "@/components/productsPage/SkeletonCardProducts"
import { Skeleton } from "@/components/ui/skeleton"
import { ProductList } from "@/types"
import { Star } from "lucide-react"
import Image from "next/image"
import React from "react"
interface Props {
  product: ProductList
}
function loading() {
  return (
    <div>
      <div className="  px-[10%] pt-24 ">
        <div className="space-y-2">
          <Skeleton className="h-10 w-28" />
          <Skeleton className="h-4 w-48" />
        </div>
        <div className="flex mt-10 items-center gap-2">
          <Skeleton className="h-10 w-14" />
          <Skeleton className="h-10 w-20" />
        </div>
        <div className="flex flex-wrap ">
          {[...new Array(4)].map((_, index) => (
            <div className="" key={index}>
              <SkeletonCardProducts />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default loading
