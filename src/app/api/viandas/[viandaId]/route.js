import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export const GET = async (request, { params }) => {
  const { viandaId } = params;

  try {
    if (viandaId) {
      const result = await prisma.vianda.findUnique({
        where: {
          id: Number(viandaId),
        },
      });
      return NextResponse.json(result, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json("vianda no encontrada", { status: 400 });
  }
};

export async function DELETE(request, { params }) {
  try {
    // Se busca la vianda a traves de params
    const vianda = await prisma.Vianda.findUnique({
      where: { id: Number(params.viandaId) },
    });

    // // Se evalua si existe la vianda
    if (!vianda) {
      return NextResponse.json("Vianda no encontrada", { status: 404 });
    }

    // // Se invierte el valor booleano {status}
    const actDeactVianda = await prisma.Vianda.update({
      where: { id: Number(params.viandaId) },
      data: { estado: !vianda.estado },
    });

    return NextResponse.json("Vianda modificada correctamente");
  } catch (error) {
    console.log("file: route.js:44  error:", error);

    return NextResponse.json(
      "Error al intentar activar- desactivar la vianda",
      { status: 403 }
    );
  }
}
