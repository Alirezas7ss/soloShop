import React from "react"
import CardProduct from "./CardProduct"
import { ProductList } from "@prisma/client"

interface ProductsTableProps {
    data: ProductList[]
    pageCount?: number
    storeId: number
  }
  
  export function ProductsTable({
    data,
    pageCount,
    storeId,
  }: ProductsTableProps) {
  return (
    <div className=" px-[10%] pt-24 ">
      <div className="flex flex-wrap ">
        {products.map((product, index) => (
          // <Link
          //   href={`/products/${product.id}/${replaceSpacesWithHyphens(
          //     product.title
          //   )}`}
          //   className=""
          //   key={index}
          // >
          <CardProduct product={product} />
          // </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductsTable
