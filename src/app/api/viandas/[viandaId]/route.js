import { NextResponse } from "next/server"
import { prisma } from '../../../../libs/prisma'

export async function DELETE(request, { params }) {
  try {
    // Se busca la vianda a traves de params
    const vianda = await prisma.Vianda.findUnique({
      where: { id: Number(params.viandaId) },
      select: { status: true },
    });

    // Se evalua si existe la vianda
    if (!vianda) {
      return NextResponse.json("Vianda no encontrada", { status: 404 });
    }

    // Se invierte el valor booleano {status}
    await prisma.Vianda.update({
      where: { id: Number(params.viandaId) },
      data: { status: !vianda.status },
    });

    return NextResponse.json("Vianda modificada correctamente");
  } catch (error) {
    return NextResponse.json("Error al intentar modificar la carta", { status: 403 });
  }
}