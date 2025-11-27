-- AlterTable
ALTER TABLE "CustomDataSource" ADD COLUMN IF NOT EXISTS "aiInsights" JSONB,
ADD COLUMN IF NOT EXISTS "aiInsightsGeneratedAt" TIMESTAMP(3);

