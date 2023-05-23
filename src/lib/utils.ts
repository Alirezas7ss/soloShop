import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ALLOWED_FILE_TYPES } from '../config/s3'
import { env } from "../../env.mjs"

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

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`
}

export function validateFileType(file: File) {
    return ALLOWED_FILE_TYPES.includes(file.type)
  }
