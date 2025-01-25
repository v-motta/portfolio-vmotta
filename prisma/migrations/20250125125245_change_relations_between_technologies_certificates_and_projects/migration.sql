/*
  Warnings:

  - You are about to drop the `projects_technologies_certificates` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `technology_id` to the `certificates` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "projects_technologies_certificates" DROP CONSTRAINT "projects_technologies_certificates_certificateId_fkey";

-- DropForeignKey
ALTER TABLE "projects_technologies_certificates" DROP CONSTRAINT "projects_technologies_certificates_projectId_fkey";

-- DropForeignKey
ALTER TABLE "projects_technologies_certificates" DROP CONSTRAINT "projects_technologies_certificates_technologyId_fkey";

-- AlterTable
ALTER TABLE "certificates" ADD COLUMN     "technology_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "technologies" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "projects_technologies_certificates";

-- CreateTable
CREATE TABLE "_ProjectToTechnology" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProjectToTechnology_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjectToTechnology_B_index" ON "_ProjectToTechnology"("B");

-- AddForeignKey
ALTER TABLE "certificates" ADD CONSTRAINT "certificates_technology_id_fkey" FOREIGN KEY ("technology_id") REFERENCES "technologies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechnology" ADD CONSTRAINT "_ProjectToTechnology_A_fkey" FOREIGN KEY ("A") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechnology" ADD CONSTRAINT "_ProjectToTechnology_B_fkey" FOREIGN KEY ("B") REFERENCES "technologies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
