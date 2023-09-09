import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  try {
    const pedidos = await prisma.pedido.findMany();
    return NextResponse.json(pedidos);
  } catch (error) {
    return NextResponse.json({
      message: "Error obteniendo la lista de pedidos",
      error: error.message,
    });
  }
}

export async function POST(request) {
  const { usuarioId, totalVenta, metodoPago, estado, detallePedido } =
    await request.json();

  try {
    const nuevoPedido = await prisma.pedido.create({
      data: {
        fk_usuarioId: usuarioId,
        totalVenta,
        metodoPago,
        estado,
        fecha: new Date(),
        detallePedido: {
          create: {
            data: detallePedido.map((item) => ({
              fk_viandaId: item.viandaId,
              cantidad: item.cantidad,
              precio: item.precio,
              total: item.cantidad * item.precio,
            })),
          },
        },
      },
      include: {
        detallePedido: true,
      },
    });

    return NextResponse.json(nuevoPedido);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
