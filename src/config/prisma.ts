import { PrismaClient } from '@prisma/client'
import { DATABASE_URL } from './constants'

/**
 * This constant represents an instance of PrismaClient.
 * PrismaClient is used to interact with the database.
 *
 * The 'log' option is set to ['error', 'info', 'query', 'warn'] to specify the types of logs that should be outputted.
 *
 * The 'datasources' option is used to specify the database connection details.
 * In this case, the 'db' datasource is set to use the DATABASE_URL constant as the connection URL.
 *
 * @type {PrismaClient}
 */
export const prisma = new PrismaClient({
  log: ['error', 'info', 'query', 'warn'],
  datasources: {
    db: {
      url: DATABASE_URL,
    },
  },
})
