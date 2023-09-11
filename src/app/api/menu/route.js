import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const dia = searchParams.get("dia"); //tomo por query el dia de la semana que quiero ver.
    // console.log(dia);
    const diaObj = {};
    diaObj[dia] = true;

    const clasico = await prisma.vianda.findMany({
      where: {
        tipo: "clasico",
        ...diaObj,
      },
    });
    const sinHarinas = await prisma.vianda.findMany({
      where: {
        tipo: "sinHarinas",
        ...diaObj,
      },
    });
    const dieta = await prisma.vianda.findMany({
      where: {
        tipo: "dieta",
        ...diaObj,
      },
    });
    const vegetariano = await prisma.vianda.findMany({
      where: {
        tipo: "vegetariano",
        ...diaObj,
      },
    });
    return NextResponse.json({
      clasico,
      sinHarinas,
      vegetariano,
      dieta,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const reset = await prisma.vianda.updateMany({
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

    const results = [];

    for (const dia of Object.keys(body)) {
      // Recorro los días del menú semanal

      for (const tipo of Object.keys(body[dia])) {
        // Recorro los tipos de viandas para cada día

        const { id } = body[dia][tipo]; // saco el id de la vianda

        const result = await prisma.vianda.updateMany({
          where: { id }, //filtro por id y cambio el valor false de la vianda a true, mostrando que está disponible.
          data: { [dia]: true },
        });

        results.push(result);
      }
    }
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
