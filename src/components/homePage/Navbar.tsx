import React from "react"
import HamburgerMenu from "./HamburgerMenu"
import ModeToggle from "../mode-toggle"
import Login from "./Login"

function Navbar() {
  return (
    <div className="navbar">
      <div
        className={` fixed top-0 flex h-16 w-[100%] items-center justify-between bg-muted-foreground px-5 font-bold`}
      >
        <div className="item-center flex gap-8">
          <div>
            <HamburgerMenu />
          </div>
          <div className="hidden md:flex">سبد</div>
          <div className="hidden md:flex">SOLOP</div>

          <div className="">search</div>
        </div>
        <div className="flex">
          <Login />
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar
