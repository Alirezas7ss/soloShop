import React from "react"
import { Button, buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { UserAccountNav } from "./UserAccountNav"
import { useSession } from "next-auth/react"

async function Login() {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <div className="mt-2">
      {session?.user ? (
        <UserAccountNav user={session.user} />
      ) : (
        <Link
          href="/sign-in"
          className={cn(
            buttonVariants({ variant: "default" }),
            "mt-[6px] font-bold"
          )}
        >
          <span>&nbsp;ورود&nbsp;</span>
          <span className="hidden md:flex"> | ثبت نام</span>
        </Link>
      )}
    </div>
  )
}

export default Login
