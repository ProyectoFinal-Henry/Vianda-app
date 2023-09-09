/*
  Warnings:

  - The values [comprador] on the enum `Rol` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `DetallePedido` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `fk_pedidoId` on the `DetallePedido` table. All the data in the column will be lost.
  - You are about to drop the column `fk_viandaId` on the `DetallePedido` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `DetallePedido` table. All the data in the column will be lost.
  - Added the required column `pedidoId` to the `DetallePedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `viandaId` to the `DetallePedido` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Rol_new" AS ENUM ('cliente', 'repartidor', 'cocina', 'administrador');
ALTER TABLE "Usuario" ALTER COLUMN "rol" TYPE "Rol_new" USING ("rol"::text::"Rol_new");
ALTER TYPE "Rol" RENAME TO "Rol_old";
ALTER TYPE "Rol_new" RENAME TO "Rol";
DROP TYPE "Rol_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "DetallePedido" DROP CONSTRAINT "DetallePedido_fk_pedidoId_fkey";

-- DropForeignKey
ALTER TABLE "DetallePedido" DROP CONSTRAINT "DetallePedido_fk_viandaId_fkey";

-- AlterTable
ALTER TABLE "DetallePedido" DROP CONSTRAINT "DetallePedido_pkey",
DROP COLUMN "fk_pedidoId",
DROP COLUMN "fk_viandaId",
DROP COLUMN "id",
ADD COLUMN     "pedidoId" INTEGER NOT NULL,
ADD COLUMN     "viandaId" INTEGER NOT NULL,
ADD CONSTRAINT "DetallePedido_pkey" PRIMARY KEY ("pedidoId", "viandaId");

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "rol" SET DEFAULT 'cliente';

-- AddForeignKey
ALTER TABLE "DetallePedido" ADD CONSTRAINT "DetallePedido_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallePedido" ADD CONSTRAINT "DetallePedido_viandaId_fkey" FOREIGN KEY ("viandaId") REFERENCES "Vianda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
