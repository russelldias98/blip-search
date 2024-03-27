import { z } from 'zod'

export const bodySchema = z.object({
  prompt: z.string(),
})

export type BodySchemaType = z.infer<typeof bodySchema>
