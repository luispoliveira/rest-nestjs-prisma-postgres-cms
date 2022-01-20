/*
  Warnings:

  - You are about to drop the column `permissionId` on the `role2user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "role2user" DROP CONSTRAINT "role2user_permissionId_fkey";

-- AlterTable
ALTER TABLE "role2user" DROP COLUMN "permissionId";
