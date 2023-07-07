import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

import "./globals.css"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/homePage/Navbar"
import Sidebar from "@/components/homePage/Sidebar"
import { ClerkProvider } from "@clerk/nextjs"
import PermanentLayout from "@/components/PermanentLayout"
import Login from "@/components/homePage/Login"
import ZoomOut from "@/components/ZoomOut"
// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })

// Font files can be colocated inside of `pages`
// const fontHeading = localFont({
//   src: "../assets/fonts/CalSans-SemiBold.woff2",
//   variable: "--font-heading",
// })
const fontBase = localFont({
  src: "../assets/fonts/IRANSansWebFaNum-Light.woff2",
  variable: "--font-base",
})
const fontMedium = localFont({
  src: "../assets/fonts/IRANSansWebFaNum-Medium.woff2",
  variable: "--font-medium",
})
const fontHeading = localFont({
  src: "../assets/fonts/woff2/KalamehWebFaNum-Bold.woff2",
  variable: "--font-semiHeading",
})
const fontSemiHeading = localFont({
  src: "../assets/fonts/IRANSansWebFaNum-Light.woff2",
  variable: "--font-heading",
})
interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "solop",
      url: "https://solop.com",
    },
  ],
  creator: "solop",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.ogImage}`],
    creator: "@solop",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode
  authModal: React.ReactNode
}) {
  return (
    //suppress for handle error change tag on client for next theme
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head />
      <ClerkProvider>
          <body
            className={cn(
              "relative min-h-screen  bg-background font-base antialiased",
              // fontSans.variable,
              fontHeading.variable,
              fontSemiHeading.variable,
              fontMedium.variable,
              fontBase.variable
            )}
            >

            <PermanentLayout>
              <Navbar>
                {/* @ts-expect-error Server Component */}
                <Login />
              </Navbar>
              <Sidebar />
            </PermanentLayout>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {authModal}

              <div className="pt-16">{children}</div>
              <Analytics />
              <Toaster />
              <TailwindIndicator />
            </ThemeProvider>
          </body>
      </ClerkProvider>
    </html>
  )
}
