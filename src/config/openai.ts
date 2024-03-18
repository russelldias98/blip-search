import OpenAI from 'openai'
import { OPENAI_API_KEY } from '@/config/constants'

/**
 * This constant represents an instance of OpenAI.
 * OpenAI is used to interact with the OpenAI API.
 *
 * The 'apiKey' option is set to OPENAI_API_KEY to authenticate the API requests.
 *
 * @type {OpenAI}
 */
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
})

export default openai
