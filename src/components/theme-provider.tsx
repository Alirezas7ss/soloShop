"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"
import { TooltipProvider } from "../components/ui/tooltip"
import { DirectionProvider } from "@radix-ui/react-direction"
import { SessionProvider } from "next-auth/react"
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <DirectionProvider dir="rtl">
      <NextThemesProvider {...props}>
        <SessionProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </SessionProvider>
      </NextThemesProvider>
    </DirectionProvider>
  )
}
