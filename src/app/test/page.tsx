"use client"
import CardsFirst from '@/components/CardsFirst'
import DropDownC from '@/components/DropDownC'
import { FancyBox } from '@/components/fancy-box'
import ModeToggle from '@/components/mode-toggle'
import CardB from '@/components/ui/CardB'
import CustomCardB from '@/components/ui/CustomCardB'
import SkeletonCard from '@/components/ui/SkeletonCard'
import DeleteModal from '@/components/ui/DeleteModal'
import React from 'react'

function page() {
  return (
    <div >
      <div className='flex'>

        <div className='w-24 h-96 bg-primary border-4 border-l border-green-500'><p className='rotate-90 mt-10  text-red-500 text-2xl'>primary</p></div>
        <div className='w-24 h-96 bg-primary-foreground border-4 border-l border-red-500'><p className='rotate-90 mt-10  text-red-500 text-2xl'>primary-f</p></div>
        <div className='w-24 h-96 bg-secondary border-4 border-l border-green-500'><p className='rotate-90 mt-10  text-red-500 text-2xl'>secondary</p></div>
        <div className='w-24 h-96 bg-secondary-foreground border-4 border-l border-red-500'><p className='rotate-90 mt-10  text-red-500 text-2xl'>secondary-f</p></div>
        <div className='w-24 h-96 bg-border border-4 border-l border-green-500'><p className='rotate-90 mt-10  text-red-500 text-2xl'>border</p></div>
        <div className='w-24 h-96 bg-input border-4 border-l border-green-500'><p className='rotate-90 mt-10  text-red-500 text-2xl'>input</p></div>
        <div className='w-24 h-96 bg-ring border-4 border-l border-green-500'><p className='rotate-90 mt-10  text-red-500 text-2xl'>ring</p></div>
        <div className='w-24 h-96 bg-background border-4 border-l border-green-500'><p className='rotate-90 mt-10  text-red-500 text-2xl'>background</p></div>
        <div className='w-24 h-96 bg-foreground border-4 border-l border-green-500'><p className='rotate-90 mt-10  text-red-500 text-2xl'>foreground</p></div>
        <div className='w-24 h-96 bg-destructive border-4 border-l border-green-500'><p className='rotate-90 mt-10  text-red-500 text-2xl'>dest</p></div>
        <div className='w-24 h-96 bg-destructive-foreground border-4 border-l border-red-500'><p className='rotate-90 mt-10  text-red-500 text-2xl'>dest-f</p></div>
        <div className='w-24 h-96 bg-muted border-4 border-l border-green-500'><p className='rotate-90 mt-10  text-red-500 text-2xl'>muted</p></div>
        <div className='w-24 h-96 bg-muted-foreground border-4 border-l border-red-500'><p className='rotate-90 mt-10  text-red-500 text-2xl'>muted-f</p></div>
        <div className='w-24 h-96 bg-accent border-4 border-l border-green-500'><p className='rotate-90 mt-10  text-red-500 text-2xl'>accent</p></div>
        <div className='w-24 h-96 bg-accent-foreground border-4 border-l border-red-500'><p className='rotate-90 mt-10  text-red-500 text-2xl'>accent-f</p></div>
        <div className='w-24 h-96 bg-popover border-4 border-l border-green-500'><p className='rotate-90 mt-10  text-red-500 text-2xl'>popover</p></div>
        <div className='w-24 h-96 bg-popover-foreground border-4 border-l border-red-500'><p className='rotate-90 mt-10  text-red-500 text-2xl'>popover-f</p></div>
        <div className='w-24 h-96 bg-card border-4 border-l border-green-500'><p className='rotate-90 mt-10  text-red-500 text-2xl'>card</p></div>
        <div className='w-24 h-96 bg-card-foreground border-4 border-l border-red-500'><p className='rotate-90 mt-10  text-red-500 text-2xl'>card-f</p></div>
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
        <CustomCardB beOnShadow={true} />
        <SkeletonCard />
      </div>
      
    </div>
  )
}

export default page