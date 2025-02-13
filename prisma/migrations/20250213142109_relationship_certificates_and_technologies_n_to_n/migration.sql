/*
  Warnings:

  - You are about to drop the column `technology_id` on the `certificates` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "certificates" DROP CONSTRAINT "certificates_technology_id_fkey";

-- AlterTable
ALTER TABLE "certificates" DROP COLUMN "technology_id";

-- CreateTable
CREATE TABLE "_CertificateToTechnology" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CertificateToTechnology_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CertificateToTechnology_B_index" ON "_CertificateToTechnology"("B");

-- AddForeignKey
ALTER TABLE "_CertificateToTechnology" ADD CONSTRAINT "_CertificateToTechnology_A_fkey" FOREIGN KEY ("A") REFERENCES "certificates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CertificateToTechnology" ADD CONSTRAINT "_CertificateToTechnology_B_fkey" FOREIGN KEY ("B") REFERENCES "technologies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
