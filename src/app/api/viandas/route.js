import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const viandas = await prisma.Vianda.findMany();
    return NextResponse.json(viandas);
  } catch (error) {
    return NextResponse.json("Error al obtener las viandas");
  }
}

export async function POST(request) {
  try {
    const { nombre, tipo, descripcion, ingredientes, imagen, stock } =
      await request.json();
    await prisma.Vianda.create({
      data: {
        nombre,
        tipo,
        descripcion,
        ingredientes,
        imagen,
        stock,
      },
    });
    return NextResponse.json("Vianda creada exitosamente!");
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

export async function PUT(request) {
  try {
    const queryParams = new URLSearchParams(request.url.split("?")[1]);
    const id = queryParams.get("id");

    const { nombre, tipo, descripcion, ingredientes, imagen, stock } =
      await request.json();

    const vianda = await prisma.Vianda.update({
      where: { id: parseInt(id, 10) },
      data: {
        nombre,
        tipo,
        descripcion,
        ingredientes,
        imagen,
        stock,
      },
    });

    return NextResponse.json("Vianda actualizada exitosamente!");
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}