import { ProductList } from "@/types"
import { Star } from "lucide-react"
import Image from "next/image"
import React from "react"
import AddButton from "./AddButton"
interface Props {
  product: ProductList
}
function CardProduct({ product }: Props) {
  return (
    <div className="  group relative h-[500px] w-[300px]  ">
      <div className="mr-[50%]  h-[1px] w-[70%] translate-x-[50%] bg-light-custom-gradient  transition-all duration-1000 ease-in-out group-hover:w-full dark:bg-custom-gradient " />
      {/* <div className="absolute hidden group-hover:flex rounded-bl-full rounded-br-full  top-0 overflow-hidden  aspect-square w-full h-1/3  items-center justify-center">
        <div className="translate-z-0 absolute inset-0 bg-custom-gradient opacity-50 blur-[120px]" />
      </div> */}
      <div className="absolute left-1/2 top-0 hidden aspect-square w-1/3 -translate-x-1/2 translate-y-1/2 items-center justify-center group-hover:flex">
        <div className="translate-z-0 absolute inset-0 rounded-full bg-zinc-50 opacity-60 blur-[120px]" />
      </div>

      <div className="flex items-center justify-between">
        <div className="h-[400px] w-[1px] items-center  justify-center  bg-light-custom-y-gradient  transition-all duration-1000 group-hover:h-[470px] dark:bg-custom-y-gradient" />
        <div className="p-5 hover:shadow-md">
          <div className="h-[300px] w-[200px] bg-slate-400">
            <Image
              width={200}
              height={300}
              src={`${product.imageSrc[0]}`}
              alt={`${product.title}`}
            />
          </div>
          <div className="mx-2 mt-3  ">
            <div className="  h-[1px] bg-custom-gradient " />
            <p className=" my-1  ">{product.title}</p>
            <div dir="ltr" className="space-y-4 text-sm">
              <div className="flex justify-between">
                <div className="flex items-center  space-x-3">
                  <Star className="h-4 w-4" />
                  <p className="ml-24 flex items-center text-sm ">
                    {product.point}
                  </p>{" "}
                </div>
                <AddButton />
              </div>
              <div className="flex -mx-1">
                  <p className="h-fit w-fit rotate-90">تومان</p>
                <div className="w-full">
                  <div className="flex justify-between ">
                    <div>
                      {(
                        product.price *
                        ((100 - product.discount) / 100)
                      ).toLocaleString()}
                    </div>
                    {product.discount > 0 && (
                      <div className="-mb-[5px]  mr-1 flex items-center  justify-center rounded-lg bg-gradient-to-r from-[--brand-primary] to-[--brand-secondary] px-2 py-[2px] font-bold text-background">
                        {product.discount}%
                      </div>
                    )}
                  </div>
                  {product.discount > 0 && (
                    <div className="flex items-center text-xs text-slate-500 line-through">
                      {product.price.toLocaleString()}
                    </div>
                  )}
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

export default CardProduct
