-- CreateTable
CREATE TABLE "DonorEmail" (
    "id" TEXT NOT NULL,
    "donorId" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "DonorEmail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DonorEmail_donorId_email_key" ON "DonorEmail"("donorId", "email");

-- AddForeignKey
ALTER TABLE "DonorEmail" ADD CONSTRAINT "DonorEmail_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "Donor"("id") ON DELETE CASCADE ON UPDATE CASCADE;


