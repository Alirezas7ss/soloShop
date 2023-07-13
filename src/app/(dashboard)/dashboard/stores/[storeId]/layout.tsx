import { notFound, redirect } from "next/navigation"
import { currentUser } from "@clerk/nextjs"

import { Header } from "@/components/header"
import { StorePager } from "@/components/pagers/store-pager"
import { StoreTabs } from "@/components/pagers/store-tabs"
import { Shell } from "@/components/Shell"
import { db } from "@/lib/db"

interface StoreLayoutProps {
  children: React.ReactNode
  params: {
    storeId: string
  }
}

export default async function StoreLayout({
  children,
  params,
}: StoreLayoutProps) {
  const storeId = Number(params.storeId)
  console.log(storeId)
  const user = await currentUser()

  if (!user) {
    redirect("/signin")
  }

  const allStores = await db.stores.findMany({
    select: {
      id: true,
      name: true,
    },
    where: {
      creatorId: user.id,
    },
  });

  const store = allStores.find((store) => store.id === storeId.toString())

  if (!store) {
    notFound()
  }

  return (
    <Shell variant="sidebar">
      <div className="flex items-center space-x-4">
        {allStores.length > 1 ? (
          <StorePager storeId={storeId} userId={user.id} />
        ) : null}
      </div>
      <div className="space-y-4 overflow-hidden">
        <StoreTabs storeId={storeId} />
        {children}
      </div>
    </Shell>
  )
}
