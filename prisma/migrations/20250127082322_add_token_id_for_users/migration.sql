/*
  Warnings:

  - A unique constraint covering the columns `[tokenId]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "users_tokenId_key" ON "users"("tokenId");
