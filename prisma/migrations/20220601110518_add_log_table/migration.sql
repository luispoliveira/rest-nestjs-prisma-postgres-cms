-- CreateEnum
CREATE TYPE "LogTypes" AS ENUM ('log', 'error', 'verbose', 'warning', 'debug');

-- CreateTable
CREATE TABLE "log" (
    "id" SERIAL NOT NULL,
    "context" TEXT NOT NULL,
    "type" "LogTypes" NOT NULL,
    "route" TEXT,
    "action" TEXT,
    "dto" JSONB,
    "params" JSONB,
    "query" JSONB,
    "body" JSONB,
    "error" JSONB,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" TEXT,
    "updatedBy" TEXT,

    CONSTRAINT "log_pkey" PRIMARY KEY ("id")
);
