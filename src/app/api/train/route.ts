import { trainingData } from '@/app/api/train/types'
import { db } from '@/config/prisma'
import vectorStore from '@/config/vectorStore'
import { SendResponse } from '@/lib/utils'
import CryptoJS from 'crypto-js'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validated = await trainingData.parseAsync(body)

    const texts = validated.map((text) => ({
      content: text.content,
      hash: CryptoJS.SHA256(text.content).toString(),
    }))

    await vectorStore.addModels(
      await db.$transaction(
        texts.map(({ content, hash }) => db.document.create({ data: { content, hash } }))
      )
    )

    return SendResponse({
      success: true,
    })
  } catch (e: any) {
    return SendResponse({
      success: true,
      data: e.message,
    })
  }
}

export async function GET() {
  try {
    const trainedData = await db.document.findMany()

    return SendResponse({
      success: true,
      data: trainedData,
    })
  } catch (e: any) {
    return SendResponse({
      success: false,
      data: e.message,
    })
  }
}
