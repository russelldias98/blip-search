import { OpenAIEmbeddings } from '@langchain/openai'
import { GPT_EMBEDDING_MODEL, OPENAI_API_KEY } from './constants'

const embeddings = new OpenAIEmbeddings({
  openAIApiKey: OPENAI_API_KEY,
  modelName: GPT_EMBEDDING_MODEL,
})

export default embeddings
