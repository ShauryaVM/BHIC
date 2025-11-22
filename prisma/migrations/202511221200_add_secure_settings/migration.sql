-- CreateTable
CREATE TABLE "SecureSetting" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "encryptedValue" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedById" TEXT,

    CONSTRAINT "SecureSetting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SecureSettingHistory" (
    "id" TEXT NOT NULL,
    "settingId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "encryptedValue" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedById" TEXT,

    CONSTRAINT "SecureSettingHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SecureSetting_key_key" ON "SecureSetting"("key");

-- CreateIndex
CREATE INDEX "SecureSettingHistory_key_idx" ON "SecureSettingHistory"("key");

-- AddForeignKey
ALTER TABLE "SecureSetting" ADD CONSTRAINT "SecureSetting_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SecureSettingHistory" ADD CONSTRAINT "SecureSettingHistory_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SecureSettingHistory" ADD CONSTRAINT "SecureSettingHistory_settingId_fkey" FOREIGN KEY ("settingId") REFERENCES "SecureSetting"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

