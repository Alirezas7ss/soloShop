import NavSpotlight from "@/components/NavSpotlight"
import { FancyBox } from "@/components/fancy-box"
import { FileInput } from "@/components/file-input"
import Avatar from "@/components/homePage/Avatar"
import Banner from "@/components/homePage/Banner"
import Describe from "@/components/homePage/Describe"
import DiscountProduct from "@/components/homePage/DiscountProduct"
import Navbar from "@/components/homePage/Navbar"
import Sidebar from "@/components/homePage/Sidebar"
import SkeletonDiscount from "@/components/homePage/SkeletonDiscount"
import BlogHome from "@/components/homePage/blogHome/BlogHome"
import { db } from "@/lib/db"
import { ProductList } from "@/types"
import Image from "next/image"
import { Suspense } from "react"

export default async function Home({
  searchParams,
}: {
  searchParams: { path?: string }
}) {
  
  const pathRevalidate = searchParams?.path || "/"

  async function getProduct() {
    try {
      const product =
        (await db.productList.findFirst({
          where: {
            category: "کراوات",
            point: {
              gt: 0,
            },
          },
        })) || null

      // console.log(product)
      return product
    } catch (error) {
      console.error(error)
      throw new Error("Failed to fetch ProductList data")
    }
  }
  const product = await getProduct()
  return (
    <main>
      <Navbar pathRevalidate={pathRevalidate} />
      <Sidebar />
      <div className="z-0 pt-16 ">
        <div className="">
          <div>
            <NavSpotlight product={product} />
          </div>
          <div dir="ltr" className="">
            <Banner />
          </div>
          <div>
            <Suspense fallback={<SkeletonDiscount />}>
              {/* @ts-expect-error Server Component */}
              <DiscountProduct />
            </Suspense>
          </div>
          <div className="">
            <Avatar />
          </div>
        </div>
        <div className="  ">
          <Describe />
        </div>
        <div>
              {/* @ts-expect-error Server Component */}
          <BlogHome />
        </div>
      </div>
    </main>
  )
}
