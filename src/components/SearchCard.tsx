import { ProductList } from "@/types"
import Image from "next/image"
import React from "react"
interface Props {
  product: ProductList
}
function SearchCard({ product }: Props) {
  return (
    <div className=" flex hover:bg-accent p-3 rounded-lg cursor-pointer">
      <div className="h-[85px] w-[55px] rounded-md  ">
      <Image src={`${product?.imageSrc[0]}`} width={100} height={100} alt="pink tie" className="rounded-md"  />
      </div>
      <div className="mr-4 mt-4 flex-col items-center justify-center">
        <div className=" h-4 w-28 rounded-full font-bold text-sm">
          {product.title}
        </div>
        <div className=" mt-5 h-4  rounded-full text-xs ">
          {product.description}
        </div>
      </div>
    </div>
  )
}

export default SearchCard
