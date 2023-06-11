import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

import "./globals.css"
import { siteConfig } from "@/config/site"
import { absoluteUrl, cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/homePage/Navbar"
import Sidebar from "@/components/homePage/Sidebar"
import { ClerkProvider } from "@clerk/nextjs"

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
  src: '../assets/fonts/IRANSansWebFaNum-Light.woff2',
  variable: "--font-base",
});
const fontMedium = localFont({
  src: '../assets/fonts/IRANSansWebFaNum-Medium.woff2',
  variable: "--font-medium",
});
const fontHeading = localFont({
  src: '../assets/fonts/woff2/KalamehWebFaNum-Bold.woff2',
  variable: "--font-semiHeading",
});
const fontSemiHeading = localFont({
  src: '../assets/fonts/IRANSansWebFaNum-Light.woff2',
  variable: "--font-heading",
});
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
      name: "shadcn",
      url: "https://shadcn.com",
    },
  ],
  creator: "shadcn",
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
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({  children }: RootLayoutProps) {
  return (
    <html lang="fa" 
    dir='rtl'
     suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-base antialiased relative",
          // fontSans.variable,
          fontHeading.variable,
          fontSemiHeading.variable,
          fontMedium.variable,
          fontBase.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClerkProvider>{children}</ClerkProvider>
          
          <Analytics />
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
