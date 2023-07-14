"use client"
import { Color, Size } from "@/types"
import React, { useState } from "react"
interface UpdateCartProps {
  productId: string
  quantity: number | null
  colors: Color[]
  sizes: Size[]
  userId: string | null | undefined
}

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UpdateCart from "./update-cart"
import { cn } from "@/lib/utils"
function AddCartProduct({
  productId,
  quantity,
  colors,
  userId,
  sizes,
}: UpdateCartProps) {
  const [colorPicker, setColorPicker] = useState(colors[0].title)
  const [position, setPosition] = React.useState(sizes[0].title)

  return (
    <div className=" text-sm md:flex lg:text-base ">
      <div className="gap-7  flex flex-col flex-wrap md:flex-row">
        <div className="flex items-center  gap-1">
          <h3 className="ml-2 flex items-center">رنگ : </h3>
          {colors.map((item, index) => (
            <button
              onClick={() => setColorPicker(item.title)}
              style={{ backgroundColor: item.code }}
              key={index}
              className={`${
                colorPicker === item.title && "ring ring-muted ring-offset-1 "
              }  ml-2 h-7 w-7  rounded-full border-2 border-slate-500  `}
            />
          ))}
        </div>
        <div className=" hidden items-center md:flex ">
          <h3 className="ml-2 flex items-center ">سایز : </h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{position}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>choose size</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                {sizes.map((item, index) => (
                  <DropdownMenuRadioItem key={item.id} value={`${item.title}`}>
                    {item.title}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className=" flex items-center md:hidden ">
          <h3 className="ml-2 flex items-center ">سایز : </h3>
          <div className="flex gap-2">
            {sizes.map((item) => (
              <button
                key={item.id}
                onClick={() => setPosition(item.title)}
                className={cn(
                  "rounded-md border-2 border-muted px-3 py-2",
                  item.title === position && "ring ring-muted ring-offset-1"
                )}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <div className=" flex items-center ">
          <h3 className="ml-2 flex items-center ">تعداد : </h3>
          <UpdateCart quantity={quantity} productId={productId} />
        </div>
      </div>
    </div>
  )
}

export default AddCartProduct
