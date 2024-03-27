export const DATABASE_URL = process.env.DATABASE_URL || ''
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY || ''
export const CHAT_PROMPT = `Answer the question asked by customers based on the context below. If the context below is empty DO NOT RESPOND!! Please Say "I'm sorry, I cannot help with that". If there is context provided, Please answer with detail and clarity. DO NOT respond more than 60 words. \n\n Context: \n\n {context} \n\n Answer:`
export const GPT_MODEL = 'gpt-4'
export const GPT_EMBEDDING_MODEL = 'text-embedding-3-large'
export const EXAMPLES = [
  'Who owns the content?',
  'How to change my password?',
  'Do you offer a discount for nonprofits and educational institutes?',
  'How to add a Pause?',
]
