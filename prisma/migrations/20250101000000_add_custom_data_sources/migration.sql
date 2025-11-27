-- AlterEnum
ALTER TYPE "MetricSource" ADD VALUE 'CUSTOM';

-- CreateTable
CREATE TABLE "CustomDataSource" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "detectedSchema" JSONB NOT NULL,
    "fieldMapping" JSONB NOT NULL,
    "transformations" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT,

    CONSTRAINT "CustomDataSource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomDataRecord" (
    "id" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "externalId" TEXT,
    "data" JSONB NOT NULL,
    "syncedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomDataRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CustomDataSource_createdById_idx" ON "CustomDataSource"("createdById");

-- CreateIndex
CREATE UNIQUE INDEX "CustomDataRecord_sourceId_externalId_key" ON "CustomDataRecord"("sourceId", "externalId");

-- CreateIndex
CREATE INDEX "CustomDataRecord_sourceId_syncedAt_idx" ON "CustomDataRecord"("sourceId", "syncedAt");

-- AddForeignKey
ALTER TABLE "CustomDataSource" ADD CONSTRAINT "CustomDataSource_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomDataRecord" ADD CONSTRAINT "CustomDataRecord_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "CustomDataSource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

