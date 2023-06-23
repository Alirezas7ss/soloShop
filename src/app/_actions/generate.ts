"use server"

import { ProductList } from "@prisma/client"

import { faker } from "@faker-js/faker"

import {
  getSubcategories,
  productCategories,
  productTags,
} from "@/config/products"
import { db } from "@/lib/db"

export async function generateProducts() {
    const data = [
        {
          image: [
            "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0076256_150_a.jpg",
            "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0076256_150_a.jpg",
            "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0076256_150_h.jpg",
          ],
          title: "کت سورمه ای",
          discount: 10
        },
        {
          image: [
            "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/ar23103j2_150_a.jpg",
            "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/ar23103j2_150_b.jpg",
            "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/ar23103j2_150_f.jpg",
          ],
          title: "کت خاکستری",
          discount: 1
      
        },
        {
          image: [
            "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0074044_150_a.jpg",
            "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0074044_150_c.jpg",
            "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0074044_150_b.jpg",
          ],
          title: "جلیقه با طرح بته جقه",
          discount: 0
      
        },
      ]
  await db.productList.deleteMany()

  for (let i = 0; i < 2; i++) {
    let category =
      faker.helpers.shuffle(productCategories)[0]?.title ?? "skateboards"
    const subcategories = getSubcategories(category).map((s) => s.value)
    const title = data[i]?.title
    const image = data[i]?.image
    const discount = data[i]?.discount
    console.log(title , discount)
    await db.productList.create({
      data: {
        title: title,
        price: 200,

        description: " این هم مثل بقیه خوبه حالا نخر ببینیم کی ضرر میکنه",
        imageSrc: image,
        category: category,
        authorId: "1" ,
        quantity: 5,
        discount: discount,
        subcategory: faker.helpers.shuffle(subcategories)[0] ?? null,
        inventory: faker.number.int({ min: 1, max: 100 }),
        // rating: faker.number.int({ min: 1, max: 5 }),
        tags: faker.helpers.shuffle(productTags).slice(0, 3),
        storeId: "1",
        createdAt: '2023-06-23T13:59:06.623Z',
      },
    })
  }
}
