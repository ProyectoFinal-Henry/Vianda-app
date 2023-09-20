-- CreateEnum
CREATE TYPE "Tipo" AS ENUM ('clasico', 'sinHarinas', 'vegetariano', 'dieta');

-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('cliente', 'repartidor', 'cocina', 'administrador');

-- CreateEnum
CREATE TYPE "Estado" AS ENUM ('pendiente', 'pagado', 'despachado', 'entregado');

-- CreateTable
CREATE TABLE "Vianda" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo" "Tipo" NOT NULL,
    "descripcion" TEXT NOT NULL,
    "ingredientes" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "precio" DECIMAL(10,2),
    "stock" INTEGER NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT true,
    "lunes" BOOLEAN NOT NULL DEFAULT false,
    "martes" BOOLEAN NOT NULL DEFAULT false,
    "miercoles" BOOLEAN NOT NULL DEFAULT false,
    "jueves" BOOLEAN NOT NULL DEFAULT false,
    "viernes" BOOLEAN NOT NULL DEFAULT false,
    "sabado" BOOLEAN NOT NULL DEFAULT false,
    "domingo" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Vianda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "rol" "Rol" NOT NULL DEFAULT 'cliente',
    "nombreCompleto" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "carrito" TEXT DEFAULT '[]',

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "fk_usuarioId" INTEGER NOT NULL,
    "totalVenta" DECIMAL(10,2) NOT NULL,
    "metodoPago" TEXT NOT NULL,
    "estado" "Estado" NOT NULL,
    "idTransaccion" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetallePedido" (
    "pedidoId" INTEGER NOT NULL,
    "viandaId" INTEGER NOT NULL,
    "viandaNombre" TEXT,
    "viandaImagen" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio" DECIMAL(10,2) NOT NULL,
    "total" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "DetallePedido_pkey" PRIMARY KEY ("pedidoId","viandaId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_fk_usuarioId_fkey" FOREIGN KEY ("fk_usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallePedido" ADD CONSTRAINT "DetallePedido_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallePedido" ADD CONSTRAINT "DetallePedido_viandaId_fkey" FOREIGN KEY ("viandaId") REFERENCES "Vianda"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
