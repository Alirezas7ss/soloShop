"use client"
import React, { useState } from "react"
import HamburgerMenu from "./HamburgerMenu"
import ModeToggle from "../mode-toggle"
import Login from "./Login"
import { Icons } from "../icons"
import Search from "../SearchInput"
import { Button } from "../ui/button"
import ShowSearch from "../ShowSearch"
import { useClickOutside } from "@mantine/hooks"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import SearchModal from "../SearchModal"
import Link from "next/link"
function Navbar({  children }: { children: React.ReactNode }) {
  const [showSearch, setShowSearch] = useState(false)
  function showMobileSearch() {
    setShowSearch(!showSearch)
    console.log(showSearch)
  }
  const refOut = useClickOutside(() => setShowSearch(false))

  return (
    <div ref={refOut} className="navbar z-50 flex-col ">
      <div
        className={` bg-blur-sm  absolute top-0 flex h-16 w-[100%] items-center justify-between bg-muted-foreground/40  px-5 font-bold`}
      >
        <div className="item-center  flex gap-8">
          <div>
            <HamburgerMenu />
          </div>
          <Link href="/checkout/cart" className="relative hidden md:flex">
            <Icons.cart />
            <div className="absolute flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-xs ">
              <p>2</p>
            </div>
          </Link>
          <Link href="/" className="-mx-7 hidden text-foreground md:flex">
            <Icons.logosolop />
          </Link>
          <Button
            variant={"ghost"}
            onClick={showMobileSearch}
            className="flex md:hidden"
          >
            <Icons.search />
          </Button>

          <div className="hidden md:flex ">
            <ShowSearch  />
          </div>
        </div>
        <div className="flex">
          {children}
          <ModeToggle />
        </div>
      </div>
      {showSearch && (
        <div className=" absolute top-16 z-50 flex w-[100%] animate-accordion-down items-center justify-center transition-all duration-100 md:hidden">
          <div className="flex h-16 w-[400px] items-center justify-center rounded-b-xl bg-muted-foreground">
            <div className="">
              <ShowSearch  />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
