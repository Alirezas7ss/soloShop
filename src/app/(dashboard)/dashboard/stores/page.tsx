import type { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"
import { env } from "@/env.mjs"
import { currentUser } from "@clerk/nextjs"
import dayjs from "dayjs"

import {
  getFeaturedStoreAndProductCounts,
  getUserSubscriptionPlan,
} from "@/lib/subscription"
import { cn, formatDate } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Header } from "@/components/header"
import { Icons } from "@/components/icons"
import { Shell } from "@/components/Shell"
import { db } from "@/lib/db"

// Running out of edge function execution units on vercel free plan
// export const runtime = "edge"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "فروشگاه",
  description: "فروشگاه خود را بسازید و مدیریت کنید",
}

export default async function StoresPage() {
  const user = await currentUser()

  if (!user) {
    redirect("/signin")
  }

  const userStores = await db.stores.findMany({
    where: {
      creatorId: user.id,
    },
    include: {
      products: {
        select: {
          id: true,
        },
      },
    },
  });
console.log(userStores)
console.log(user.id)
  const subscriptionPlan = await getUserSubscriptionPlan(user.id)

  const isSubscriptionPlanActive = dayjs(
    subscriptionPlan.stripeCurrentPeriodEnd
  ).isAfter(dayjs())

  const { featuredStoreCount, featuredProductCount } =
    getFeaturedStoreAndProductCounts(subscriptionPlan.id)

  return (
    <Shell variant="sidebar">
      <Header title="فروشگاه" description="مدیریت فروشگاه" size="sm" />
      <Alert>
        <Icons.terminal className="h-4 w-4" aria-hidden="true" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You are currently on the{" "}
          <span className="font-semibold">{subscriptionPlan.name}</span> plan.{" "}
          {!subscriptionPlan.isSubscribed
            ? "Upgrade to create more stores and products."
            : subscriptionPlan.isCanceled
            ? "Your plan will be canceled on "
            : "Your plan renews on "}
          {subscriptionPlan?.stripeCurrentPeriodEnd
            ? `${formatDate(subscriptionPlan.stripeCurrentPeriodEnd)}.`
            : null}{" "}
          You can create up to{" "}
          <span className="font-semibold">{featuredStoreCount}</span> stores and{" "}
          <span className="font-semibold">{featuredProductCount}</span> products
          on this plan.
        </AlertDescription>
      </Alert>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {userStores.map((store) => (
          <Card key={store.id} className="flex h-full flex-col">
            <CardHeader className="flex-1">
              <CardTitle className="line-clamp-1">{store.name}</CardTitle>
              <CardDescription className="line-clamp-2">
                {store.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link key={store.id} href={`/dashboard/stores/${store.id}`}>
                <div
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      className: "h-8 w-full",
                    })
                  )}
                >
                  View store
                  <span className="sr-only">View {store.name} store</span>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
        {userStores.length < 3 && (
          <Card className="flex h-full flex-col">
            <CardHeader className="flex-1">
              <CardTitle className="line-clamp-1">فروشگاه جدید خود را بسازید</CardTitle>
              <CardDescription className="line-clamp-2">
                داخل فروشگاهت محصولاتت رو بفروش برسون
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href={
                  subscriptionPlan.id === "basic" && userStores.length >= 2
                    ? "/dashboard/billing"
                    : subscriptionPlan.id === "standard" &&
                      isSubscriptionPlanActive &&
                      userStores.length >= 3
                    ? "/dashboard/billing"
                    : subscriptionPlan.id === "pro" &&
                      isSubscriptionPlanActive &&
                      userStores.length >= 4
                    ? "/dashboard/billing"
                    : "/dashboard/stores/new"
                }
              >
                <div
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      className: "h-8 w-full",
                    })
                  )}
                >
                  ساخت فروشگاه
                  <span className="sr-only">فروشگاه جدید خود را بسازید</span>
                </div>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </Shell>
  )
}
