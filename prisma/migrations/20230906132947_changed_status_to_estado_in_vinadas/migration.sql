/*
  Warnings:

  - You are about to drop the column `status` on the `Vianda` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Vianda" DROP COLUMN "status",
ADD COLUMN     "estado" BOOLEAN NOT NULL DEFAULT true;
