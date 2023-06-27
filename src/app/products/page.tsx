import CardProduct from "@/components/productsPage/CardProduct"
import { db } from "@/lib/db"
import replaceSpacesWithHyphens from "@/script/script"
import { ProductList } from "@prisma/client"
import Link from "next/link"
import { notFound } from "next/navigation"
import React from "react"
import { getProductsAction } from "../_actions/product"
import { Products } from "@/components/productsPage/Products"
interface ProductsPageProps {
  params: {
    storeId: string
  }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}
async function page({ params, searchParams }: ProductsPageProps) {
  const pathRevalidate = searchParams.path || "/"
  // read the custom x-url header
  // let products: ProductList[] | null = []
  // const storeId = Number(params.storeId)
  // if (!storeId) {
  //   notFound()
  // }
  const {
    page,
    per_page,
    sort,
    categories,
    subcategories,
    price_range,
    store_ids,
    store_page,
    searchQuery
  } = searchParams
  const searchPath = typeof searchQuery === "string" ? searchQuery : ''
  // Number of skaters to show per page
  const limit = typeof per_page === "string" ? parseInt(per_page) : 10
  // Number of skaters to skip
  const offset = typeof page === "string" ? (parseInt(page) - 1) * limit : 0
  // Column and order to sort by
  // Date range for created date
    const productsTransaction = await getProductsAction({
      limit,
      offset,
      searchPath,
      sort: typeof sort === "string" ? sort : null,
      categories: typeof categories === "string" ? categories : null,
      subcategories: typeof subcategories === "string" ? subcategories : null,
      price_range: typeof price_range === "string" ? price_range : null,
      store_ids: typeof store_ids === "string" ? store_ids : null,
    })
  const pageCount = Math.ceil(productsTransaction.total / limit)

  return (
    <Products
      products={productsTransaction.items}
      pageCount={pageCount}
      // categories={Object.values(products.category.enumValues)}
    />
  )
}

export default page
