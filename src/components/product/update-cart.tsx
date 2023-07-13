"use client"
import React, { useState } from "react"
import { useStateWithDeps } from "swr/_internal"
import { Digit } from "../Digit"
import { Icons } from "../icons"
const fontSize = 15
interface UpdateCartProps {
    productId: string
    quantity: number | null
  }
function UpdateCart({ productId , quantity }: UpdateCartProps) {
  const [value, SetValue] = useState(0)
 
  function plusHandler() {
    SetValue(value + 1)
   
  }
  function minusHandler() {
    SetValue(value - 1)
  }
 
  return (
    <div className="pr-1 ">
        <div >
          <div
            
            className=' flex rounded-md  border-2 border-accent '
          >
            <button
              disabled={value === 0}
              className={` ${
                value === 0 && "hover:bg-transparent disabled:cursor-auto"
              } flex w-10  items-center justify-center text-foreground hover:bg-accent `}
              onClick={minusHandler}
            >
              <Icons.minus size={15} />
            </button>
            <div
              // style={{ fontSize }}
              className="flex space-x-3 py-1 overflow-hidden rounded  px-2 leading-none text-foreground"
            >
              <Digit place={1} value={value} />
            </div>
            <button
              onClick={plusHandler}
              disabled={value === 3}
              className={` ${
                value === 3 && "hover:bg-transparent disabled:cursor-auto"
              } flex w-10 items-center justify-center text-foreground hover:bg-accent `}
            >
              <Icons.plus size={15} />
            </button>
          </div>
        </div>
       
    </div>
  )
}

export default UpdateCart
