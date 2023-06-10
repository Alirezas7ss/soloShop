import Image from "next/image"
import Link from "next/link"
import React from "react"

interface Post {
  title: string
  image: string
  slug: string

}
interface Props {
  post: Post
}
function BlogCard({ post }: Props) {
  return (
    <div className=" group relative  z-20 flex overflow-hidden ">
      <div className="absolute inset-0 z-10 -translate-x-full bg-transparent bg-gradient-to-r from-transparent via-white bg-clip-border group-hover:translate-x-full group-hover:transition group-hover:duration-1000" />

      <div className="z-20 ">
        <div className="m-[1px] flex h-fit w-fit items-center justify-center border-2 border-accent bg-background">
          <div className="m-5  h-[320px] w-[250px]   gap-4">
            <div className=" flex h-[250px] w-full items-center justify-center ">
              <Image
                src={`${post.image}`}
                alt={post.title}
                width={250}
                height={250}
              />
              {/* {post?.content?.weddings[0]?.image} */}
            </div>
            <div>
              <p className="m-5 text-center">{post.title}</p>
            </div>
          </div>
        </div>
      </div>
      <Link href={post.slug} className="z-30 absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </div>
  )
}

export default BlogCard
