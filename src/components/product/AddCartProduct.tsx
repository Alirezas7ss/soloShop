"use client"
import { Color, Size } from '@/types'
import React, { useState } from 'react'
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
import UpdateCart from './update-cart'
import { cn } from '@/lib/utils'
function AddCartProduct({ productId , quantity , colors , userId , sizes}: UpdateCartProps) {
    const [colorPicker, setColorPicker] = useState(colors[0].title)
    const [position, setPosition] = React.useState(sizes[0].title)

    return (
    <div className=' md:flex '>
            <div className="md:flex  gap-7">
              <div className="flex gap-1 mt-5">
              <h3 className='ml-2'>رنگ : {' '}</h3>
                {(colors).map((item , index) => (
              
                  <button onClick={() => setColorPicker(item.title)} style={{backgroundColor: item.code}} key={index} className={`${colorPicker === item.title && 'ring ring-muted ring-offset-1 '}  ml-2 w-7 h-7  rounded-full border-2 border-slate-500  `} />
                ))}
              </div>
              <div className=' hidden md:flex items-center mt-4'>
                <h3 className='ml-2'>سایز : {' '}</h3>
                <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">{position}</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>choose size</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                          {sizes.map((item, index) =>(

                          <DropdownMenuRadioItem key={item.id} value={`${item.title}`}>{item.title}</DropdownMenuRadioItem>
                          ))}
                         
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
              </div>
              <div className=' flex md:hidden items-center mt-4'>
              <h3 className='ml-2'>سایز : {' '}</h3>
              <div className='flex gap-2'>
                {sizes.map((item) => (
                  <button key={item.id} onClick={() => setPosition(item.title)} className={cn('py-2 px-3 border-2 border-muted rounded-md' , item.title === position && 'ring ring-muted ring-offset-1')}>{item.title}</button>
                ))}
              </div>

              </div>
            </div>
        <div className=" flex mt-4 md:mr-4 ">
        <h3 className='ml-2 mt-2'>تعداد : {' '}</h3>
          <UpdateCart quantity={quantity} productId={productId} />
        </div>

    </div>
  )
}

export default AddCartProduct