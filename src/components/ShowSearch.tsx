"use client"
import SkeletonSearchCard from "./SkeletonSearchCard"
import SearchInput from "./SearchInput"
import { ProductList } from "@/types"
import SearchCard from "./SearchCard"
import Link from "next/link"
import { useEffect, useRef, useState, useTransition } from "react"
import useSWR from "swr"
import { useRouter } from "next/navigation"
// import { MOVIE_DATA, Movie } from "@/movies-data"
import { revokeApiKey } from "@/action/getSearchProducts"
import { useClickOutside } from "@mantine/hooks"
import replaceSpacesWithHyphens from "@/script/script"
import { showSidebar } from "@/store/store"
// let products: ProductList[] = []
let searchQuery: String = ""
const ShowSearch = ({ pathRevalidate }: { pathRevalidate: string }) => {
  const [inputValue, setInputValue] = useState<string>("")
  const [debouncedValue, setDebouncedValue] = useState<string>("")
  const [initialProducts, setProducts] = useState<ProductList[]>([])
  const [isLoading, setIsLoading] = useState<boolean>()
  // const [isLoading, startTransition] = useTransition()
  const refInput = useRef().current
  const [opened, setOpened] = useState(true)
  const refOut = useClickOutside(() => setOpened(false))
  const router = useRouter()
  const setShowSidebar = showSidebar((state) => state.setShowSidebar)

  // OnSubmit Handler
  const onSubmitHandler = () => {
    router.replace(`/products?search=${inputValue}`)
  }
  const productClickHandler = () => {
    setInputValue("")
    setShowSidebar(false)
  }
  // Fetcher
  const fetcher = async (query: string) => {
    setIsLoading(true)

    const res = await revokeApiKey(query)
    // console.log(res.data)
    setProducts(res.data)
    console.log(initialProducts)
    setIsLoading(false)

    return res
  }
  //   const { data: products, isValidating } = useSWR(
  //     debouncedValue ?? null,
  //     fetcher
  //   )

  // EFFECTS: Set Data
  useEffect(() => {
    // If search is active, set movies to search results
    if (debouncedValue.length > 0) {
      fetcher(inputValue)
      // If there is a result, set movies to result
      if (initialProducts) {
        setProducts(initialProducts)
      }
      // If there is no result, set movies to empty array
      else {
        setProducts([])
      }
      // If search is not active, set movies to initial data
    } else {
      setProducts([])
    }
  }, [debouncedValue])

  // EFFECT: Debounce Input Value
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [inputValue])
  const threeProduct = initialProducts.slice(0, 3)

  return (
    <div ref={refOut}>
      {/* Search */}
      <SearchInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSubmitHandler={onSubmitHandler}
        isHandling={isLoading}
        setOpened={setOpened}
      />
      {/* Producs */}
      {isLoading && (
        <div className=" absolute top-12 z-50 h-fit w-[350px] animate-accordion-down rounded-b-xl border-x-2 border-b-2 border-accent bg-background px-7 py-3 lg:w-[450px]">
          <SkeletonSearchCard />
        </div>
      )}
      {!!initialProducts[0] && opened && !isLoading && (
        <div className=" absolute top-12 z-50 h-fit w-[350px] animate-accordion-down rounded-b-xl border-x-2 border-b-2 border-accent bg-background px-7 py-3 lg:w-[450px]">
          {threeProduct.map((product, index) => (
            <div className="">
              {index > 0 && (
                <div className=" item-center my-1 flex h-[1px]  justify-center bg-light-custom-gradient dark:bg-custom-gradient " />
              )}
              <Link
                onClick={productClickHandler}
                href={`/products/${product.id}/${replaceSpacesWithHyphens(
                  product.title
                )}`}
              >
                <SearchCard product={product} />
              </Link>
              {index === 2 && (
                <div
                  onClick={onSubmitHandler}
                  // href={`/products/?search=${inputValue}`}
                  className="mt-2 flex cursor-pointer items-center  justify-center rounded-full p-[2px] text-sm hover:bg-accent"
                >
                  محصولات بیشتر کلیک کنید
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ShowSearch
