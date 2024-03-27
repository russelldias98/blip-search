import axios from 'axios'
import { Document } from '@prisma/client'

interface ResponseType {
  success: boolean
  data: Document[]
}

export const getTrainingData = async () => {
  return axios.get<ResponseType>('/api/train')
}
