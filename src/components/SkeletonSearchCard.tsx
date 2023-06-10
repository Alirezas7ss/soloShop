import React from 'react'

function SkeletonSearchCard() {
  return (
    <div className=' flex  animate-pulse'>
        <div className='w-[55px] h-[85px] rounded-md bg-slate-500 '></div>
        <div className='flex-col mr-4 mt-4 justify-center items-center'>
            <div className=' h-4 w-28 bg-slate-500 rounded-full'></div>
            <div className=' bg-slate-500 mt-5 w-52 rounded-full h-4  '></div>
        </div>

    </div>
  )
}

export default SkeletonSearchCard