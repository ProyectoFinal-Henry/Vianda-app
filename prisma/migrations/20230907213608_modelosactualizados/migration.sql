/*
  Warnings:

  - You are about to drop the `Carta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DiaSemana` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ViandasEnMenu` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('comprador', 'repartidor', 'cocina', 'administrador');

-- CreateEnum
CREATE TYPE "Estado" AS ENUM ('pagado', 'despachado', 'entregado');

-- DropForeignKey
ALTER TABLE "DiaSemana" DROP CONSTRAINT "DiaSemana_fkCarta_fkey";

-- DropForeignKey
ALTER TABLE "ViandasEnMenu" DROP CONSTRAINT "ViandasEnMenu_fk_Viandas_fkey";

-- DropForeignKey
ALTER TABLE "ViandasEnMenu" DROP CONSTRAINT "ViandasEnMenu_fk_diasSemana_fkey";

-- AlterTable
ALTER TABLE "Vianda" ADD COLUMN     "domingo" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "jueves" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "lunes" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "martes" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "miercoles" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "sabado" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "viernes" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Carta";

-- DropTable
DROP TABLE "DiaSemana";

-- DropTable
DROP TABLE "ViandasEnMenu";

-- DropEnum
DROP TYPE "Dias";

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "rol" "Rol" NOT NULL,
    "nombreCompleto" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "fk_usuarioId" INTEGER NOT NULL,
    "totalVenta" INTEGER NOT NULL,
    "metodoPago" TEXT NOT NULL,
    "estado" "Estado" NOT NULL,
    "idTransaccion" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetallePedido" (
    "id" SERIAL NOT NULL,
    "fk_pedidoId" INTEGER NOT NULL,
    "fk_viandaId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio" DECIMAL(10,2) NOT NULL,
    "total" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "DetallePedido_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "Usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_fk_usuarioId_fkey" FOREIGN KEY ("fk_usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallePedido" ADD CONSTRAINT "DetallePedido_fk_pedidoId_fkey" FOREIGN KEY ("fk_pedidoId") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallePedido" ADD CONSTRAINT "DetallePedido_fk_viandaId_fkey" FOREIGN KEY ("fk_viandaId") REFERENCES "Vianda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
