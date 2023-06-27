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
      discount: 10,
      price: 200,
    },
    {
      image: [
        "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/ar23103j2_150_a.jpg",
        "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/ar23103j2_150_b.jpg",
        "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/ar23103j2_150_f.jpg",
      ],
      title: "کت خاکستری",
      discount: 1,
      price: 85,
    },
    {
      image: [
        "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0074044_150_a.jpg",
        "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0074044_150_c.jpg",
        "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0074044_150_b.jpg",
      ],
      title: "جلیقه با طرح بته جقه",
      discount: 0,
      price: 111,
    },
    {
      image: [
        "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0074044_150_a.jpg",
        "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0074044_150_c.jpg",
        "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0074044_150_b.jpg",
      ],
      title: "جلیقه با طرح بته جقه",
      discount: 0,
      price: 90,
    },
    {
      image: [
        "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0074044_150_a.jpg",
        "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0074044_150_c.jpg",
        "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0074044_150_b.jpg",
      ],
      title: "جلیقه با طرح بته جقه",
      discount: 0,
      price: 50,
    },
    {
      image: [
        "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0074044_150_a.jpg",
        "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0074044_150_c.jpg",
        "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0074044_150_b.jpg",
      ],
      title: "جلیقه با طرح بته جقه",
      discount: 20,
      price: 300,
    },
    {
      image: [
        "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0074044_150_a.jpg",
        "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0074044_150_c.jpg",
        "https://cdn.suitdirect.co.uk/upload/siteimages/xlarge/0074044_150_b.jpg",
      ],
      title: "جلیقه با طرح بته جقه",
      discount: 0,
      price: 250,
    },
  ]
  await db.productList.deleteMany()
  const aaa = await db.productList.findMany()
  console.log(aaa)
  for (let i = 0; i < 15; i++) {
    let category =
      faker.helpers.shuffle(productCategories)[0]?.title ?? "skateboards"
    const subcategories = getSubcategories(category).map((s) => s.value)
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log(randomNumber)
    const {title , image ,price , discount} = data[randomNumber]
    
    console.log(title, discount)
    await db.productList.create({
      data: {
        title: title,
        price: price,

        description: " این هم مثل بقیه خوبه حالا نخر ببینیم کی ضرر میکنه",
        imageSrc: image,
        category: category,
        authorId: "1",
        quantity: 5,
        discount: discount,
        subcategory: faker.helpers.shuffle(subcategories)[0] ?? null,
        inventory: faker.number.int({ min: 1, max: 100 }),
        // rating: faker.number.int({ min: 1, max: 5 }),
        tags: faker.helpers.shuffle(productTags).slice(0, 3),
        storeId: "1",
        createdAt: "2023-06-23T13:59:06.623Z",
      },
    })
  }
}
