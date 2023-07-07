// "use client"

// import { cn } from "@/lib/utils"
// import * as React from "react"
// import { FC } from "react"
// import { useToast } from "@/hooks/use-toast"
// import { Icons } from "../icons"

// interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

// const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
//   const { toast } = useToast()
//   const [isLoading, setIsLoading] = React.useState<boolean>(false)

//   const loginWithGoogle = async () => {
//     setIsLoading(true)

//     try {
//       await signIn("github")
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "There was an error logging in with Google",
//         variant: "destructive",
//       })
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className={cn("flex justify-center", className)} {...props}>
//       <button
//         disabled={isLoading}
//         type="button"
//         className="flex items-center rounded-md   bg-secondary px-3 py-1 text-center hover:bg-secondary/80"
//         onClick={loginWithGoogle}
//       >
//         {isLoading ? null : <Icons.google className="mr-2 h-4 w-4" />}
//         Google
//       </button>
//     </div>
//   )
// }

// export default UserAuthForm
