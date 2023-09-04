/*
  Warnings:

  - You are about to drop the column `cartaJuevesId` on the `Vianda` table. All the data in the column will be lost.
  - You are about to drop the column `cartaLunesId` on the `Vianda` table. All the data in the column will be lost.
  - You are about to drop the column `cartaMartesId` on the `Vianda` table. All the data in the column will be lost.
  - You are about to drop the column `cartaMiercolesId` on the `Vianda` table. All the data in the column will be lost.
  - You are about to drop the column `cartaViernesId` on the `Vianda` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Dias" AS ENUM ('lunes', 'martes', 'miercoles', 'jueves', 'viernes');

-- DropForeignKey
ALTER TABLE "Vianda" DROP CONSTRAINT "Vianda_cartaJuevesId_fkey";

-- DropForeignKey
ALTER TABLE "Vianda" DROP CONSTRAINT "Vianda_cartaLunesId_fkey";

-- DropForeignKey
ALTER TABLE "Vianda" DROP CONSTRAINT "Vianda_cartaMartesId_fkey";

-- DropForeignKey
ALTER TABLE "Vianda" DROP CONSTRAINT "Vianda_cartaMiercolesId_fkey";

-- DropForeignKey
ALTER TABLE "Vianda" DROP CONSTRAINT "Vianda_cartaViernesId_fkey";

-- AlterTable
ALTER TABLE "Vianda" DROP COLUMN "cartaJuevesId",
DROP COLUMN "cartaLunesId",
DROP COLUMN "cartaMartesId",
DROP COLUMN "cartaMiercolesId",
DROP COLUMN "cartaViernesId";

-- CreateTable
CREATE TABLE "ViandasEnMenu" (
    "id" SERIAL NOT NULL,
    "fk_Viandas" INTEGER,
    "fk_diasSemana" INTEGER,

    CONSTRAINT "ViandasEnMenu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiaSemana" (
    "id" SERIAL NOT NULL,
    "fkCarta" INTEGER,
    "dia" "Dias" NOT NULL,

    CONSTRAINT "DiaSemana_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ViandasEnMenu" ADD CONSTRAINT "ViandasEnMenu_fk_Viandas_fkey" FOREIGN KEY ("fk_Viandas") REFERENCES "Vianda"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViandasEnMenu" ADD CONSTRAINT "ViandasEnMenu_fk_diasSemana_fkey" FOREIGN KEY ("fk_diasSemana") REFERENCES "DiaSemana"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiaSemana" ADD CONSTRAINT "DiaSemana_fkCarta_fkey" FOREIGN KEY ("fkCarta") REFERENCES "Carta"("id") ON DELETE SET NULL ON UPDATE CASCADE;
