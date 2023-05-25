import { db } from "@/lib/db"
import { ProductList } from "@/types"
import React, { Suspense } from "react"
import CardB from "../ui/CardB"
import CustomCardB from "../ui/CustomCardB"
import SkeletonDiscount from "./SkeletonDiscount"


async function DiscountProduct() {
  async function getProductLists() {
    try {
      const productLists = await db.productList.findMany()
      console.log(productLists)
      return productLists
    } catch (error) {
      console.error(error)
      throw new Error("Failed to fetch ProductList data")
    }
  }
  const products = await getProductLists()
  return (
    <div className=" flex flex-nowrap justify-center gap-5 overflow-y-hidden overflow-x-scroll scrollbar-hide">
      <Suspense fallback={<SkeletonDiscount />}>
        {products.map((product, index) => (
          <div key={product.id}>
            <CustomCardB product={product} beOnShadow={false} />
          </div>
        ))}
      </Suspense>
    </div>
  )
}

export default DiscountProduct
