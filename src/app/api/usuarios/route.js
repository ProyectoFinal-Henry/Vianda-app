import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  if (searchParams.toString().length > 0) {
    try {
      const nombre = searchParams.get("nombre");
      const email = searchParams.get("email");
      const dni = searchParams.get("dni");

      let value = "";
      let key = "";
      if (nombre) {
        value = nombre;
        key = "nombreCompleto";
      }
      if (email) {
        value = email;
        key = "email";
      }
      if (dni) {
        value = dni;
        key = "dni";
      }

      const usuario = await prisma.usuario.findUnique({
        where: {
          email: email,
        },
      });
      if (usuario) return NextResponse.json(usuario);
    } catch (error) {
      return NextResponse.json(error);
    }
  } else {
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
}
