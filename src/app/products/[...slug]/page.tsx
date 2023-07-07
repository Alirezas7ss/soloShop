import { env } from "@/env.mjs"
import type { Metadata } from "next"
import { notFound } from "next/navigation"


import { cn, formatPrice } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
// import { AddToCartForm } from "@/components/forms/add-to-cart-form"
import { Icons } from "@/components/icons"
// import { ProductCard } from "@/components/product-card"
import { ProductImageCarousel } from "@/components/product/product-image-carousel"
import { Shell } from "@/components/Shell"
import { db } from "@/lib/db"
import AddButton from "@/components/productsPage/AddButton"

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Product",
  description: "Product description",
}

interface PrdouctPageProps {
  params: {
    slug: string
  }
}

export default async function ProductPage({ params }: PrdouctPageProps) {
   
 
  const productId = params.slug[0]

  const product = await db.productList.findFirst({
    where: {
      id: productId,
    },
  })

  if (!product) {
    notFound()
  }

  // const store = await db.query.stores.findFirst({
  //   columns: {
  //     id: true,
  //     name: true,
  //   },
  //   where: eq(stores.id, product.storeId),
  // })

  // const productsFromStore = store
  //   ? await db
  //       .select()
  //       .from(products)
  //       .limit(4)
  //       .where(
  //         and(
  //           eq(products.storeId, product.storeId),
  //           not(eq(products.id, productId))
  //         )
  //       )
  //       .orderBy(desc(products.inventory))
  //   : []

  return (
    <Shell >
      <div dir='ltr' className=" flex items-center space-x-1 text-sm capitalize text-muted-foreground">
        <div className="truncate">Products</div>
        <Icons.chevronRight className="h-4 w-4" aria-hidden="true" />
        <div className={cn(!product.subcategory && "text-foreground")}>
          {product.category}
        </div>
        {product.subcategory ? (
          <>
            <Icons.chevronRight className="h-4 w-4" aria-hidden="true" />
            <div className="text-foreground">{product.subcategory}</div>
          </>
        ) : null}
      </div>
        <Separator className=" md:hidden" />
      <div className="  flex flex-col-reverse gap-8 md:flex-row md:gap-16">
        
        
        <div className=" flex w-full flex-col gap-4 md:w-1/2">
          <div className="space-y-2">
            <h2 className="line-clamp-1 text-2xl font-bold">{product.title}</h2>
            {/* <p dir='ltr' className="text-base text-muted-foreground">
              {formatPrice(product.price)}
            </p> */}
            <div dir='ltr' className="flex   h-8 -mx-1">
                  <div className='flex h-8 w-[50%]'>
                    <p className="h-fit w-fit rotate-90">تومان</p>
                                    <div className="w-full">
                    <div className="flex justify-between ">
                      { product.price && <div>
                        {(
                          product.price *
                          ((100 - product.discount) / 100)
                        ).toLocaleString()}
                      </div>}
                      {product.discount > 0 && (
                        <div className="-mb-[5px]  mr-1 flex items-center  justify-center rounded-lg bg-gradient-to-r from-[--brand-primary] to-[--brand-secondary] px-2 py-[2px] font-bold text-background">
                          {product.discount}%
                        </div>
                      )}
                    </div>
                    {product.discount > 0 && (
                      <div className="flex items-center text-xs text-slate-500 line-through">
                        {product.price.toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            {/* {store ? (
              <Link
                href={`/products?store_ids=${store.id}`}
                className="line-clamp-1 inline-block text-base text-muted-foreground hover:underline"
              >
                {store.name}
              </Link>
            ) : null} */}
          </div>
          <Separator className="my-1.5" />
          {/* <AddToCartForm productId={productId} /> */}
   <AddButton />
          <Separator className="mt-5" />
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="description">
              <AccordionTrigger>توضیحات</AccordionTrigger>
              <AccordionContent>
                {product.description ??
                  "No description is available for this product."}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <ProductImageCarousel
          className="w-full md:w-1/2 "
          images={product.imageSrc ?? []}
        />
      </div>
      {/* {store && productsFromStore.length > 0 ? (
        <div className="overflow-hidden md:pt-6">
          <h2 className="line-clamp-1 flex-1 text-2xl font-bold">
            More products from {store.name}
          </h2>
          <div className="overflow-x-auto pb-2 pt-6">
            <div className="flex w-fit gap-4">
              {productsFromStore.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="min-w-[260px]"
                />
              ))}
            </div>
          </div>
        </div>
      ) : null} */}
    </Shell>
  )
}
