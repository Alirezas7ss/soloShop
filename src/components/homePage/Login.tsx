import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

function Login() {
  return (
    <div>
        <Link href='/sign-in'  className={cn(
          buttonVariants({ variant: "default" }),
          "mt-[6px] font-bold"
        )} ><span>&nbsp;ورود&nbsp;</span><span className='hidden md:flex'> | ثبت نام</span></Link>
    </div>
  )
}

export default Login