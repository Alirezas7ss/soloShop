import { db } from "@/lib/db"
import { ProductList } from "@/types"
import { notFound } from "next/navigation"
import React from "react"

async function page({ params }: { params: { slug: string } }) {
  const pathRouteProduct = params.slug[0]
  async function getProduct() {
    try {
      const product = await db.productList.findFirst({
        where: {
          id: pathRouteProduct,
        },
      })
      return product
    } catch (error) {
      console.log(error)
      throw new Error("Failed to fetch ProductList data")
    }
  }
  const product: ProductList | null = await getProduct()
  if (!product) {
    notFound();
  }
  console.log(product)
  console.log(params)
  return <div>{product.title}</div>
}

export default page
