import axios, { AxiosResponse } from 'axios'
import { Training } from '@prisma/client'

/**
 * Sends a POST request to the '/api/prompt' endpoint with the provided prompt.
 *
 * @async
 * @param {string} prompt - The prompt to be sent to the server.
 * @returns {Promise<AxiosResponse<{success: boolean, data: {answer: string, createdAt: string}}>>}
 * A promise that resolves to the server's response.
 */
export const getTrainingData = async (): Promise<
  AxiosResponse<{
    success: boolean
    data: Training[]
  }>
> => {
  return await axios.get('/api/train')
}
