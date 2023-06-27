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
    <div className="mb-10 mt-16 flex flex-col space-y-6 px-16">
      <div className="space-y-2">
        <Skeleton className="h-10 w-28" />
        <Skeleton className="h-4 w-48" />
      </div>
      <div className="mt-10 flex items-center gap-2">
        <Skeleton className="h-10 w-14" />
        <Skeleton className="h-10 w-20" />
      </div>
        <div className="flex flex-wrap  gap-2 ">
          {[...new Array(10)].map((_, index) => (
            <div className="" key={index}>
              <SkeletonCardProducts />
            </div>
          ))}
      </div>
    </div>
  )
}

export default loading
