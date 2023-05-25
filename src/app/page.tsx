import NavSpotlight from "@/components/NavSpotlight"
import PageImage from "@/components/PageImage"
import { FancyBox } from "@/components/fancy-box"
import { FileInput } from "@/components/file-input"
import Avatar from "@/components/homePage/Avatar"
import Banner from "@/components/homePage/Banner"
import Describe from "@/components/homePage/Describe"
import DiscountProduct from "@/components/homePage/DiscountProduct"
import Image from "next/image"

export default function Home() {
  return (
    <main className="z-0 pt-16">
      <div className="">
        <div>
          <NavSpotlight />
        </div>
        <div dir="ltr" className="">
          <Banner />
        </div>
        <div>
          {/* @ts-expect-error Server Component */}
          <DiscountProduct />
        </div>
        <div className="">
          <Avatar />
        </div>
      </div>
      <div className="h-32 w-full  ">
        <Describe />
      </div>
    </main>
  )
}
