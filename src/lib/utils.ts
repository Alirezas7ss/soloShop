import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from "dayjs"
import { env } from "@/env.mjs"


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