"use server"

import { storeSchema } from "@/components/validations/store"
import { db } from "@/lib/db"
import { slugify } from "@/lib/utils"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export async function addStoreAction(
    input: z.infer<typeof storeSchema> & { userId: string }
  ) {
    const user = await clerkClient.users.getUser(input.userId)
  
    if (!user) {
      throw new Error("User not found.")
    }
  
    // If the user doesn't have a role, set it to user
    if (!user.privateMetadata.role) {
      await clerkClient.users.updateUser(input.userId, {
        privateMetadata: {
          ...user.privateMetadata,
          role: "user" satisfies UserRole,
        },
      })
    }
  
    const storeWithSameName = await db.query.stores.findFirst({
      where: eq(stores.name, input.name),
    })
  
    if (storeWithSameName) {
      throw new Error("Store name already taken.")
    }
  
    await db.insert(stores).values({
      name: input.name,
      description: input.description,
      userId: input.userId,
      slug: slugify(input.name),
    })
  
    revalidatePath("/dashboard/stores")
  }