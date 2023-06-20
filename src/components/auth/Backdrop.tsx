'use client'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function Backdrop() {
    const pathName = usePathname()
    useEffect(() => {
        // Add styles to prevent scrolling when the sidebar is open
        if (pathName.includes('sign-in')) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
    
        // Clean up the effect
        return () => {
          document.body.style.overflow = "";
        };
      }, []);
    const router = useRouter()
  return (
    <div onClick={() => router.back()} className='bg-zinc-900/70 fixed inset-0 z-[70] w-[100%] h-[100%]'></div>
  )
}

export default Backdrop