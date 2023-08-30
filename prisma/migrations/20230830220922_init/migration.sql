-- CreateEnum
CREATE TYPE "Tipo" AS ENUM ('clasico', 'sinHarinas', 'vegetariano', 'dieta');

-- CreateTable
CREATE TABLE "Vianda" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo" "Tipo" NOT NULL,
    "descripcion" TEXT NOT NULL,
    "ingredientes" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,

    CONSTRAINT "Vianda_pkey" PRIMARY KEY ("id")
);
