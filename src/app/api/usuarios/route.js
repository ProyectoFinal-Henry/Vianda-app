import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  try {
    const usuarios = await prisma.usuario.findMany();
    return NextResponse.json(usuarios);
  } catch (error) {
    return NextResponse.json({
      message: "Error obteniendo la lista de usuarios",
      error: error.message,
    });
  }
}
