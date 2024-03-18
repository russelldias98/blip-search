import openaiClient from '@/config/openai'
import pgvector from 'pgvector/utils'
import { GPT_EMBEDDING_MODEL } from '@/config/constants'
import { cleanString, generateHash } from '@/lib/utils'
import { trainingData } from '@/app/api/train/types'
import { prisma } from '@/config/prisma'

export async function POST(request: Request) {
  const body = await request.json()
  // Validate body
  const validated = await trainingData.parseAsync(body)
  for await (const item of validated) {
    try {
      // Generate hash of question + answer
      const hashDigest = generateHash(item.question, item.answer)

      // Generate embedding
      const embedding = await openaiClient.embeddings.create({
        input: cleanString(item.answer),
        model: GPT_EMBEDDING_MODEL,
      })

      // Save to db
      const vector = pgvector.toSql(embedding.data[0].embedding)
      const createdItem = await prisma.training.create({
        data: {
          question: cleanString(item.question),
          answer: cleanString(item.answer),
          hash: hashDigest,
          tokenCount: embedding.usage.total_tokens,
        },
      })
      // Update the embedding because we need to store it as a vector
      await prisma.$executeRaw`UPDATE "Training" SET embedding = ${vector}::vector WHERE id = ${createdItem.id};`
    } catch (e) {
      console.error(e)
      throw e
    }
  }

  return Response.json({
    success: true,
  })
}

export async function GET() {
  const data = await prisma.training.findMany({
    select: {
      id: true,
      answer: true,
      question: true,
    },
  })
  return Response.json({
    success: true,
    data,
  })
}
