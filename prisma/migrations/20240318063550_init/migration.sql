-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "vector";

-- CreateTable
CREATE TABLE "Training" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL DEFAULT '',
    "answer" TEXT NOT NULL DEFAULT '',
    "hash" TEXT NOT NULL DEFAULT '',
    "tokenCount" INTEGER NOT NULL DEFAULT 0,
    "embedding" vector(1536),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Training_pkey" PRIMARY KEY ("id")
);
