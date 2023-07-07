import { env } from "@/env.mjs"
import type { Metadata } from "next"
import { currentUser, UserProfile } from "@clerk/nextjs"

import { Header } from "@/components/header"
import { Shell } from "@/components/Shell"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Account",
  description: "Manage your account settings",
}

export default async function AccountPage() {
  const user = await currentUser()
  console.log(user)
  if (!user) {
    redirect("/signin")
  }
  
  console.log(user.id)
  return (
    <Shell variant="sidebar">
      <Header
        title="حساب"
        description="مدیریت حساب خود را انجام دهید"
        size="sm"
      />
      <div className="w-full overflow-hidden rounded-lg">
        <UserProfile
          appearance={{
            variables: {
              borderRadius: "0.25rem",
            },
            elements: {
              card: "shadow-none",
              navbar: "hidden",
              navbarMobileMenuButton: "hidden",
              headerTitle: "hidden",
              headerSubtitle: "hidden",
            },
          }}
        />
      </div>
    </Shell>
  )
}
