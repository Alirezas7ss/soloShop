import { SignUp } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="mt-16 flex items-center justify-center">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        redirectUrl="/protectedPage"
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-slate-500 hover:bg-slate-400 text-sm normal-case",
          },
        }}
      />
    </div>
  )
}
