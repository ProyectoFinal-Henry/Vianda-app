import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  try {
    const pedidos = await prisma.pedido.findMany({
      include: {
        usuario: {
          select: {
            nombreCompleto: true,
            email: true,
            telefono: true,
            direccion: true,
          },
        },
      },
    });
    return NextResponse.json(pedidos);
  } catch (error) {
    return NextResponse.json({
      message: "Error obteniendo la lista de pedidos",
      error: error.message,
    });
  }
}

export async function POST(request) {
  const { usuarioId, totalVenta, metodoPago, estado, viandas } =
    await request.json();

  try {
    const nuevoPedido = await prisma.pedido.create({
      data: {
        fk_usuarioId: usuarioId,
        totalVenta,
        metodoPago,
        estado,
        fecha: new Date(),
        viandas: {
          createMany: {
            data: viandas.map((vianda) => ({
              viandaId: vianda.viandaId,
              cantidad: vianda.cantidad,
              precio: vianda.precio,
              total: vianda.cantidad * vianda.precio,
            })),
          },
        },
      },
    });

    return NextResponse.json(nuevoPedido);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
