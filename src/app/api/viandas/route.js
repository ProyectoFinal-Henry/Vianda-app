import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const queryParams = new URLSearchParams(request.url.split("?")[1]);
  if (queryParams) {
    try {
      const ing1 = queryParams.get("ing1");
      const ing2 = queryParams.get("ing2");
      const ing3 = queryParams.get("ing3");
      const tipo = queryParams.get("tipo");
      const whereCondicion = [];
      if (ing1) {
        whereCondicion.push({
          ingredientes: {
            contains: ing1.toLowerCase(),
          },
        });
      }
      if (ing2) {
        whereCondicion.push({
          ingredientes: {
            contains: ing2.toLowerCase(),
          },
        });
      }

      if (ing3) {
        whereCondicion.push({
          ingredientes: {
            contains: ing3.toLowerCase(),
          },
        });
      }
      if (tipo) {
        whereCondicion.push({
          tipo: tipo,
        });
      }

      const viandas = await prisma.Vianda.findMany({
        where: {
          AND: whereCondicion,
        },
      });

      if (!viandas || viandas.length === 0) {
        return NextResponse.json("No se encontró una vianda que contenga estos elementos entre sus ingredientes.");
      }

      return NextResponse.json(viandas);
    } catch (error) {
      return NextResponse.json({ error: error.message });
    }
  } else {
    try {
      const viandas = await prisma.Vianda.findMany();
      return NextResponse.json(viandas);
    } catch (error) {
      return NextResponse.json("Error al obtener las viandas");
    }
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
