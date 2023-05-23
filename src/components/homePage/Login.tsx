import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'

function Login() {
  return (
    <div>
        <Button  className={cn(
          buttonVariants({ variant: "default" }),
          "mt-[6px] font-bold"
        )} ><span>&nbsp;ورود&nbsp;</span><span className='hidden md:flex'> | ثبت نام</span></Button>
    </div>
  )
}

export default Login