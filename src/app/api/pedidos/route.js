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
  const { fk_usuarioId, totalVenta, metodoPago, estado, detallePedido } =
    await request.json();

  try {
    const nuevoPedido = await prisma.pedido.create({
      data: {
        fk_usuarioId,
        totalVenta,
        metodoPago,
        estado,
        fecha: new Date(),
        detallePedido: {
          createMany: {
            data: detallePedido.map((detalle) => ({
              viandaId: detalle.viandaId,
              viandaNombre: detalle.viandaNombre,
              viandaImagen: detalle.viandaImagen,
              cantidad: detalle.cantidad,
              precio: detalle.precio,
              total: detalle.cantidad * detalle.precio,
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
