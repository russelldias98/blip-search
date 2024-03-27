import { PrismaVectorStore } from '@langchain/community/vectorstores/prisma'
import { Prisma, Document } from '@prisma/client'
import embeddings from './embeddings'
import { db } from './prisma'

const vectorStore = PrismaVectorStore.withModel<Document>(db).create(embeddings, {
  prisma: Prisma,
  tableName: 'Document',
  vectorColumnName: 'vector',
  columns: {
    id: PrismaVectorStore.IdColumn,
    content: PrismaVectorStore.ContentColumn,
  },
})

export default vectorStore
