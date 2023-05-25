//https://play.tailwindcss.com/fU7Jx7GTTE
import Image from "next/image"
import React from "react"
import testImage from "/public/avatar/testcardimage.jpg"
import { Star } from "lucide-react"
import { ProductList } from "@/types"

interface Props {
  beOnShadow: boolean
  product: ProductList
}
function CustomCardB({ beOnShadow, product }: Props) {
  return (
    <div>
      <div className="relative flex mt-10  flex-col justify-center ">
        <div className="group relative mx-auto rounded-lg  bg-custom-vc-border-gradient p-px  shadow-lg shadow-black/20 dark:bg-vc-border-gradient ">
          <div className="group  relative z-20 m-[1px] h-[350px] w-40  max-w-md overflow-hidden rounded-md  bg-background p-[2px]">
              <Image className="rounded-t-lg " alt="" width={160} height={100} src={`${product.imageSrc[0]}`} />
            <div className="mx-2 mt-3  ">
              <p className="   ">{product.title}</p>
              <div dir="ltr" className="space-y-2 text-sm">
                <div className="flex items-center space-x-3">
                  <Star />
                  <p className="flex items-center">{product.point}</p>{" "}
                </div>
                <div className="">
                  <div className="flex justify-between ">
                    <div>
                      {(product.price *
                        ((100 - product.discount) / 100)).toLocaleString()}
                    </div>
                    <div className="mr-1  bg-gradient-to-r from-[--brand-primary] font-bold  text-background to-[--brand-secondary] flex items-center justify-center px-2 py-[2px] rounded-lg -mb-[5px]">{product.discount}%</div>
                  </div>
                  <div className="flex line-through items-center text-xs text-slate-500">
                    {product.price.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
            {beOnShadow && (
              <div className="absolute inset-0 -translate-x-full bg-transparent bg-gradient-to-r from-transparent via-gray-600/20 bg-clip-border group-hover:translate-x-full group-hover:transition group-hover:duration-1000" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomCardB
