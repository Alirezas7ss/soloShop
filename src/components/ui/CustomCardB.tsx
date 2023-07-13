//https://play.tailwindcss.com/fU7Jx7GTTE
import Image from "next/image"
import React from "react"
import testImage from "/public/avatar/testcardimage.jpg"
import { Star } from "lucide-react"
import { ProductList } from "@/types"
import replaceSpacesWithHyphens from "@/script/script"
import Link from "next/link"
import AddButton from "../productsPage/AddButton"

interface Props {
  beOnShadow: boolean
  product: ProductList
}
function CustomCardB({ beOnShadow, product }: Props) {
  return (
    <div>
      <div className="relative mt-10 flex  flex-col justify-center ">
        <div className="group relative mx-auto rounded-lg  bg-custom-vc-border-gradient p-px  shadow-lg shadow-black/20 dark:bg-vc-border-gradient ">
          <div className="group  relative z-20 m-[1px] h-[370px]  w-40  max-w-md overflow-hidden rounded-md  bg-background p-[2px]">
            <div className="h-[230px] w-full rounded-t-lg bg-slate-300">
              <Image
                className="rounded-t-lg "
                width={160}
                height={230}
                alt=""
                src={`${product.imageSrc[0]}`}
              />
            </div>
            <div className="relative mx-2 mt-3 space-y-2 ">
              <div className="  h-[1px] bg-custom-gradient " />

              <p className=" pb-2   pt-1 ">{product.title}</p>
              <div dir="ltr" className="space-y-2 text-sm">
                <div className="flex items-center  space-x-3">
                  <Star className="h-4 w-4" />
                  <p className="ml-24 flex items-center text-sm ">
                    {product.point}
                  </p>{" "}
                </div>
                <div className="">
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
            {beOnShadow && (
              <div className="absolute inset-0 z-30 -translate-x-full bg-transparent bg-gradient-to-r from-transparent via-gray-600/20 bg-clip-border peer-hover:translate-x-full peer-hover:transition peer-hover:duration-1000" />
            )}
          </div>
        </div>
        <Link
            href={`/products/${product.id}/${replaceSpacesWithHyphens(
              product.title
            )}`}
            className=" absolute inset-0 z-20"
          >
            <span className="sr-only">View Product</span>
          </Link>

        <div dir="ltr" className="absolute z-30 mr-4 mt-[223px]">
          <AddButton />
        </div>
      </div>
    </div>
  )
}
export default CustomCardB
