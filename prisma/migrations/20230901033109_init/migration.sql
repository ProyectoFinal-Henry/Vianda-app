/*
  Warnings:

  - You are about to drop the `Dia` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Vianda" ADD COLUMN     "cartaLunesId" INTEGER,
ADD COLUMN     "cartaMartesId" INTEGER;

-- DropTable
DROP TABLE "Dia";

-- DropEnum
DROP TYPE "Dias";

-- CreateTable
CREATE TABLE "Carta" (
    "id" SERIAL NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaFin" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Carta_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Vianda" ADD CONSTRAINT "Vianda_cartaLunesId_fkey" FOREIGN KEY ("cartaLunesId") REFERENCES "Carta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vianda" ADD CONSTRAINT "Vianda_cartaMartesId_fkey" FOREIGN KEY ("cartaMartesId") REFERENCES "Carta"("id") ON DELETE SET NULL ON UPDATE CASCADE;
