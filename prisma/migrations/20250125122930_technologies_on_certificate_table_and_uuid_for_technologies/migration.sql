/*
  Warnings:

  - You are about to drop the column `main_technology` on the `certificates` table. All the data in the column will be lost.
  - You are about to drop the column `image_url` on the `projects` table. All the data in the column will be lost.
  - The primary key for the `projects_technologies` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `technologies` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `certificateId` to the `projects_technologies` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "projects_technologies" DROP CONSTRAINT "projects_technologies_technologyId_fkey";

-- AlterTable
ALTER TABLE "certificates" DROP COLUMN "main_technology";

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "image_url",
ADD COLUMN     "images_url" TEXT[],
ALTER COLUMN "github" DROP NOT NULL;

-- AlterTable
ALTER TABLE "projects_technologies" DROP CONSTRAINT "projects_technologies_pkey",
ADD COLUMN     "certificateId" TEXT NOT NULL,
ALTER COLUMN "technologyId" SET DATA TYPE TEXT,
ADD CONSTRAINT "projects_technologies_pkey" PRIMARY KEY ("projectId", "technologyId");

-- AlterTable
ALTER TABLE "technologies" DROP CONSTRAINT "technologies_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "technologies_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "technologies_id_seq";

-- AddForeignKey
ALTER TABLE "projects_technologies" ADD CONSTRAINT "projects_technologies_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "technologies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects_technologies" ADD CONSTRAINT "projects_technologies_certificateId_fkey" FOREIGN KEY ("certificateId") REFERENCES "certificates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
