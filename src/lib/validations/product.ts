import { z } from "zod";

export const getProductsSchema = z.object({
    limit: z.number().default(10),
    offset: z.number().default(0),
    categories: z
      .string()
      .regex(/^\d+.\d+$/)
      .optional()
      .nullable(),
    subcategories: z
      .string()
      .regex(/^\d+.\d+$/)
      .optional()
      .nullable(),
    sort: z
      .string()
      .regex(/^\w+.(asc|desc)$/)
      .optional()
      .nullable(),
    price_range: z
      .string()
      .regex(/^\d+-\d+$/)
      .optional()
      .nullable(),
    store_ids: z
      .string()
      .regex(/^\d+.\d+$/)
      .optional()
      .nullable(),
  })