import React from "react"
import BlogCard from "./BlogCard"
import { db } from "@/lib/db"
import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { cn, formatDate } from "@/lib/utils"
import { compareDesc } from "date-fns"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
async function BlogHome() {
  const posts = allPosts
    .slice(0, 3)
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  const blogs = await db.post.findMany()
  return (
    <div className="h-[100vh] w-[100%]  px-12 pt-10 ">
      <div className="mb-5 flex justify-between ">
        <p className="mr-12 text-xl font-bold">بلاگ</p>
        <Link
          href="/blog"
          className={cn(buttonVariants({ variant: "ghost" }), " ml-12 ")}
        >
          موارد بیشتر
        </Link>
      </div>
      <div className="light-bg-custom-gradient h-[1px] dark:bg-custom-gradient" />
      <div className="mt-10 flex flex-wrap justify-center  gap-5">
        {posts?.length &&
          posts.map((post, index) => (
            <div key={post._id}>
              <BlogCard post={post} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default BlogHome
