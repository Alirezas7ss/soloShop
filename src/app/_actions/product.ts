import { getProductsSchema } from "@/components/validations/product"
import { db } from "@/lib/db"
import { ProductList } from "@prisma/client"
import { z } from "zod"

export async function getProductsAction(
    input: z.infer<typeof getProductsSchema>
  ) {
    const [column, order] =
      (input.sort?.split(".") as [
        keyof ProductList | undefined,
        "asc" | "desc" | undefined
      ]) ?? []
    const [minPrice, maxPrice] = input.price_range?.split("-") ?? []
    const search = input.searchPath || ''
    // const categories =
    //   (input.categories?.split(".") as ProductList["category"][]) ?? []
    const subcategories = input.subcategories?.split(".") ?? []
    // const storeIds = input.store_ids?.split(".").map(Number) ?? []
  
    const items = await db.productList.findMany({
        where: {
        //   category: categories.length ? { in: categories } : undefined,
          // subcategory: subcategories.length ? { in: subcategories } : undefined,
          price: {
            ...(minPrice && { gte: minPrice }),
            ...(maxPrice && { lte: maxPrice }),
          },
          title: {
            startsWith: search
          } 
        //   storeId: storeIds.length ? { in: storeIds } : undefined,
        },
        take: input.limit,
        skip: input.offset,
        orderBy: column && column in db.productList ? { [column]: order || "desc" } : { createdAt: "desc" },
      });
    
      const total = await db.productList.count({
        where: {
        //   category: categories.length ? { in: categories } : undefined,
          subcategory: subcategories.length ? { in: subcategories } : undefined,
          price: {
            ...(minPrice && { gte: minPrice }),
            ...(maxPrice && { lte: maxPrice }),
          },
        //   storeId: storeIds.length ? { in: storeIds } : undefined,
        },
      });
      console.log(search)
    console.log(items)
    console.log(total)

      return {
        items,
        total,
      };
    
  }