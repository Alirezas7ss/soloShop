import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { env } from "@/env.mjs"
import { currentUser } from "@clerk/nextjs"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AddStoreForm } from "@/components/forms/add-store-form"
import { Header } from "@/components/header"
import { Shell } from "@/components/Shell"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "New Store",
  description: "Add a new store",
}

export default async function NewStorePage() {
  const user = await currentUser()

  if (!user) {
    redirect("/signin")
  }

  return (
    <Shell variant="sidebar">
      <Header
        title="فروشگاه جدید"
        description="فروشگاه خود را اضافه کنید"
        size="sm"
      />
      <Card>
        <CardHeader className="space-y-1">
       
        </CardHeader>
        <CardContent>
          <AddStoreForm userId={user.id} />
        </CardContent>
      </Card>
    </Shell>
  )
}
