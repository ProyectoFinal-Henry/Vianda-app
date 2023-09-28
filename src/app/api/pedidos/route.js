import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  if (searchParams.toString().length > 0) {
    try {
      const nombre = searchParams.get("nombre");
      const estado = searchParams.get("estado");
      const metodoPago = searchParams.get("metodo");
      const fecha = searchParams.get("fecha");
      const fechaFormateada = decodeURIComponent(fecha);

      const whereCondicion = [];
      if (nombre) {
        whereCondicion.push({
          usuario: {
            nombreCompleto: {
              contains: nombre,
              mode: "insensitive",
            },
          },
        });
      }
      if (estado) {
        whereCondicion.push({
          estado: estado,
        });
      }

      if (metodoPago) {
        whereCondicion.push({
          metodoPago: {
            contains: metodoPago,
            mode: "insensitive",
          },
        });
      }
      if (fecha) {
        whereCondicion.push({
          fecha: {
            gte: new Date(fechaFormateada).toISOString(),
          },
        });
      }
      const pedidos = await prisma.pedido.findMany({
        where: {
          AND: whereCondicion,
        },

        include: {
          usuario: true,
          detallePedido: true,
        },
        orderBy: {
          id: "desc",
        },
      });
      if (!pedidos || pedidos.length === 0) {
        return NextResponse.json({
          message: "No se encontraron pedidos con la informacion requerida",
        });
      }

      return NextResponse.json(pedidos);
    } catch (error) {
      return NextResponse.json({ error: error.message });
    }
  } else {
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
          detallePedido: true,
        },
        orderBy: {
          id: "desc",
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
}

export async function POST(request) {
  const { fk_usuarioId, totalVenta, metodoPago, estado, detallePedido } =
    await request.json();

  const editarStock = async (detallePedido) => {
    for (const detalle of detallePedido) {
      await prisma.vianda.update({
        where: {
          id: detalle.viandaId,
        },
        data: {
          stock: {
            decrement: detalle.cantidad,
          },
        },
      });
    }
  };
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
    editarStock(detallePedido);

    return NextResponse.json({
      message: "Pedido realizado exitosamente",
      data: nuevoPedido,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Ocurrio un error, intenta realizar el pedido nuevamente",
      error: error.message,
    });
  }
}

export async function PUT(request) {
  const { idPedido, estado } = await request.json();

  try {
    const pedidoActualizado = await prisma.pedido.update({
      where: { id: idPedido },
      data: {
        estado: estado,
      },
    });
    return NextResponse.json(pedidoActualizado);
  } catch (error) {
    return NextResponse.json({
      message: "Ocurrio un error al actualizar el estado del pedido.",
      error: error.message,
    });
  }
}
