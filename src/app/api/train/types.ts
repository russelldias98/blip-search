import { z } from 'zod'

export const trainingRow = z.object({
  question: z.string(),
  answer: z.string(),
})

export type TrainingRowType = z.infer<typeof trainingRow>

export const trainingData = z.array(trainingRow)

export type TrainingDataType = z.infer<typeof trainingData>
