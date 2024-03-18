import axios, { AxiosResponse } from 'axios'

/**
 * Sends a POST request to the '/api/prompt' endpoint with the provided prompt.
 *
 * @async
 * @param {string} prompt - The prompt to be sent to the server.
 * @returns {Promise<AxiosResponse<{success: boolean, data: {answer: string, createdAt: string}}>>}
 * A promise that resolves to the server's response.
 */
export const postPrompt = async (
  prompt: string
): Promise<
  AxiosResponse<{
    success: boolean
    data: {
      answer: string
      createdAt: string
    }
  }>
> => {
  return await axios.post('/api/prompt', { prompt })
}
