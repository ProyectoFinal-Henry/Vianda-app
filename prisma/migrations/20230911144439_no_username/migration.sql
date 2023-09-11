/*
  Warnings:

  - You are about to drop the column `username` on the `Usuario` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Usuario_username_key";

-- AlterTable
ALTER TABLE "DetallePedido" ALTER COLUMN "viandaNombre" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "username";
