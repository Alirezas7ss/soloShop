import SkeletonSearchCard from "./SkeletonSearchCard"
import SearchInput from "./SearchInput"
import { db } from "@/lib/db"
import { ProductList } from "@/types"
import SearchCard from "./SearchCard"
import Link from "next/link"
import { useEffect, useState } from "react"
import useSWR from "swr"
import { useSearchParams } from "next/navigation"
// import { MOVIE_DATA, Movie } from "@/movies-data"
import { useQuery } from "@tanstack/react-query"
import { revalidatePath } from "next/cache"
let products: ProductList[] = []
let searchQuery: String = ''
const ShowSearchServer = ({
  pathRevalidate,
}: {
  pathRevalidate: string 
})  => {
  // Get Initial Data
  // const { data: initialMoviesData } = await supabaseClient
  //   .from("movies")
  //   .select("*")
  //   .returns<Movie[]>()

  // Search Handler
  const searchHandler = async (searchQueryF: string) => {
    "use server"
    searchQuery = searchQueryF
    if (searchQueryF.length > 0) {
    console.log(searchQueryF)

      const filteredMoviesData  = await db.productList.findMany({
        where: {
          // Filter the data based on the search query in the 'title' field
          title: {
            contains: searchQueryF,
          },
        },
      })
      console.log(filteredMoviesData)
      products = filteredMoviesData ?? []
    } else {
      products =  []
    }
    revalidatePath(`/products/?search=${searchQuery}`)
  }

  // Deactivate search
  const deactivateSearch = async () => {
    "use server"
    products = []
    console.log('aaaa')
    revalidatePath(`/products/?search=${searchQuery}`)
  }
  const threeProduct = products.slice(0, 3)
  // const fiveProducts = products.slice(0, 5)

  return (
    <div>
      {/* Search */}
      <SearchInput
        deactivateSearch={deactivateSearch}
        searchHandler={searchHandler}
      />
      {/* Producs */}
      {!!products[0]  && (
      <div className=" absolute top-12  z-50 h-fit w-[350px] animate-accordion-down rounded-b-xl bg-background px-7 py-3 lg:w-[450px]">
          {threeProduct.map((product, index) => (
            <div className="">
              {index > 0 && (
                <div className=" item-center my-1 flex h-[1px]  justify-center dark:bg-custom-gradient bg-light-custom-gradient " />
              )}
              <SearchCard product={product} />
              { index === 2 &&   (
                <Link
                  href={`/products/?search=${searchQuery}`}
                  className="flex text-sm mt-2  p-[2px] rounded-full hover:bg-accent items-center justify-center"
                >
                  محصولات بیشتر کلیک کنید
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ShowSearchServer
