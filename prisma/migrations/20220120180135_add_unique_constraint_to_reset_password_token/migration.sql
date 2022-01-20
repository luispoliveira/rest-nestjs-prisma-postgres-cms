/*
  Warnings:

  - A unique constraint covering the columns `[resetPasswordToken]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_resetPasswordToken_key" ON "user"("resetPasswordToken");
