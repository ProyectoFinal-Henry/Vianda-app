import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(request, { params }) {
  const { pedidoId } = params;

  try {
    const pedido = await prisma.pedido.findUnique({
      where: {
        id: Number(pedidoId),
      },

      select: {
        id: true,
        totalVenta: true,
        estado: true,
        fecha: true,
        usuario: {
          select: {
            nombreCompleto: true,
            telefono: true,
            email: true,
          },
        },
        detallePedido: {
          select: {
            viandaNombre: true,
            precio: true,
            cantidad: true,
            total: true,
          },
        },
      },
    });
    if (!pedido) {
      return NextResponse.json({
        message: "No existe pedido con el ID requerido",
      });
    }
    return NextResponse.json(pedido);
  } catch (error) {
    return NextResponse.json({
      message: "Error obteniendo el detalle del pedido",
      error: error.message,
    });
  }
}
