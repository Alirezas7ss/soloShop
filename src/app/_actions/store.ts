"use server"

import { storeSchema } from "@/lib/validations/store"
import { slugify } from "@/lib/utils"
import { revalidatePath } from "next/cache"
import { z } from "zod"
import { clerkClient } from "@clerk/nextjs"
import { db } from "@/lib/db"

export async function addStoreAction(
  input: z.infer<typeof storeSchema> & { userId: string }
) {
  const storeWithSameName = await db.stores.findFirst({
    where: {
      name: input.name,
    },
  });

  if (storeWithSameName) {
    throw new Error("Store name already taken.")
  }

  await db.insert(stores).values({
    name: input.name,
    description: input.description,
    userId: input.userId,
    slug: slugify(input.name),
  })
  await db.stores.create({
    data: {
      name: input.name,
      description: input.description,
      creatorId: input.userId,
      slug: slugify(input.name),
    },
  });

  revalidatePath("/dashboard/stores")
}