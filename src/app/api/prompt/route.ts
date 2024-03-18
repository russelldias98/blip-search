import openaiClient from '@/config/openai'
import { CHAT_PROMPT, GPT_EMBEDDING_MODEL, GPT_MODEL } from '@/config/constants'
import { prisma } from '@/config/prisma'
import { Training } from '@prisma/client'
import pgvector from 'pgvector/utils'
import { formatQsAndAs } from '@/lib/utils'

export async function POST(req: Request) {
  const body = await req.json()

  // Generate an embedding for the user's prompt
  const embedding = await openaiClient.embeddings
    .create({
      input: body.prompt,
      model: GPT_EMBEDDING_MODEL,
    })
    .then((res) => pgvector.toSql(res.data[0].embedding))

  // Find the most similar training data to the user's prompt
  const answers = await prisma.$queryRaw<
    Training[]
  >`SELECT id, question, answer, 1 - (embedding <=> ${embedding}::vector) AS similarity FROM "Training" WHERE 1 - (embedding <=> ${embedding}::vector) > 0.8 ORDER BY embedding <=> ${embedding}::vector LIMIT 2;`

  // Ask OpenAI for a response
  const response = await openaiClient.chat.completions.create({
    model: GPT_MODEL,
    messages: [
      {
        role: 'user',
        content: `${CHAT_PROMPT} ${formatQsAndAs(answers)}`,
      },
      {
        role: 'user',
        content: body.prompt,
      },
    ],
  })

  // Format the response and return it
  return new Response(
    JSON.stringify({
      success: true,
      data: {
        answer: response.choices[0].message.content,
        createdAt: new Date().toISOString(),
      },
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  )
}
