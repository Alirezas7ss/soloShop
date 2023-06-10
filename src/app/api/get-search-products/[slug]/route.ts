import { db } from "@/lib/db"
import { NextApiRequest } from "next"
import { NextResponse } from "next/server"

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { slug: string }
  }
) {
  const slug = params.slug;
  // console.log(searchQuery)

  try {
    const filteredMoviesData = await db.productList.findMany({
      where: {
        // Filter the data based on the search query in the 'title' field
        title: {
          contains: slug,
        },
      },
    })
    const data = filteredMoviesData ?? []
    console.log(NextResponse.json({ data }))

    return NextResponse.json({ data })
  } catch (error) {
    return new Response("Hello, Next.js!", {
      status: 502,
    })
  }
}
