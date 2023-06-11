import Navbar from "@/components/homePage/Navbar"
import Sidebar from "@/components/homePage/Sidebar"
import CardProduct from "@/components/productsPage/CardProduct"
import { db } from "@/lib/db"
import replaceSpacesWithHyphens from "@/script/script"
import { ProductList } from "@/types"
import Link from "next/link"
import React from "react"
async function page({
  searchParams,
}: {
  searchParams: { path?: string; search?: string }
}) {
  const pathRevalidate = searchParams.path || "/"
  // read the custom x-url header
  console.log(searchParams.path)
  let products: ProductList[] | null = []

  const searchQuery = searchParams.search ?? ""

  // Get Initial Data
  const allProducts: ProductList[] = await db.productList.findMany()

  // Search Function
  const filteredMoviesData: ProductList[] = await db.productList.findMany({
    where: {
      // Filter the data based on the search query in the 'title' field
      title: {
        contains: searchQuery,
      },
    },
  })
  // If there is a search query, set movies to search results
  if (searchQuery.length > 0) {
    // If there is a result, set movies to result
    if (filteredMoviesData) {
      products = filteredMoviesData
    }
    // If there is no result, set movies to empty array
    else {
      products = []
    }
  }
  //   If there is no search query, set movies to initial data
  else {
    products = allProducts ?? []
  }
  return (
    <div>
      <Navbar pathRevalidate={pathRevalidate} />
      <Sidebar />
      <div className=" px-[10%] pt-24 ">
        <div className="flex flex-wrap ">
          {products.map((product, index) => (
            <Link
              href={`/products/${product.id}/${replaceSpacesWithHyphens(
                product.title
              )}`}
              className=""
              key={index}
            >
              <CardProduct product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
