"use client"

import Link from "next/link"
import { Icons } from "../icons"
import UserAuthForm from "./UserAuthForm"
import { useForm } from "react-hook-form"
import { signInSchema } from "@/components/validations/valid-auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { SignInType } from "@/types/authType"
import { Form } from "../ui/form"
import InputForm from "../ui/InputForm"
import { Button } from "../ui/button"
import { PasswordInput } from "../ui/password-input"
import { useState } from "react"
import { useRouter } from "next/navigation"

const SignUp = () => {
   // const { pending } = useFormStatus()
  // 1. Define your form.
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  
  setIsPending(true)
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
    },
  })
  async function clickHandler() {
    router.back()
    setTimeout(() => {
      router.push("/sign-up")
    }, 50)
  }
  const onSubmit = async (data: SignInType) => {}
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <div className=" flex items-center justify-center ">
          <Link href="/" className="">
            <Icons.logosolop className="w-16 rounded-md bg-accent" />
          </Link>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">خوش آمدی</h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <InputForm
            name="نام کابری"
            placeholder="نام کاربری را وارد کنید"
            control={form.control}
          />

          <InputForm
            type="pass"
            name="رمز"
            placeholder="رمز را وارد کنید"
            control={form.control}
          />
<Button disabled={isPending} type="submit">
            {isPending ? (
              <div className="flex">
                <Icons.spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
                <span className="">...</span>
              </div>
            ) : (
              <span className="">تایید</span>
            )}
          </Button>
                  </form>
      </Form>
      <UserAuthForm />
      <p className="px-8 text-center text-sm text-muted-foreground">
        is member uritect?{" "}
        <span
          onClick={clickHandler}
          // href={`/sign-up?previousRoute=${previousRoute}`}
          className="hover:text-brand cursor-pointer text-sm underline underline-offset-4"
        >
          Sign Up
        </span>
      </p>
    </div>
  )
}

export default SignUp
