/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `certificates` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "certificates_slug_key" ON "certificates"("slug");
