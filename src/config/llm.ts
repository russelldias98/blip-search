import { ChatOpenAI } from '@langchain/openai'
import { GPT_MODEL, OPENAI_API_KEY } from './constants'

const llm = new ChatOpenAI({
  temperature: 0.5,
  openAIApiKey: OPENAI_API_KEY,
  modelName: GPT_MODEL,
})

export default llm
