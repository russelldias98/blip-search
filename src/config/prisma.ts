import { PrismaClient } from '@prisma/client'
import { DATABASE_URL } from './constants'

export const db = new PrismaClient({
  log: ['error', 'info', 'query', 'warn'],
  datasources: {
    db: {
      url: DATABASE_URL,
    },
  },
})
