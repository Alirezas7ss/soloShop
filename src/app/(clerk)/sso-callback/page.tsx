import type { HandleOAuthCallbackParams } from "@clerk/types"

import SSOCallback from "@/components/auth/sso-callback"
import { Shell } from "@/components/Shell"

export const runtime = "edge"

export interface SSOCallbackPageProps {
  searchParams: HandleOAuthCallbackParams
}

export default function SSOCallbackPage({
  searchParams,
}: SSOCallbackPageProps) {
  return (
    <Shell layout="auth">
      <SSOCallback searchParams={searchParams} />
    </Shell>
  )
}