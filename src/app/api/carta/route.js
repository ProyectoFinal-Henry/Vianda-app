import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { fechaInicio, fechaFin, lunes, martes } = await request.json();

    const nuevaCarta = await prisma.Carta.create({
      data: {
        fechaInicio,
        fechaFin,
        lunes: {
          create: lunes.map((vianda) => ({
            nombre: vianda.nombre,
            tipo: vianda.tipo,
            descripcion: vianda.descripcion,
            ingredientes: vianda.ingredientes,
            imagen: vianda.imagen,
            stock: vianda.stock,
          })),
        },
        martes: {
          create: martes.map((vianda) => ({
            nombre: vianda.nombre,
            tipo: vianda.tipo,
            descripcion: vianda.descripcion,
            ingredientes: vianda.ingredientes,
            imagen: vianda.imagen,
            stock: vianda.stock,
          })),
        },
        miercoles: {
          create: miercoles.map((vianda) => ({
            nombre: vianda.nombre,
            tipo: vianda.tipo,
            descripcion: vianda.descripcion,
            ingredientes: vianda.ingredientes,
            imagen: vianda.imagen,
            stock: vianda.stock,
          })),
        },
        jueves: {
          create: jueves.map((vianda) => ({
            nombre: vianda.nombre,
            tipo: vianda.tipo,
            descripcion: vianda.descripcion,
            ingredientes: vianda.ingredientes,
            imagen: vianda.imagen,
            stock: vianda.stock,
          })),
        },
        viernes: {
          create: viernes.map((vianda) => ({
            nombre: vianda.nombre,
            tipo: vianda.tipo,
            descripcion: vianda.descripcion,
            ingredientes: vianda.ingredientes,
            imagen: vianda.imagen,
            stock: vianda.stock,
          })),
        },
      },
    });

    return NextResponse.json(nuevaCarta);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

export async function GET() {
  try {
    const carta = await prisma.Carta.findMany({
      include: {
        lunes: true,
        martes: true,
      },
    });
    return NextResponse.json(carta);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
