/*
  Warnings:

  - Made the column `hour_duration` on table `certificates` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "certificates" ALTER COLUMN "hour_duration" SET NOT NULL;
