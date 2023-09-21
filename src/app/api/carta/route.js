import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { fechaInicio, fechaFin, diasSemana } = await request.json();

    const nuevaCarta = await prisma.Carta.create({
      data: {
        fechaInicio: fechaInicio,
        fechaFin: fechaFin,
        diasSemana: {
          create: diasSemana.map((dia) => ({
            dia: dia.dia,
            viandas: {
              create: dia.viandas.map((vianda) => ({
                vianda: {
                  connect: {
                    id: vianda.id,
                    nombre: vianda.nombre,
                    tipo: vianda.tipo,
                    descripcion: vianda.descripcion,
                    ingredientes: vianda.ingredientes,
                    imagen: vianda.imagen,
                    stock: vianda.stock,
                  },
                },
              })),
            },
          })),
        },
      },
    });

    return NextResponse.json(nuevaCarta);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
  // const fechaInicio = searchParams.get("fechaInicio");
  // const whereCondicion = [];
  // if (id) {
  //   whereCondicion.push({ id: parseInt(id) });
  // }
  // if (fechaInicio) {
  //   whereCondicion.push({ fechaInicio: fechaInicio });
  // }
  // console.log(whereCondicion);
}
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  try {
    if (searchParams.toString().length > 0) {
      const id = searchParams.get("id");
      const carta = await prisma.Carta.findUnique({
        where: {
          id: parseInt(id),
        },
        select: {
          id: true,
          fechaInicio: true,
          fechaFin: true,
          status: true,
          diasSemana: {
            select: {
              dia: true,
              viandas: {
                select: {
                  vianda: true,
                },
              },
            },
          },
        },
      });
      return NextResponse.json(carta);
    }
    const cartas = await prisma.Carta.findMany({
      select: {
        id: true,
        fechaInicio: true,
        fechaFin: true,
        status: true,
        diasSemana: {
          select: {
            dia: true,
            viandas: {
              select: {
                vianda: true,
              },
            },
          },
        },
      },
    });
    return NextResponse.json(cartas);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
