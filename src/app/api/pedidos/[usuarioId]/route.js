import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(request, { params }) {
  const { usuarioId } = params;
  try {
    // const pedidos = await prisma.pedido.findMany({
    //   where: {
    //     fk_usuarioId: Number(usuarioId),
    //   },

    //   select: {
    //     detallePedido: {
    //       select: {
    //         cantidad: true,
    //         precio: true,
    //         total: true,
    //         vianda: true,
    //       },
    //     },
    //   },
    // });
    const pedidos = await prisma.usuario.findUnique({
      where: {
        id: Number(usuarioId),
      },
      select: {
        pedidos: {
          orderBy: {
            id: 'desc'
          },
          include: {
            detallePedido: {
              include: {
                vianda: {
                  select: {
                    nombre: true,
                    tipo: true,
                    imagen: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return NextResponse.json(pedidos);
  } catch (error) {
    return NextResponse.json({
      message: "Error obteniendo los pedidos",
      error: error.message,
    });
  }
}
