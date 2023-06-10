import Navbar from "@/components/homePage/Navbar"
import Sidebar from "@/components/homePage/Sidebar"
import SkeletonCardProducts from "@/components/productsPage/SkeletonCardProducts"
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
      
      <div className=" mt-10 px-[10%] pt-24 ">
        <div className="flex flex-wrap ">
          {[...new Array(4)].map((_, index) => (
            <div
              className=""
              key={index}
            >
              <SkeletonCardProducts />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default loading
