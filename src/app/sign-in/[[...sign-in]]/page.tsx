import { SignIn } from "@clerk/nextjs"

export default function Page({
    searchParams,
  }: {
    searchParams: { path?: string; search?: string }
  }) {
    console.log(searchParams)
    console.log(searchParams.search)
    console.log(searchParams.path)

  return (
    <div className="mt-16 flex items-center justify-center ">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        redirectUrl="/"
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
