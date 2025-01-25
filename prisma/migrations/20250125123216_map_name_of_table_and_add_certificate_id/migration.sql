/*
  Warnings:

  - You are about to drop the `projects_technologies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "projects_technologies" DROP CONSTRAINT "projects_technologies_certificateId_fkey";

-- DropForeignKey
ALTER TABLE "projects_technologies" DROP CONSTRAINT "projects_technologies_projectId_fkey";

-- DropForeignKey
ALTER TABLE "projects_technologies" DROP CONSTRAINT "projects_technologies_technologyId_fkey";

-- DropTable
DROP TABLE "projects_technologies";

-- CreateTable
CREATE TABLE "projects_technologies_certificates" (
    "technologyId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "certificateId" TEXT NOT NULL,

    CONSTRAINT "projects_technologies_certificates_pkey" PRIMARY KEY ("projectId","technologyId","certificateId")
);

-- AddForeignKey
ALTER TABLE "projects_technologies_certificates" ADD CONSTRAINT "projects_technologies_certificates_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects_technologies_certificates" ADD CONSTRAINT "projects_technologies_certificates_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "technologies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects_technologies_certificates" ADD CONSTRAINT "projects_technologies_certificates_certificateId_fkey" FOREIGN KEY ("certificateId") REFERENCES "certificates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
