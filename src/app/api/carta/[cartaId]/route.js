import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function DELETE(request, { params }) {
  try {
    // Se busca la carta a traves de params
    const carta = await prisma.Carta.findUnique({
      where: { id: Number(params.cartaId) },
      select: { status: true },
    });

    // Se evalua si existe la carta
    if (!carta) {
      return NextResponse.json("Carta no encontrada", { status: 404 });
    }

    // Se invierte el valor booleano {status}
    await prisma.Carta.update({
      where: { id: Number(params.cartaId) },
      data: { status: !carta.status },
    });

    return NextResponse.json("Carta modificada correctamente");
  } catch (error) {
    return NextResponse.json("Error al intentar modificar la carta", {
      status: 403,
    });
  }
}
