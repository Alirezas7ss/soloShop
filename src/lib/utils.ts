import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from "dayjs"
import { env } from "@/env.mjs"
import * as z from "zod"
import { isClerkAPIResponseError } from "@clerk/nextjs"
import { toast } from "sonner"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function formatDateDashboard(date: Date) {
  return dayjs(date).format("MMMM D, YYYY")
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`
}

export function formatPrice(
  price: number | string,
  currency: "USD" | "EUR" | "GBP" | "BDT" = "USD",
  notation: "compact" | "engineering" | "scientific" | "standard" = "standard"
) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
  }).format(Number(price))
}


export function catchError(err: unknown) {
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message
    })
    toast(errors.join("\n"))
  } else if (err instanceof Error) {
    toast(err.message)
  } else {
    toast("Something went wrong, please try again later.")
  }
}

export function catchClerkError(err: unknown) {
  const unknownErr = "Something went wrong, please try again later."
  if (isClerkAPIResponseError(err)) {
    toast.error(err.errors[0]?.longMessage ?? unknownErr)
    
  } else {
    toast.error(unknownErr)
  }
}

export function isArrayOfFile(files: unknown): files is File[] {
  const isArray = Array.isArray(files)
  if (!isArray) return false
  return files.every((file) => file instanceof File)
}