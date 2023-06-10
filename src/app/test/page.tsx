"use client"
import CardsFirst from "@/components/CardsFirst"
import DropDownC from "@/components/DropDownC"
import { FancyBox } from "@/components/fancy-box"
import ModeToggle from "@/components/mode-toggle"
import CardB from "@/components/ui/CardB"
import CustomCardB from "@/components/ui/CustomCardB"
import SkeletonCard from "@/components/ui/SkeletonCardTest"
import DeleteModal from "@/components/ui/DeleteModal"
import React from "react"
import Navbar from "@/components/homePage/Navbar"
import Sidebar from "@/components/homePage/Sidebar"
import { useSearchParams } from "next/navigation"

function page() {
  return (
    <div>
      <div className="flex">
        <div className="h-96 w-24 border-4 border-l border-green-500 bg-primary">
          <p className="mt-10 rotate-90  text-2xl text-red-500">primary</p>
        </div>
        <div className="h-96 w-24 border-4 border-l border-red-500 bg-primary-foreground">
          <p className="mt-10 rotate-90  text-2xl text-red-500">primary-f</p>
        </div>
        <div className="h-96 w-24 border-4 border-l border-green-500 bg-secondary">
          <p className="mt-10 rotate-90  text-2xl text-red-500">secondary</p>
        </div>
        <div className="h-96 w-24 border-4 border-l border-red-500 bg-secondary-foreground">
          <p className="mt-10 rotate-90  text-2xl text-red-500">secondary-f</p>
        </div>
        <div className="h-96 w-24 border-4 border-l border-green-500 bg-border">
          <p className="mt-10 rotate-90  text-2xl text-red-500">border</p>
        </div>
        <div className="h-96 w-24 border-4 border-l border-green-500 bg-input">
          <p className="mt-10 rotate-90  text-2xl text-red-500">input</p>
        </div>
        <div className="h-96 w-24 border-4 border-l border-green-500 bg-ring">
          <p className="mt-10 rotate-90  text-2xl text-red-500">ring</p>
        </div>
        <div className="h-96 w-24 border-4 border-l border-green-500 bg-background">
          <p className="mt-10 rotate-90  text-2xl text-red-500">background</p>
        </div>
        <div className="h-96 w-24 border-4 border-l border-green-500 bg-foreground">
          <p className="mt-10 rotate-90  text-2xl text-red-500">foreground</p>
        </div>
        <div className="h-96 w-24 border-4 border-l border-green-500 bg-destructive">
          <p className="mt-10 rotate-90  text-2xl text-red-500">dest</p>
        </div>
        <div className="h-96 w-24 border-4 border-l border-red-500 bg-destructive-foreground">
          <p className="mt-10 rotate-90  text-2xl text-red-500">dest-f</p>
        </div>
        <div className="h-96 w-24 border-4 border-l border-green-500 bg-muted">
          <p className="mt-10 rotate-90  text-2xl text-red-500">muted</p>
        </div>
        <div className="h-96 w-24 border-4 border-l border-red-500 bg-muted-foreground">
          <p className="mt-10 rotate-90  text-2xl text-red-500">muted-f</p>
        </div>
        <div className="h-96 w-24 border-4 border-l border-green-500 bg-accent">
          <p className="mt-10 rotate-90  text-2xl text-red-500">accent</p>
        </div>
        <div className="h-96 w-24 border-4 border-l border-red-500 bg-accent-foreground">
          <p className="mt-10 rotate-90  text-2xl text-red-500">accent-f</p>
        </div>
        <div className="h-96 w-24 border-4 border-l border-green-500 bg-popover">
          <p className="mt-10 rotate-90  text-2xl text-red-500">popover</p>
        </div>
        <div className="h-96 w-24 border-4 border-l border-red-500 bg-popover-foreground">
          <p className="mt-10 rotate-90  text-2xl text-red-500">popover-f</p>
        </div>
        <div className="h-96 w-24 border-4 border-l border-green-500 bg-card">
          <p className="mt-10 rotate-90  text-2xl text-red-500">card</p>
        </div>
        <div className="h-96 w-24 border-4 border-l border-red-500 bg-card-foreground">
          <p className="mt-10 rotate-90  text-2xl text-red-500">card-f</p>
        </div>
      </div>
      <div>
        <DropDownC />
      </div>
      <div>
        <DeleteModal />
      </div>
      <div>
        <ModeToggle />
      </div>
      <div>
        <FancyBox />
      </div>
      {/* <div className="">
        <PageImage />
      </div> */}
      <div>
        <CardsFirst />
      </div>
      <div>
        <CardB beOnShadow={false} />
        {/* <CustomCardB beOnShadow={true} /> */}
        <SkeletonCard />
      </div>
    </div>
  )
}

export default page
