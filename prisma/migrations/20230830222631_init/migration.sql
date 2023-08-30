-- CreateEnum
CREATE TYPE "Dias" AS ENUM ('lunes', 'martes', 'miercoles', 'jueves', 'viernes');

-- CreateTable
CREATE TABLE "Dia" (
    "id" SERIAL NOT NULL,
    "nombreDia" "Dias" NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "clasico" INTEGER NOT NULL,
    "sinHarinas" INTEGER NOT NULL,
    "vegetariano" INTEGER NOT NULL,
    "dieta" INTEGER NOT NULL,

    CONSTRAINT "Dia_pkey" PRIMARY KEY ("id")
);
