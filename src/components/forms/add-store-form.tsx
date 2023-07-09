"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import type { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/icons"
import { addStoreAction } from "@/app/_actions/store"
import { storeSchema } from "../../lib/validations/store"

interface AddStoreFormProps {
  userId: string
}

type Inputs = z.infer<typeof storeSchema>

export function AddStoreForm({ userId }: AddStoreFormProps) {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(storeSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  })

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      try {
        await addStoreAction({ ...data, userId })

        form.reset()
        toast.success("Store added successfully.")
        router.push("/dashboard/stores")
        router.refresh() // Workaround for the inconsistency of cache revalidation
      } catch (error) {
        error instanceof Error && toast.error(error.message)
      }
    })
  }

  return (
    <Card>
      <CardHeader className="space-y-1">
        
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="grid w-full max-w-xl gap-5"
            onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>اسم فروشگاه </FormLabel>
                  <FormControl>
                    <Input placeholder="اسم فروشگاهتان را مشخص کنید." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>توضیحات</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="توضیحاتی برای فروشگاهتان بنویسید"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-fit" disabled={isPending}>
              {isPending && (
                <Icons.spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              )}
              اضافه شود
              <span className="sr-only">Add Store</span>
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
