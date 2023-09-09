/*
  Warnings:

  - You are about to alter the column `totalVenta` on the `Pedido` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(10,2)`.
  - Added the required column `viandaImagen` to the `DetallePedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `viandaNombre` to the `DetallePedido` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DetallePedido" ADD COLUMN     "viandaImagen" TEXT NOT NULL,
ADD COLUMN     "viandaNombre" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Pedido" ALTER COLUMN "totalVenta" SET DATA TYPE DECIMAL(10,2);
