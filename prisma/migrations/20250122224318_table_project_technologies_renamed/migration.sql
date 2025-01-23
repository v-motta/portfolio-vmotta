/*
  Warnings:

  - You are about to drop the `ProjectsTechnologies` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `github` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProjectsTechnologies" DROP CONSTRAINT "ProjectsTechnologies_projectId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectsTechnologies" DROP CONSTRAINT "ProjectsTechnologies_technologyId_fkey";

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "github" TEXT NOT NULL;

-- DropTable
DROP TABLE "ProjectsTechnologies";

-- CreateTable
CREATE TABLE "projects_technologies" (
    "technologyId" INTEGER NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "projects_technologies_pkey" PRIMARY KEY ("projectId","technologyId")
);

-- AddForeignKey
ALTER TABLE "projects_technologies" ADD CONSTRAINT "projects_technologies_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects_technologies" ADD CONSTRAINT "projects_technologies_technologyId_fkey" FOREIGN KEY ("technologyId") REFERENCES "technologies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
