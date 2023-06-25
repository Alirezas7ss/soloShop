import CardProduct from "@/components/productsPage/CardProduct"
import ProductsTable from "@/components/productsPage/ProductsTable"
import { db } from "@/lib/db"
import replaceSpacesWithHyphens from "@/script/script"
import { ProductList } from "@prisma/client"
import Link from "next/link"
import { notFound } from "next/navigation"
import React from "react"
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
  console.log(searchParams.path)
  let products: ProductList[] | null = []
  const storeId = Number(params.storeId) 
  if (!storeId) {
    notFound()
  }
  const { page, per_page, sort, name, date_range } = searchParams
  const searchQuery = searchParams.search ?? ""
  // Number of skaters to show per page
  const limit = typeof per_page === "string" ? parseInt(per_page) : 10
  // Number of skaters to skip
  const offset = typeof page === "string" ? (parseInt(page) - 1) * limit : 0
  // Column and order to sort by
  const [column, order] =
    typeof sort === "string"
      ? (sort.split(".") as [
          keyof ProductList | undefined,
          "asc" | "desc" | undefined
        ])
      : []
  // Date range for created date
  const [start_date, end_date] =
    typeof date_range === "string" ? date_range.split("to") : []

    // // Get Initial Data
    // const allProducts: ProductList[] = await db.productList.findMany()
    
    // // Search Function
    // const filteredMoviesData: ProductList[] = await db.productList.findMany({
    //   where: {
    //     // Filter the data based on the search query in the 'title' field
    //     title: {
    //       contains: searchQuery,
    //     },
    //   },
    // })
    // // If there is a search query, set movies to search results
    // if (searchQuery.length > 0) {
    //   // If there is a result, set movies to result
    //   if (filteredMoviesData) {
    //     products = filteredMoviesData
    //   }
    //   // If there is no result, set movies to empty array
    //   else {
    //     products = []
    //   }
    // }
    // //   If there is no search query, set movies to initial data
    // else {
    //   products = allProducts ?? []
    // }
    // Transaction is used to ensure both queries are executed in a single transaction
    const storeProducts = await db.productList.findMany({
      where: {
        storeId,
        name: {
          contains: name || undefined,
        },
        createdAt: {
          ...(start_date && { gte: new Date(start_date) }),
          ...(end_date && { lte: new Date(end_date) }),
        },
      },
      take: limit,
      skip: offset,
      orderBy: column && column in db.productList ? { [column]: order || "desc" } : { createdAt: "desc" },
    });
  
    const totalProducts = await db.productList.count({
      where: {
        storeId,
        name: {
          contains: name || undefined,
        },
        createdAt: {
          ...(start_date && { gte: new Date(start_date) }),
          ...(end_date && { lte: new Date(end_date) }),
        },
      },
    });
  
   
  return (
    <ProductsTable
      data={storeProducts}
      pageCount={pageCount}
      storeId={storeId}
    />
  )
}

export default page
