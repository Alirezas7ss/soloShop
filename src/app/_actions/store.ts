"use server"

import { getStoreSchema, storeSchema } from "@/lib/validations/store"
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

export async function getNextStoreIdAction(
  input: z.infer<typeof getStoreSchema>
) {
  if (typeof input.id !== "number" || typeof input.userId !== "string") {
    throw new Error("Invalid input.")
  }

  const nextStore = await db.stores.findFirst({
    where: {
      AND: [
        {
          creatorId: input.userId,
        },
        {
          id: {
            gt: input.id.toString(),
          },
        },
      ],
    },
    orderBy: {
      id: 'asc',
    },
  });

  if (!nextStore) {
    const firstStore = await db.stores.findFirst({
      where: {
        creatorId: input.userId,
      },
      orderBy: {
        id: 'asc',
      },
    });

    if (!firstStore) {
      throw new Error("Store not found.")
    }

    return firstStore.id
  }

  return nextStore.id
}

export async function getPreviousStoreIdAction(
  input: z.infer<typeof getStoreSchema>
) {
  if (typeof input.id !== "number" || typeof input.userId !== "string") {
    throw new Error("Invalid input.")
  }

  const previousStore = await db.stores.findFirst({
    where: {
      AND: [
        {
          creatorId: input.userId,
        },
        {
          id: {
            lt: input.id.toString(),
          },
        },
      ],
    },
    orderBy: {
      id: 'desc',
    },
  });

  if (!previousStore) {
    const lastStore = await db.stores.findFirst({
      where: {
        creatorId: input.userId,
      },
      orderBy: {
        id: 'desc',
      },
    });

    if (!lastStore) {
      throw new Error("Store not found.")
    }

    return lastStore.id
  }

  return previousStore.id
}