-- AlterTable
ALTER TABLE "Carta" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Vianda" ADD COLUMN     "cartaJuevesId" INTEGER,
ADD COLUMN     "cartaMiercolesId" INTEGER,
ADD COLUMN     "cartaViernesId" INTEGER,
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE "Vianda" ADD CONSTRAINT "Vianda_cartaMiercolesId_fkey" FOREIGN KEY ("cartaMiercolesId") REFERENCES "Carta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vianda" ADD CONSTRAINT "Vianda_cartaJuevesId_fkey" FOREIGN KEY ("cartaJuevesId") REFERENCES "Carta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vianda" ADD CONSTRAINT "Vianda_cartaViernesId_fkey" FOREIGN KEY ("cartaViernesId") REFERENCES "Carta"("id") ON DELETE SET NULL ON UPDATE CASCADE;
