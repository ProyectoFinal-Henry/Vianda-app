import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const all = searchParams.get("all");

    if (all) {
      const viandas = await prisma.vianda.findMany({ where: { estado: true } });
      return NextResponse.json(viandas);
    }
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { dia, viandaId, tipo } = body;

    //paso 1 buscar todas las viandas de ese [tipo](vegetariano, sin HArinas etcc) con ese [dia](lunes,martes) en true y ponerlas en false
    const reset = await prisma.vianda.updateMany({
      data: {
        [dia]: false,
      },
      where: {
        tipo: tipo,
        [dia]: true,
      },
    });
    // paso 2 establecer la vianda con ese id en true para el campo [lunes, martes, miercoles, jueves, viernes] segun venga
    const setMenuItem = await prisma.vianda.update({
      data: {
        [dia]: true,
      },
      where: {
        id: Number(viandaId),
      },
    });
    // console.log("file: route.js:42  setMenuItem:", setMenuItem)
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const reset = searchParams.get("reset");

    if (reset) {
      const semanaReset = await prisma.vianda.updateMany({
        data: {
          lunes: false,
          martes: false,
          miercoles: false,
          jueves: false,
          viernes: false,
          sabado: false,
          domingo: false,
        },
      });
      return NextResponse.json("Reset de semana ok!");
    }
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
