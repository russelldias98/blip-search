import { bodySchema } from './types'
import { RunnableSequence } from '@langchain/core/runnables'
import llm from '@/config/llm'
import { StringOutputParser } from '@langchain/core/output_parsers'
import { SendResponse } from '@/lib/utils'
import { PromptTemplate } from '@langchain/core/prompts'
import { CHAT_PROMPT } from '@/config/constants'
import vectorStore from '@/config/vectorStore'

/**
 * Generates a prompt using the CHAT_PROMPT template.
 * @returns A prompt generated from the CHAT_PROMPT template.
 */
export function generatePrompt() {
  return PromptTemplate.fromTemplate(CHAT_PROMPT)
}

/**
 * Retrieves similar pages based on the given prompt.
 * @param prompt - The prompt to search for similarity.
 * @returns A string containing the page content of similar pages, separated by newlines.
 */
export async function getSimilarity(prompt: string) {
  const embeddingsResponse = await vectorStore.similaritySearchWithScore(prompt, 1)
  return embeddingsResponse.map((el) => el[0].pageContent).join('\n')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const validatedBody = await bodySchema.parseAsync(body)

    const context = await getSimilarity(validatedBody.prompt)

    const prompt = generatePrompt()

    const chain = RunnableSequence.from([prompt, llm, new StringOutputParser()])

    const response = await chain.invoke({ context })

    return SendResponse({
      success: true,
      data: {
        answer: response,
        createdAt: new Date().toISOString(),
      },
    })
  } catch (e: any) {
    return SendResponse({
      success: false,
      data: e.message,
    })
  }
}
